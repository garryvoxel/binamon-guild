//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {IERC20} from "./IERC20.sol";

interface IBMONZ2 is IERC20 {
    function mintZ2Tokens(address account, uint256 amount) external;
    function setAmmPairs(address pair, bool value) external;
}