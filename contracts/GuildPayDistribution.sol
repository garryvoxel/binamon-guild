//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
pragma abicoder v2;

import "./dependencies/interface/IGuildPayDistribution.sol";

contract GuildPayDistribution is IGuildPayDistribution {
    mapping(address=>UserTokenBalance) private _balances;   

    constructor() {}

    function distributeForBreedFee(
        address _centralPayment, 
        address _guildOwner,
        address _parentA,
        address _parentB,
        address _referral,
        uint256 breedFee) public override returns(bool) {
        (bool success, ) = _centralPayment.delegatecall(
            abi.encodeWithSignature("distributeForBreedFee(address,address,address,address,uint256)", _guildOwner, _parentA, _parentB, _referral, breedFee)
        );
        return success;
    }

    function balanceOfGT(address _user)
    public override
    view
    returns(uint256) {
        return _balances[_user].guildTokenAmount;
    }

    function balanceOfBMON(address _user)
    public override
    view
    returns(uint256) {
        return _balances[_user].bmonAmount;
    }

    function balanceOfZ2(address _user)
    public override
    view
    returns(uint256) {
        return _balances[_user].bmonZ2Amount;
    }

    function balanceOfBNB(address _user)
    public override
    view
    returns(uint256) {
        return _balances[_user].bnbAmount;
    }

    function balanceOfAll(address _user)
    public override
    view 
    returns(UserTokenBalance memory _balance) {
        return _balances[_user];
    }
}