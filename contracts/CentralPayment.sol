//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {GuildFormula} from "./dependencies/libraries/GuildFormula.sol";
import {IUniswapV2Pair} from "./dependencies/interface/IUniswapV2Pair.sol";
import {IBinamonCollectionV2} from "./dependencies/interface/IBinamonCollectionV2.sol";
import {ICentralPayment} from "./dependencies/interface/ICentralPayment.sol";
import {DataTypes} from "./dependencies/libraries/types/DataTypes.sol";
import {Trustable} from "./dependencies/Trustable.sol";

/**
* @title CentralPayment contract
* @dev Manage guild payment distribution and price
*   # getGuildOwnerMintAmount
* @author Binamon
**/
contract CentralPayment is ICentralPayment, Trustable {
    using GuildFormula for uint256;
    struct UserTokenBalance {
        uint256 guildTokenAmount;
        uint256 bmonAmount;
        uint256 bmonZ2Amount;
        uint256 bnbAmount;
    }

    mapping(address=>UserTokenBalance) private _balances;

    uint256 public _decimals = 18;

    // Pancakeswap Pair for BMON/BNB and BNB/BUSD
    address public immutable BMON_V_BNB;
    address public immutable BNB_V_BUSD;
    // Pancakeswap Pair for BMON-Z2/BNB
    address public immutable Z2_V_BNB;
    // Genesis Collection Address
    address public immutable BMONC_ADDRESS; 

    // Guild Token mint variable for Guild Owner
    uint256 private _multiplier = 27;
    uint256 private _boosterPrice = 1000;
    uint256 private _gtVestingMultiplier = 100;
    uint256 private _gtLiquidityMultiplier = 30;
    uint256 private _landUSDPrice = 400;

    // Guild Token vesting variable (days)
    uint256 public _ownerInitialVestingPeriod = 60;
    uint256 public _ownerEntireVestingPeriod = 365; 
    uint256 public _memberInitialVestingPeriod = 30;
    uint256 public _memberEntireVestingPeriod = 30;
    // Percentage
    uint256[] private breedFeePercent;

    constructor(address bmonVbnb, address bnbVbusd, address bmoncAddress, address z2Vbnb) {
        BMON_V_BNB = bmonVbnb;
        BNB_V_BUSD = bnbVbusd;
        BMONC_ADDRESS = bmoncAddress;
        Z2_V_BNB = z2Vbnb;
    }

    function getOwnerVestingPeriod() public view virtual override returns (uint256, uint256) {
        return (_ownerInitialVestingPeriod, _ownerEntireVestingPeriod);
    }

    function getMemberVestingPeriod() public view virtual override returns(uint256, uint256) {
        return (_memberInitialVestingPeriod, _memberEntireVestingPeriod);
    }

    /**
    * set CentralPayment setting variable
    */

    // guildOwner, parentA, parentB, referral
    function setBreedFeePercent(uint256[] memory _bfPercent) public {
        breedFeePercent = _bfPercent;
    }
    
    // Guild Token Mint Setting
    function setGtVestingMultiplier(uint256 gtVestingMultiplier) external isTrusted  {
        require(gtVestingMultiplier > 0);
        _gtVestingMultiplier = gtVestingMultiplier;
    }

    function setGtLiquidityMultiplier(uint256 gtLiquidityMultiplier) external isTrusted  {
        require(gtLiquidityMultiplier > 0);
        _gtLiquidityMultiplier = gtLiquidityMultiplier;
    }

    function setMultiplier(uint256 multiplier) external isTrusted {
        _multiplier = multiplier;
    }

    function setBoosterPrice(uint256 boosterPrice) external isTrusted {
        _boosterPrice = boosterPrice;
    }

    function setLandUSDPrice(uint256 landUSDPrice) external isTrusted {
        _landUSDPrice = landUSDPrice;
    }

    // Modify Vesting Period for owner and member
    function setOwnerVestingPeriod(uint256 initial, uint256 entire) external isTrusted {
        _ownerInitialVestingPeriod = initial;
        _ownerEntireVestingPeriod = entire;
    }

    function setMemberVestingPeriod(uint256 initial, uint256 entire) external isTrusted {
        _memberInitialVestingPeriod = initial;
        _memberEntireVestingPeriod = entire;
    }

    /**
    * CentralPayment main logic
    */

    function distributeForBreedFee(
        address _guildOwner,
        address _parentA,
        address _parentB,
        address _referral,
        uint256 breedFee
    ) public returns(bool) {
        uint256[] memory breedValues = breedFee.calculateFromPercentage(breedFeePercent);    

        _balances[_guildOwner].guildTokenAmount = _balances[_guildOwner].guildTokenAmount + breedValues[0];
        _balances[_parentA].guildTokenAmount = _balances[_parentA].guildTokenAmount + breedValues[1];
        _balances[_parentB].guildTokenAmount = _balances[_parentB].guildTokenAmount + breedValues[2];
        _balances[_referral].guildTokenAmount = _balances[_referral].guildTokenAmount + breedValues[3];

        return true;
    }

    function getGTMintAmountForGuildOwner(
        uint256[] memory genesisMonsters, uint256 lockingBmonAmount
    ) public view virtual override isTrusted returns(uint256 vestingAmount, uint256 liquidityAmount) {
        uint256 bmonUSDPrice = getBmonUsdPrice();
        for(uint256 i = 0; i < genesisMonsters.length; i ++) {
            vestingAmount = vestingAmount + getGenesisMonsterPrice(genesisMonsters[i], bmonUSDPrice);
        }
        // land Amount   400 * (10**18)
        // 5 - prob decimal
        vestingAmount = vestingAmount + _landUSDPrice * (10**18);
        vestingAmount = vestingAmount + lockingBmonAmount * bmonUSDPrice / (10**18);

        liquidityAmount = vestingAmount * _gtLiquidityMultiplier / (10**2);
        vestingAmount = vestingAmount * _gtVestingMultiplier / (10**2);
    }

    function getGenesisMonsterPrice(uint256 tokenId, uint256 bmonUSDPrice) public view returns(uint256) {
        uint[12] memory aprob = [uint(33150), 20000, 15000, 10000, 8000, 6000, 4000, 2000, 1000, 500, 250, 100];
        uint[12] memory cprob = [uint(33915), 20000, 15000, 10000, 8000, 6000, 4000, 2000, 1000, 50, 25, 10];
        uint[10] memory hprob = [uint(30000), 20000, 15000, 10000, 8000, 6000, 5000, 3000, 2000, 1000];

        (
            DataTypes.BinamonTokenV2 memory token,
        ) = IBinamonCollectionV2(BMONC_ADDRESS).tokenDetails(tokenId);

        uint eprob = 1000;

        if(token.paramValues[3] == 1) eprob = 35000;
        else if(token.paramValues[3] == 2) eprob = 25000;
        else if(token.paramValues[3] == 3) eprob = 20000;
        else if(token.paramValues[3] == 4) eprob = 15000;
        else if(token.paramValues[3] == 5) eprob = 4000;
        // 5 - prob decimal
        // 18 - decimal
        return ((_boosterPrice * 10**(5*4)) * bmonUSDPrice * _multiplier) / (eprob * aprob[token.paramValues[1] - 1] * hprob[token.paramValues[2] - 1] * cprob[token.paramValues[0] - 1] * 3000);
    }

    function getBmonUsdPrice() public view returns(uint256) {
        (uint256 reserveBmon, uint256 reserveBnb,) = IUniswapV2Pair(BMON_V_BNB).getReserves();
        (uint256 reserveBnb2, uint256 reserveBusd,) = IUniswapV2Pair(BNB_V_BUSD).getReserves();

        if(reserveBmon == 0 || reserveBnb2 == 0)
            return 0;
        
        return (reserveBnb * reserveBusd * 10**_decimals) / (reserveBmon * reserveBnb2);
    }

    function getZ2MintAmount(
        uint256 gtAmount
    ) public view virtual override isTrusted returns(uint256 mintAmount) {
        mintAmount = gtAmount * 10**_decimals / getZ2UsdPrice();
    }

    function getZ2UsdPrice() public view returns(uint256) {
        (uint256 reserveZ2, uint256 reserveBnb,) = IUniswapV2Pair(BMON_V_BNB).getReserves();
        (uint256 reserveBnb2, uint256 reserveBusd,) = IUniswapV2Pair(BNB_V_BUSD).getReserves();

        if(reserveZ2 == 0 || reserveBnb2 == 0)
            return 0;

        return (reserveBnb * reserveBusd * 10**_decimals) / (reserveZ2 * reserveBnb2);    
    }
}