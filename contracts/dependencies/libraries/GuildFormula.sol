//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

library GuildFormula {
    function randomness(uint256 from, uint256 to) internal view returns(uint256) {
        if(from > to) {
            uint temp = from;
            from = to; 
            to = temp;
        }
        uint256 randomHash = uint256(keccak256(abi.encodePacked(block.timestamp - 1996))) % (to - from + 1) + from;
        return randomHash;
    }

    function calculateFromPercentage(uint256 amount, uint256[] memory percentage) internal pure returns(uint256[] memory) {
        uint[] memory calculated = new uint[](percentage.length + 1);
        uint lastValue = amount;
        for(uint i = 0; i < percentage.length; i ++) {          
            calculated[i] = amount * percentage[i] / 100;
            lastValue = lastValue - calculated[i];
        }
        calculated[percentage.length] = lastValue;
        return calculated;
    }
}