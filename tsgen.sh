#!/bin/bash
echo "Compiling MOVE contracts ..."
aptos move compile

echo "Generating typesript stuff..."
move-to-ts -c -n aptospad -o typescript

echo "Building SDK..."

cd typescript
yarn install
yarn build
