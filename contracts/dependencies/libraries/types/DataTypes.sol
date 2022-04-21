//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

library DataTypes {
    struct VestingData {
        uint256 startTime;          // vesting start time
        uint256 amountTotal;        // vesting total amount
        uint256 releasedAmount;
        bool released;              // true if all vesting amount is released
        uint256 initialPeriod;      // days
        uint256 entirePeriod;       // days
    }

    struct GuildCoreInfo {
        uint256 guildId;
        uint256 landTokenId;
        string name;
        string symbol;
        string logo;
    }

    struct GuildInitialParam {
        uint256 vestingAmount;
        uint256 liquidityAmount;
        uint256 ownerInitialVestingPeriod;
        uint256 ownerEntireVestingPeriod;
        GuildCoreInfo info;
    }

    struct GTInitialParam {
        uint256 vestingAmount;
        uint256 liquidityAmount;
        uint256 ownerInitialVestingPeriod;
        uint256 ownerEntireVestingPeriod;
    }

    struct GuildRequest {
        bytes32 referrer;
        uint256 monsterId;
        uint256 timestamp;
    }

    struct BinamonTokenV2 {
        uint256 _type;
        uint256[] paramValues;
    }

    struct BinamonTypeV2 {
        string _hash;
        string _name;
        string _extra;
        string _info;
    }
}