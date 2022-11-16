#!/bin/bash
APTOSPAD_ADMIN='0x65736b72a1227a547c734ad3b25df4e5091a3cf8af10a376ef40d063bf8b5117'
PROFILE="testnet5"

PAD_PATH=`pwd`
COIN_PATH="$PAD_PATH/aptospadcoin"
BOOT_PATH="$PAD_PATH/aptospadcoinboot"

##publish aptos pad
aptos move publish --profile "$PROFILE" --package-dir "$PAD_PATH"