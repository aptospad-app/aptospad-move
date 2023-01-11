#!/bin/bash
APTOSPAD_ADDR='0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea'
RESOURCE_ADDR='0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7'
PROFILE="testnet6"
PAD_PATH=`pwd`

#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::initializeAptosPad" --args "u64:1000000000"

#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::setEmergency" --args "bool:false"

#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::setEmergency" --args "bool:false"

##softCap: u64, hardCap: u64, enableRefund: bool, aptToApttRate: u64, bypassWhitelist: bool
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::setApttSwapConfig" --args "u64:100000000000" "u64:100000000000000" "bool:false" "u64:100" "bool:true"

##public entry fun resetSeason(account: &signer){
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::resetSeason"

##public entry fun whiteListSeason(account: &signer){
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::whiteListSeason"

##public entry fun launchPadSeason(account: &signer){
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::launchPadSeason"

##public entry fun distributeSeason(account: &signer){
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::distributeSeason"
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::distributeSeason" --max-gas 2000000 --gas-unit-price 10000
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::paycoinAndRefund" --max-gas 2000000 --gas-unit-price 10000

## withdrawAptos(admin: &signer, debit: address, amount: u64)
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::withdrawAptos"  --args "address:0x4247110ad8a97ee048756065975e592732ab746af2a757f285a9966da381d90b" "u64:10000000000"

##public entry fun bidAptosPad(account: &signer, amount: u64)
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::bidAptosPad"  --args "u64:1000000000"

##public entry fun addWhiteList(aptospadAdmin: &signer, account: address, cap: u64)
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::addWhiteList"  --args "address:<addr>" "u64:10000000"

##public entry fun withdrawAptos(admin: &signer, debit: address, amount: u64){
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::withdrawAptos"  --args "address:<addr>" "u64:10000000"

##public entry fun withdrawAptosPad(admin: &signer, debit: address, amount: u64)
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::withdrawAptosPad"  --args "address:<addr>" "u64:10000000"

#curl "https://fullnode.testnet.aptoslabs.com/v1/accounts/$RESOURCE_ADDR/resource/$APTOSPAD_ADDR::aptospad_swap::LaunchPadRegistry"
#curl "https://fullnode.testnet.aptoslabs.com/v1/accounts/$RESOURCE_ADDR/resource/$APTOSPAD_ADDR::config::ApttSwapConfig"
#
#curl "https://fullnode.testnet.aptoslabs.com/v1/accounts/0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7/resource/0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::aptospad_swap::LaunchPadRegistry"
#curl "https://fullnode.testnet.aptoslabs.com/v1/accounts/0x1c07732f8f9bed7ee795519629ce8c334d08348fccadbb473d859464042a3ba7/resource/0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::config::ApttSwapConfig"

#curl "https://fullnode.testnet.aptoslabs.com/v1/accounts/$RESOURCE_ADDR/events/$APTOSPAD_ADDR::aptospad_swap::LaunchPadRegistry/whitelist_events"
#curl "https://fullnode.testnet.aptoslabs.com/v1/accounts/$RESOURCE_ADDR/events/0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::aptospad_swap::LaunchPadRegistry/bidaptospad_events"

#curl "https://fullnode.testnet.aptoslabs.com/v1/accounts/$RESOURCE_ADDR/events/$APTOSPAD_ADDR::aptospad_swap::LaunchPadRegistry/whitelist_events"
#curl "https://fullnode.testnet.aptoslabs.com/v1/accounts/$RESOURCE_ADDR/events/$APTOSPAD_ADDR::aptospad_swap::LaunchPadRegistry/bidaptospad_events"

#curl "https://fullnode.testnet.aptoslabs.com/v1/accounts/$RESOURCE_ADDR/events/0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>/withdraw_events"

#curl "https://fullnode.testnet.aptoslabs.com/v1/accounts/$RESOURCE_ADDR/resource/$APTOSPAD_ADDR::aptospad_swap::TokenDistribute"

#https://fullnode.testnet.aptoslabs.com/v1/accounts/0x773f7d59a90fc577d2ee5cf707fc7f3e58986228ac64fa96219cf3bd2a2af9f0/resource/0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::aptospad_swap::TokenDistribute"

#https://fullnode.testnet.aptoslabs.com/v1/accounts/0x28322647046186078e5395c4a5cbf70e712ad5b87eae4b489f96ae383d69de4e/resource/0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::aptospad_swap::TokenDistribute"
#https://fullnode.testnet.aptoslabs.com/v1/accounts/0xbbe3fc146b0432f6ed707a1176f099fe9886d1efa0da8233504e82c2f4967c31/resource/0xe33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea::aptospad_swap::TokenDistribute"