//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

library Strings {
    function toStringWithFormats(uint256 value) internal pure returns (string memory) {
        if(value == 0) {
            return "000000";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }

        uint256 formatDigits;

        if(digits <= 6)
            formatDigits = 6;
        else
            formatDigits = digits;

        uint256 i = formatDigits;

        bytes memory buffer = new bytes(formatDigits);
        while (value != 0) {
            i -= 1;
            buffer[i] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }

        for(i = 0; i < formatDigits - digits; i ++)
            buffer[i] = bytes1(uint8(48));
        
        return string(buffer);
    }

    function toString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}
