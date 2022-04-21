//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

library Errors {
    //contract specific errors
    string public constant GF_OWNER_MONSTER_AMOUNT = '1'; // 'Owner should provide more monsters.'
    string public constant GF_ALREADY_SUBSCRIBED = '2'; // 'You already subscribed in other guild'
    string public constant GF_NOT_ENOUGH_MIN_BMON_LOCKING = '3'; // 'You should lock more BMON tokens'
    string public constant GF_NOT_ENOUGH_YOUR_BALANCE = '4'; // 'You balance is not enough for request' 
    string public constant GF_NOT_OWNED_LAND = '5'; // 'You are not owner of this land'
    string public constant GF_NOT_OWNED_GENESIS_MONSTER = '6'; // 'Some of Genesis Monsters are not owned by you'

    string public constant GF_DUPLICATE_GUILD_NAME = '7'; // 'This name is already used in other guild'
    string public constant GF_DUPLICATE_GUILD_SYMBOL = '8'; // 'This symbol is already used in other guild'


    string public constant GC_FORBIDDEN = '21'; // 'Guild Core: FORBIDDEN'

    string public constant GT_AMOUNT_EXCEEDS_ALLOWANCE = '51'; // 'GuildToken: transfer amount exceeds allowance'
    string public constant GT_DECREASED_ALLOWANCE_ERR = '52'; // 'GuildToken: decreased allowance below zero'
    string public constant GT_MINT_ADDRESS_ERR = '53'; // 'GuildToken: mint to the zero address'
    string public constant GT_BURN_ADDRESS_ERR = '54'; // 'GuildToken: burn from the zero address'
    string public constant GT_BURN_AMOUNT_ERR = '55'; // 'GuildToken: burn amount exceeds balance'

    string public constant GT_TRANSFER_FROM_ZERO_ADDRESS = '56'; // 'GuildToken: transfer from the zero address'
    string public constant GT_TRANSFER_TO_ZERO_ADDRESS = '57'; // 'GuildToken: transfer to the zero address'
    string public constant GT_TRANSFER_AMOUNT_EXCEEDS = '58'; // 'GuildToken: transfer amount exceeds balance'

    string public constant GT_APPROVE_FROM_ZERO_ADDRESS = '59'; // 'GuildToken: approve from the zero address'
    string public constant GT_APPROVE_TO_ZERO_ADDRESS = '60'; // 'GuildToken: approve to the zero address'
    string public constant GT_NO_VESTING_AMOUNT = '61'; // 'GuildToken: You don't have vesting amount'
    string public constant GT_IN_VESTING_INITIAL_PERIOD = '62'; // 'GuildToken: It is still in  vesting initial period'
    string public constant GT_SET_AMM_PAIR_ERROR = '63'; // 'GuildToken: The Pankcakeswap pair cannot be removed from automatedMarketMakerPairs'

    string public constant Z2_MINT_ADDRESS_ERR = '81'; // 'BMON-Z2: mint to the zero address'
    string public constant Z2_TRANSFER_FROM_ZERO_ADDRESS = '82'; // 'Z2: transfer from the zero address'
    string public constant Z2_TRANSFER_TO_ZERO_ADDRESS = '83'; // 'Z2: transfer from the zero address'
    string public constant Z2_TRANSFER_AMOUNT_EXCEEDS = '84'; // 'Z2: transfer amount exceeds balance'
    string public constant Z2_TRANSFER_AMOUNT_UNDER_ZERO = '85'; // 'Z2: Transfer amount must be greater than zero'
    string public constant Z2_AMOUNT_EXCEEDS_ALLOWANCE = '86'; // 'Z2: transfer amount exceeds allowance'
    string public constant Z2_DECREASED_ALLOWANCE_ERR = '87'; // 'Z2: decreased allowance below zero'
    string public constant Z2_BURN_ADDRESS_ERR = '88'; // 'Z2: burn from the zero address'
    string public constant Z2_BURN_AMOUNT_ERR = '89'; // 'Z2: burn amount exceeds balance'
    string public constant Z2_APPROVE_FROM_ZERO_ADDRESS = '90'; // 'Z2: approve from the zero address'
    string public constant Z2_APPROVE_TO_ZERO_ADDRESS = '91'; // 'Z2: approve to the zero address'
    
}