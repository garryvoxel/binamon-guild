//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {IERC721} from "./IERC721.sol";
import {DataTypes} from "./../libraries/types/DataTypes.sol";

interface IBinamonCollectionV2 is IERC721 {
    function tokenDetails(uint256 tokenId)
        external
        view
        returns (DataTypes.BinamonTokenV2 memory token, DataTypes.BinamonTypeV2 memory type_);

    function isBanned(address user1, address user2, uint256 tokenId)
        external 
        view 
        returns (bool);

    function arrestToken(uint256 tokenId) external;
}