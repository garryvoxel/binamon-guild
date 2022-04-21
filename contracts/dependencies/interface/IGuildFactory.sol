// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

interface IGuildFactory {
    function getGuildAddress(uint256 guildId) external view returns (address);
    function _centralPayment() external view returns (address);
    function _gtBuyVariable() external view returns (uint256);
    function isAlreadySubscribedGuild(address user) external view returns (bool);

    event GuildCreated(bool sucess, address indexed owner, uint256 guildId);
}