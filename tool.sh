#!/bin/bash
cd aptospadcoin
aptos move compile --save-metadata
hexdump -ve '1/1 "%.2x"' build/AptosPadCoin/package-metadata.bcs > meta.hex
hexdump -ve '1/1 "%.2x"' build/AptosPadCoin/bytecode_modules/aptospad_coin.mv > coin.hex
