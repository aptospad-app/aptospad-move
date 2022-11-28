#!/bin/bash
APTOSPAD_ADMIN='e33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea'
PROFILE="testnet6"

PAD_PATH=`pwd`
COIN_PATH="$PAD_PATH/aptospadcoin"
BOOT_PATH="$PAD_PATH/aptospadcoinboot"

##publish aptos pad
aptos move publish --profile "$PROFILE" --package-dir "$PAD_PATH"