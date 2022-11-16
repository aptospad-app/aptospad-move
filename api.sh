#!/bin/bash
##serve calling contract api
APTOSPAD_ADDR='0x65736b72a1227a547c734ad3b25df4e5091a3cf8af10a376ef40d063bf8b5117'
RESOURCE_ADDR='0x8c9c574fea7155f08e7ab632fd982a7fb8718cd2db0e6c1de6dd875504349b59'
PROFILE="testnet5"
PAD_PATH=`pwd`

#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::initializeAptosPad" --args "u64:10000000"
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::setEmergency" --args "bool:false"
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::setEmergency" --args "bool:false"

##softCap: u64, hardCap: u64, enableRefund: bool, aptToApttRate: u64
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::setApttSwapConfig" --args "u64:false" "u64:false" "bool:false" "u64:false"

##public entry fun resetSeason(account: &signer){
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::resetSeason"

##public entry fun whiteListSeason(account: &signer){
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::whiteListSeason"

##public entry fun launchPadSeason(account: &signer){
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::launchPadSeason"

##public entry fun distributeSeason(account: &signer){
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::launchPadSeason"

##public entry fun bidAptosPad(account: &signer, amount: u64)
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::bidAptosPad"  --args "u64:10000000"

##public entry fun addWhiteList(aptospadAdmin: &signer, account: address, cap: u64)
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::addWhiteList"  --args "address:<addr>" "u64:10000000"

##public entry fun withdrawAptos(admin: &signer, debit: address, amount: u64){
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::withdrawAptos"  --args "address:<addr>" "u64:10000000"

##public entry fun withdrawAptosPad(admin: &signer, debit: address, amount: u64)
#aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADDR::scripts::withdrawAptosPad"  --args "address:<addr>" "u64:10000000"

curl "https://fullnode.testnet.aptoslabs.com/v1/accounts/$RESOURCE_ADDR/resource/$APTOSPAD_ADDR::aptospad_swap::LaunchPadRegistry"
