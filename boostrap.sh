#!/bin/bash
##make sure admin & profile address match
##make sure aptos profile in current path
APTOSPAD_ADMIN='e33a81af433f27d9a6afa7b2036dd1550dd9b86d67b37d2580bfbb084c5ae9ea'
PROFILE="testnet6"

PAD_PATH=`pwd`
COIN_PATH="$PAD_PATH/aptospadcoin"
BOOT_PATH="$PAD_PATH/aptospadcoinboot"

##compile & publish boot module
cd "$BOOT_PATH"
aptos move compile --save-metadata
cd "$PAD_PATH"
aptos move publish --profile "$PROFILE" --package-dir "$BOOT_PATH"

##compile coin code & publish coin code as resource
cd "$COIN_PATH"
aptos move compile --save-metadata
hexdump -ve '1/1 "%.2x"' build/AptosPadCoin/package-metadata.bcs > meta.hex
hexdump -ve '1/1 "%.2x"' build/AptosPadCoin/bytecode_modules/aptospad_coin.mv > coin.hex
CODE=`cat coin.hex`
META=`cat meta.hex`
cd "$PAD_PATH"
aptos move run --profile "$PROFILE" --function-id "$APTOSPAD_ADMIN::aptospad_coin_boot::initializeWithResourceAccount" --args "hex:$META" "hex:$CODE"