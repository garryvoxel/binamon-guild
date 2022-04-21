//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {IERC20} from "./dependencies/interface/IERC20.sol";
import {IERC721} from "./dependencies/interface/IERC721.sol";
import {IGuildFactory} from "./dependencies/interface/IGuildFactory.sol";
import {IBinamonCollectionV2} from "./dependencies/interface/IBinamonCollectionV2.sol";
import {ICentralPayment} from "./dependencies/interface/ICentralPayment.sol";
import {GuildCore} from "./GuildCore.sol";
import {GuildToken} from "./tokens/GuildToken.sol";
import {Trustable} from "./dependencies/Trustable.sol";
import {Errors} from "./dependencies/libraries/Errors.sol";
import {DataTypes} from "./dependencies/libraries/types/DataTypes.sol";
import {Strings} from "./dependencies/libraries/Strings.sol";
/**
* @title GuildFactory contract
* @dev This is the contract that creates guild and manages guild list
*       # createGuild
* @author Binamon
**/
contract GuildFactory is IGuildFactory, Trustable {
    using Strings for uint256;
    
    // main configuration address
    address public immutable BMON_ADDRESS;          // BMON token address
    address public immutable BNRG_ADDRES;           // BNRG token address (for energy)
    address public immutable BMON_Z2_ADDRES;        // BMON-Z2 address
    address public immutable BMONC_ADDRESS;         // Genesis Collection Address
    address public immutable BMONEC_ADDRESS;        // Energy Collection Address
    address public immutable BMONC_Z1_ADDRESS;      // Z1 Collection Address
    address public immutable BLAND_ADDRESS;         // Land Collection Address

    address public _centralPayment;

    // asset requirement of guild owner
    uint256 public _createGenesisMonstersNum = 2;
    uint256 public _createPayBmonAmount = 50000 * 10**18;
    uint256 public _createLockingBmonMinAmount = 100000 * 10**18;

    address private _treasuryWallet;

    uint256 private _maxGuildId;
    mapping(uint256 => address) private _guildAddrs;
    mapping(uint256 => address) private _guildTokenAddrs;

    mapping(address => uint256) private _subscribers;
    mapping(bytes32 => uint256) private _guildNames;
    mapping(bytes32 => uint256) private _guildSymbols;

    // GTvsZ2 tokenSwapVariable: decimal 2
    uint256 public _gtBuyVariable = 2500;

    constructor(
        address bmonAddress,
        address bnrgAddress,
        address bmonZ2Address,
        address bmoncAddress,
        address bmonecAddress,
        address bmoncZ1Address,
        address blandAddress,
        address tWallet
    ) {
        BMON_ADDRESS = bmonAddress;
        BNRG_ADDRES = bnrgAddress;
        BMON_Z2_ADDRES = bmonZ2Address;
        BMONC_ADDRESS = bmoncAddress;
        BMONEC_ADDRESS = bmonecAddress;
        BMONC_Z1_ADDRESS = bmoncZ1Address;
        BLAND_ADDRESS = blandAddress;
        _treasuryWallet = tWallet;
    }

    function getGuildAddress(uint256 guildId) public view virtual override returns (address) {
        return _guildAddrs[guildId];
    }

    function isAlreadySubscribedGuild(address user) public view virtual override returns (bool) {
        return _subscribers[user] > 0;
    }

    function createGuild(
        uint256 bmonLockingAmount,
        uint256 landElement,
        string memory name,
        string memory symbol,
        string memory logo,
        uint256[] calldata genesisMonsters
    ) external returns (bool) {
        require(!isAlreadySubscribedGuild( _msgSender()), Errors.GF_ALREADY_SUBSCRIBED);

        bytes32 _name = keccak256(abi.encodePacked(name));
        bytes32 _symbol = keccak256(abi.encodePacked(symbol));        

        require(_guildNames[_name] == 0, Errors.GF_DUPLICATE_GUILD_NAME);
        require(_guildSymbols[_symbol] == 0, Errors.GF_DUPLICATE_GUILD_SYMBOL);

        require(genesisMonsters.length < _createGenesisMonstersNum, Errors.GF_OWNER_MONSTER_AMOUNT);
        require(bmonLockingAmount >= _createLockingBmonMinAmount, Errors.GF_NOT_ENOUGH_MIN_BMON_LOCKING);
        require(bmonLockingAmount + _createPayBmonAmount >= 
                IERC20(BMON_ADDRESS).balanceOf(_msgSender()), Errors.GF_NOT_ENOUGH_YOUR_BALANCE);

        require(IERC721(BLAND_ADDRESS).ownerOf(landElement) == _msgSender(), Errors.GF_NOT_OWNED_LAND);

        {   
            uint256 bannedMonsters = 0;
            for(uint256 i = 0; i < genesisMonsters.length; i ++) {
                require(
                    IBinamonCollectionV2(BMONC_ADDRESS).ownerOf(genesisMonsters[i]) == _msgSender(),
                    Errors.GF_NOT_OWNED_GENESIS_MONSTER
                );

                bool isBanned = IBinamonCollectionV2(BMONC_ADDRESS).isBanned(
                    _msgSender(),
                    address(0),
                    genesisMonsters[i]
                );

                if(isBanned) {
                    IBinamonCollectionV2(BMONC_ADDRESS).arrestToken(genesisMonsters[i]);
                    bannedMonsters = bannedMonsters + 1;   
                }
            }

            if(bannedMonsters > 0) {
                emit GuildCreated(false, _msgSender(), 0);
                return false;
            }
        }

        //Create Guild Token:
        address gtAddress = _createGuildToken();
        
        //Create Guild Core:
        bytes memory bytecode = type(GuildCore).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(_msgSender(), "GuildCore"));
        address guildAddress;
        assembly {
            guildAddress := create2(0, add(bytecode, 32), mload(bytecode), salt)
            if iszero(extcodesize(guildAddress)) {
                revert(0, 0)
            }            
        }

        //Process assets with Guild Core:
        for(uint256 i = 0; i < genesisMonsters.length; i ++) {
            IERC721(BMONC_ADDRESS).safeTransferFrom(_msgSender(), guildAddress, genesisMonsters[i]);
        }
        IERC721(BLAND_ADDRESS).safeTransferFrom(_msgSender(), guildAddress, landElement);
        IERC20(BMON_ADDRESS).transferFrom(_msgSender(), _treasuryWallet, _createPayBmonAmount);
        IERC20(BMON_ADDRESS).transferFrom(_msgSender(), guildAddress, bmonLockingAmount);
        
        //Guild Contract initialize
        _maxGuildId = _maxGuildId + 1;
        
        DataTypes.GuildCoreInfo memory gInfo = 
                DataTypes.GuildCoreInfo(_maxGuildId, landElement, name, symbol, logo);

        GuildCore(guildAddress).initialize(_msgSender(), gtAddress, gInfo, genesisMonsters);

        DataTypes.GTInitialParam memory gtInitParam;
        (gtInitParam.vestingAmount, gtInitParam.liquidityAmount) = 
            ICentralPayment(_centralPayment).getGTMintAmountForGuildOwner(genesisMonsters, bmonLockingAmount);
        (gtInitParam.ownerInitialVestingPeriod, gtInitParam.ownerEntireVestingPeriod) = 
            ICentralPayment(_centralPayment).getOwnerVestingPeriod();

        GuildToken(gtAddress).initialize(name, symbol, BMON_Z2_ADDRES, gtInitParam);

        _guildAddrs[_maxGuildId] = guildAddress;
        _guildNames[_name] = _maxGuildId;
        _guildNames[_symbol] = _maxGuildId;
        _subscribers[_msgSender()] = _maxGuildId;
        _guildTokenAddrs[_maxGuildId] = gtAddress;

        emit GuildCreated(true, _msgSender(), _maxGuildId);

        return true;
    }

    function setCreateGenesisMonstersNum(uint256 genesisMonstersNum) external isTrusted {
        _createGenesisMonstersNum = genesisMonstersNum;
    }

    function setCreatePayBmonAmount(uint256 payBmonAmount) external isTrusted {
        _createPayBmonAmount = payBmonAmount;
    }

    function setCreateLockingBmonMinAmount(uint256 lockingBmonMinAMount) external isTrusted {
        _createLockingBmonMinAmount = lockingBmonMinAMount;
    }

    function setTreasuryWallet(address tWallet) external isTrusted {
        _treasuryWallet = tWallet;
    }

    function setCentralPaymentAddress(address cpAddress) external isTrusted {
        _centralPayment = cpAddress;
    }

    // gtBuyVariable decimal is 2
    function setGtBuyVariable(uint256 gtBuyVariable) external isTrusted {
        _gtBuyVariable = gtBuyVariable;
    }

    function _createGuildToken() private returns (address) {
        bytes memory bytecode = type(GuildToken).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(_msgSender(), "GuildToken", (_maxGuildId + 1).toString()));
        address gtAddress;
        assembly {
            gtAddress := create2(0, add(bytecode, 32), mload(bytecode), salt)
            if iszero(extcodesize(gtAddress)) {
                revert(0, 0)
            }            
        }

        return gtAddress;
    }
}