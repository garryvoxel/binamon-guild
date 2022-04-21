//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import {IERC20} from "./IERC20.sol";

interface IGuildToken is IERC20 {
    /* function mintTokensForVesting(
        address mintAddress,
        uint256 amount,
        uint256 initialPeriod,
        uint256 entirePeriod                 
    ) external; */

    function mintTokens(
        address mintAddress,
        uint256 amount       
    ) external;

    event MintTokensForVesting(address indexed mintAddress, uint256 amount);
    event Released(address indexed account, uint256 releasedAmount);
    event AddLiquidityForGTVZ2(uint256 amountA, uint256 amountB, uint256 liquidity);
    event RemoveLiquidity(uint256 amountA, uint256 amountB);
}