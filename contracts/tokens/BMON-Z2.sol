// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import {IBMONZ2} from "./../dependencies/interface/IBMONZ2.sol";
import {Trustable} from "./../dependencies/Trustable.sol";
import {Errors} from "./../dependencies/libraries/Errors.sol";
import {IGuildFactory} from "./../dependencies/interface/IGuildFactory.sol";

contract BMON_Z2 is IBMONZ2, Trustable {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;
    uint8 private _decimals = 18;

    // Guild Variable
    address public _guildFactory;
    mapping (address => bool) private _ammPairs;

    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        _transfer(_msgSender(), to, amount);
        return true;
    }

    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        uint256 currentAllowance = _allowances[from][_msgSender()];

        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, Errors.Z2_AMOUNT_EXCEEDS_ALLOWANCE);
            unchecked {
                _approve(from, _msgSender(), currentAllowance - amount);
            }
        }

        _transfer(from, to, amount);

        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] + addedValue);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        uint256 currentAllowance = _allowances[_msgSender()][spender];
        require(currentAllowance >= subtractedValue, Errors.Z2_DECREASED_ALLOWANCE_ERR);
        unchecked {
            _approve(_msgSender(), spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    function mintZ2Tokens(address account, uint256 amount) external isTrusted {
        _mint(account, amount);
    }

    function setGuildFactoryAddress(address guildFactoryAddr) public isTrusted {
        _guildFactory = guildFactoryAddr;
    }

    function setAmmPairs(address pair, bool value) public isTrusted {
        _ammPairs[pair] = value;
    }

    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), Errors.Z2_MINT_ADDRESS_ERR);

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), Errors.Z2_BURN_ADDRESS_ERR);

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, Errors.Z2_BURN_AMOUNT_ERR);
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), Errors.Z2_TRANSFER_FROM_ZERO_ADDRESS);
        require(to != address(0), Errors.Z2_TRANSFER_TO_ZERO_ADDRESS);

        _beforeTokenTransfer(from, to, amount);
        
        uint256 senderBalance = _balances[from];
        require(senderBalance >= amount, Errors.Z2_TRANSFER_AMOUNT_EXCEEDS);
        unchecked {
            _balances[from] = senderBalance - amount;
        }

        // z2 sell
        if(_ammPairs[to]) {
            //get gtBuyVariable from GuildFactory
            uint256 gtBuyVariable = IGuildFactory(_guildFactory)._gtBuyVariable();
            uint256 burnAmount = amount;
            amount = amount * (10000 - gtBuyVariable) / 10000;
            burnAmount = burnAmount - amount;
            //burn Z2
            _totalSupply -= burnAmount;
            emit Transfer(from, address(0), burnAmount);
        }

        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), Errors.Z2_APPROVE_FROM_ZERO_ADDRESS);
        require(spender != address(0), Errors.Z2_APPROVE_TO_ZERO_ADDRESS);

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}