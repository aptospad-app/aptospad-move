#!/bin/bash
APTOSPAD_ADMIN='e3cd31797b9b36ce3cb9617871fb0fa1187d1381aff01b49d72c87f56e27238e'
PROFILE="testnet4"

PAD_PATH=`pwd`
COIN_PATH="$PAD_PATH/aptospadcoin"
BOOT_PATH="$PAD_PATH/aptospadcoinboot"

##publish aptos pad
aptos move publish --profile "$PROFILE" --package-dir "$PAD_PATH"