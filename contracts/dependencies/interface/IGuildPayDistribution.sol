// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

struct UserTokenBalance {
    uint256 guildTokenAmount;
    uint256 bmonAmount;
    uint256 bmonZ2Amount;
    uint256 bnbAmount;
}

interface IGuildPayDistribution {
    function distributeForBreedFee( 
        address _centralPayment, 
        address _guildOwner,
        address _parentA,
        address _parentB,
        address _referral,
        uint256 breedFee) external returns(bool);
    function balanceOfGT(address _user) external view returns (uint256);
    function balanceOfBMON(address _user) external view returns (uint256);
    function balanceOfZ2(address _user) external view returns (uint256);
    function balanceOfBNB(address _user) external view returns (uint256);
    function balanceOfAll(address _user) external view returns(UserTokenBalance memory);
}