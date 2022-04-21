//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {Trustable} from "./dependencies/Trustable.sol";
import {DataTypes} from "./dependencies/libraries/types/DataTypes.sol";
import {Errors} from "./dependencies/libraries/Errors.sol";
import {Strings} from "./dependencies/libraries/Strings.sol";

contract GuildCore is Trustable {
    using Strings for uint256;

    address public _guildFactory;
    address public _guildToken;
    address public _owner;

    DataTypes.GuildCoreInfo private _info;
    uint256[] private _genesisMonsters;

    mapping(bytes32 => address) private _referralCodeUserMappings;
    mapping(address => string) private _userReferralCode;

    uint256 private accumulatedNumber;

    constructor() {
        _guildFactory = _msgSender();
    }

    function getUserReferralCode(address user_) public view returns (string memory) {
        return _userReferralCode[user_];
    }

    function initialize(
        address owner_,
        address guildTokenAddr,
        DataTypes.GuildCoreInfo memory gInfo,
        uint256[] memory monsters 
    ) external {
        require(_msgSender() == _guildFactory, Errors.GC_FORBIDDEN);
        _owner = owner_;
        _guildToken = guildTokenAddr;
        _genesisMonsters = monsters;
        _info = gInfo;
        _registerReferralCode(owner_);
    }

    function requestJoin(address requester, bytes32 referrer) external {
    }

    function _registerReferralCode(address user) private {
        accumulatedNumber = accumulatedNumber + 1;
        string memory referralCode = string(abi.encodePacked(_info.symbol, "-", accumulatedNumber.toStringWithFormats()));
        bytes32 referralCodeHash = keccak256(
            abi.encodePacked(user, _info.name, block.number)
        );
        _referralCodeUserMappings[referralCodeHash] = user;
        _userReferralCode[user] = referralCode;
    }
}