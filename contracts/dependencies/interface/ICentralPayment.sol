//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

interface ICentralPayment {

    function getOwnerVestingPeriod() external view returns (uint256, uint256);

    function getMemberVestingPeriod() external view returns (uint256, uint256);

    function getGTMintAmountForGuildOwner(
        uint256[] memory genesisMonsters,
        uint256 lockingBmonAmount
    ) external view returns(uint256, uint256);

    function getZ2MintAmount(
        uint256 gtAmount
    ) external view returns(uint256);

}