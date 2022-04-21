// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import {IGuildToken} from "./../dependencies/interface/IGuildToken.sol";
import {IUniswapV2Router02} from "./../dependencies/interface/IUniswapV2Router02.sol";
import {IUniswapV2Factory} from "./../dependencies/interface/IUniswapV2Factory.sol";
import {IGuildFactory} from "./../dependencies/interface/IGuildFactory.sol";
import {ICentralPayment} from "./../dependencies/interface/ICentralPayment.sol";
import {IBMONZ2} from "./../dependencies/interface/IBMONZ2.sol";
import {IERC20} from "./../dependencies/interface/IERC20.sol";
import {Trustable} from "./../dependencies/Trustable.sol";
import {DataTypes} from "./../dependencies/libraries/types/DataTypes.sol";
import {Errors} from "./../dependencies/libraries/Errors.sol";

contract GuildToken is IGuildToken, Trustable {
    string private _name;
    string private _symbol;
    uint8 private _decimals = 18;

    uint256 private _totalSupply;

    //ERC20 variable
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    
    //Guild Factory Address
    address public _guildFactory;
    address public _bmonZ2Token;

    mapping(address => DataTypes.VestingData) private _vestings;
    mapping (address => bool) public _automatedMarketMakerPairs;

    //Uniswap Router,Pair for Liquidity
    IUniswapV2Router02 public _uniswapV2Router;
    address public _uniswapV2Pair;

    //Tax
    uint256 _taxFeeSell = 2000;

    constructor() {
        _guildFactory = _msgSender();
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

    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
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
        address sender,
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        uint256 currentAllowance = _allowances[sender][_msgSender()];
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, Errors.GT_AMOUNT_EXCEEDS_ALLOWANCE);
            unchecked {
                _approve(sender, _msgSender(), currentAllowance - amount);
            }
        }

        _transfer(sender, recipient, amount);

        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] + addedValue);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        uint256 currentAllowance = _allowances[_msgSender()][spender];
        require(currentAllowance >= subtractedValue, Errors.GT_DECREASED_ALLOWANCE_ERR);
        unchecked {
            _approve(_msgSender(), spender, currentAllowance - subtractedValue);
        }

        return true;
    }
    
    function initialize(
        string memory name_, 
        string memory symbol_,
        address bmonZ2Addr,
        DataTypes.GTInitialParam memory gtInitParam
    ) external {
        _name = name_;
        _symbol = symbol_;
        _bmonZ2Token = bmonZ2Addr;

        _mintTokensForVesting(
            address(this), 
            gtInitParam.vestingAmount, 
            gtInitParam.ownerInitialVestingPeriod, 
            gtInitParam.ownerEntireVestingPeriod
        );

        // create pair againt GT/Z2
        IUniswapV2Router02 uniswapV2Router = IUniswapV2Router02(0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F); // can be changed according to network
        _uniswapV2Pair = IUniswapV2Factory(_uniswapV2Router.factory())
            .createPair(address(this), bmonZ2Addr);

        _uniswapV2Router = uniswapV2Router;

        _setAutomatedMarketMakerPair(_uniswapV2Pair, true);
        //set pair to Z2 too
        IBMONZ2(_bmonZ2Token).setAmmPairs(_uniswapV2Pair, true);

        _addLiquidityToGTVZ2(gtInitParam.liquidityAmount);
    }

    function mintTokens(address mintAddress, uint256 amount) public virtual override isTrusted {
        _mint(mintAddress, amount);
    }

    //getLockAmount
    function getCurrentVestingAmount(address account) public view returns (uint256) {
        if(_vestings[account].released || _vestings[account].amountTotal == 0)
            return 0;
        
        return _vestings[account].amountTotal - _vestings[account].releasedAmount;
    }

    function getReleasableAmount() public view returns(uint256) {
        if(_vestings[_msgSender()].amountTotal == 0 || _vestings[_msgSender()].released)
            return 0;
        if(_vestings[_msgSender()].startTime + _vestings[_msgSender()].initialPeriod * 24 * 60 * 60 >= getCurrentTime())
            return 0;

        return _computeReleasableAmount(_msgSender());
    }

    //release tokens from Vesting
    function release() external {
        require(_vestings[_msgSender()].amountTotal > 0 && !_vestings[_msgSender()].released, Errors.GT_NO_VESTING_AMOUNT);

        require(_vestings[_msgSender()].startTime + _vestings[_msgSender()].initialPeriod * 24 * 60 * 60 < getCurrentTime(),
        Errors.GT_IN_VESTING_INITIAL_PERIOD);

        uint256 releaseAmount = _computeReleasableAmount(_msgSender());

        _transfer(address(this), _msgSender(), releaseAmount);
        _vestings[_msgSender()].releasedAmount = _vestings[_msgSender()].releasedAmount + releaseAmount;
       
       if( _vestings[_msgSender()].releasedAmount == _vestings[_msgSender()].amountTotal)
            _vestings[_msgSender()].released = true;

        emit Released(_msgSender(), releaseAmount);
    }

    function removeLiquidity() external isTrusted {
        uint256 liquidity = IERC20(_uniswapV2Pair).balanceOf(address(this));
        IERC20(_uniswapV2Pair).approve(address(_uniswapV2Router), liquidity);

        (uint256 amountA, uint256 amountB) = _uniswapV2Router.removeLiquidity(
            address(this),
            _bmonZ2Token,
            liquidity,
            1,
            1,
            address(this),
            block.timestamp
        );

        emit RemoveLiquidity(amountA, amountB);
    }

    function setAutomatedMarketMakerPair(address pair, bool value) public isTrusted {
        require(pair != _uniswapV2Pair, Errors.GT_SET_AMM_PAIR_ERROR);
        _setAutomatedMarketMakerPair(pair, value);
    }

    function setSellFee(uint256 taxFeeSell) public isTrusted {
        _taxFeeSell = taxFeeSell;
    }

    function withdrawRemainingToken(address account) public isTrusted {
        uint256 balance = balanceOf(address(this));
        _transfer(address(this), account, balance);
    }

    function withdrawRemainingERC20Token(address token, address account) public isTrusted {
        IERC20 Token = IERC20(token);
        uint256 balance = Token.balanceOf(address(this));
        Token.transfer(account, balance);
    }

    function getCurrentTime() 
        public
        view
        returns(uint256) {
            return block.timestamp;
    }

    function _setAutomatedMarketMakerPair(address pair, bool value) private {
        _automatedMarketMakerPairs[pair] = value;
    }

    function _computeReleasableAmount(address account) internal view returns(uint256) {
        uint256 passedDays = (getCurrentTime() - _vestings[account].startTime) / uint256(24 * 60 * 60);
        uint256 releaseAmount = ( _vestings[account].amountTotal * passedDays ) / _vestings[account].entirePeriod;
        if(releaseAmount >= _vestings[account].amountTotal)        
            releaseAmount = _vestings[account].amountTotal;
        return releaseAmount - _vestings[account].releasedAmount;
    }

    function _mintTokensForVesting(address mintAddress, uint256 amount,
    uint256 initialPeriod, uint256 entirePeriod) internal virtual {
        _mint(address(this), amount);
        _vestings[mintAddress] = DataTypes.VestingData(
            block.timestamp, 
            amount, 
            0, 
            false,
            initialPeriod, 
            entirePeriod
        );

        emit MintTokensForVesting(mintAddress, amount);
    }

    function _addLiquidityToGTVZ2(uint256 gtAmount) private {
        // mint GuildToken
        _mint(address(this), gtAmount);

        address _centralPayment = IGuildFactory(_guildFactory)._centralPayment();
        uint256 z2Amount = ICentralPayment(_centralPayment).getZ2MintAmount(gtAmount);

        // mint Z2Token
        IBMONZ2(_bmonZ2Token).mintZ2Tokens(address(this), z2Amount);

        // IERC20
        _approve(address(this), address(_uniswapV2Router), gtAmount);
        IERC20(_bmonZ2Token).approve(address(_uniswapV2Router), z2Amount);

        (uint256 amountA, uint256 amountB, uint256 liquidity) = _uniswapV2Router.addLiquidity(
            address(this),
            _bmonZ2Token,
            gtAmount,
            z2Amount,
            1,
            1,
            address(this),
            block.timestamp
        );

        emit AddLiquidityForGTVZ2(amountA, amountB, liquidity);
    }

    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), Errors.GT_MINT_ADDRESS_ERR);

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), Errors.GT_BURN_ADDRESS_ERR);

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, Errors.GT_BURN_AMOUNT_ERR);
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
        require(from != address(0), Errors.GT_TRANSFER_FROM_ZERO_ADDRESS);
        require(to != address(0), Errors.GT_TRANSFER_TO_ZERO_ADDRESS);

        _beforeTokenTransfer(from, to, amount);

        uint256 senderBalance = _balances[from];
        require(senderBalance >= amount, Errors.GT_TRANSFER_AMOUNT_EXCEEDS);
        unchecked {
            _balances[from] = senderBalance - amount;
        }
        // Buy GT
        if(_automatedMarketMakerPairs[from]) {
            //get gtBuyVariable from GuildFactory
            uint256 gtBuyVariable = IGuildFactory(_guildFactory)._gtBuyVariable();
            uint256 mintAmount = amount;
            amount = amount * 10000 / (10000 - gtBuyVariable);
            mintAmount = amount - mintAmount;
            //mint GT
            _totalSupply = _totalSupply + mintAmount;
            
            emit Transfer(address(0), to, mintAmount);
        } 
        // Sell GT
        if(_automatedMarketMakerPairs[to]) {
            uint256 burnAmount = amount * _taxFeeSell / 10000;
            amount = amount - burnAmount;
            //burn GT
            _totalSupply = _totalSupply - burnAmount;

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
        require(owner != address(0), Errors.GT_APPROVE_FROM_ZERO_ADDRESS);
        require(spender != address(0), Errors.GT_APPROVE_TO_ZERO_ADDRESS);

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