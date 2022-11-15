#[test_only]
module aptospad::account_helpers {
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::coin;
    use std::string;
    use std::signer;
    use aptos_framework::account;
    use aptos_framework::coin::{MintCapability, BurnCapability, FreezeCapability};
    use aptospad_coin::aptospad_coin::AptosPadCoin;
    use aptospad::config;

    struct  AptCapsStore<phantom CoinType> has key {
        mint_cap: MintCapability<CoinType>,
        burn_cap: BurnCapability<CoinType>,
        freeze_cap: FreezeCapability<CoinType>
    }

    public fun initializeEnv(aptosGenesisAccount: &signer){
        account::create_account_for_test(signer::address_of(aptosGenesisAccount));

        let (burnCap, freezeCap, mintCap) = coin::initialize<AptosCoin>(
            aptosGenesisAccount,
            string::utf8(b"Aptos Coin"),
            string::utf8(b"APT"),
            6,
            true,
        );

        move_to(aptosGenesisAccount, AptCapsStore<AptosCoin>{
            mint_cap: mintCap,
            burn_cap: burnCap,
            freeze_cap: freezeCap
        });
    }

    public fun initializeAccount(aptosAcc: &signer, account: &signer, aptfund: u64) acquires AptCapsStore {
        account::create_account_for_test(signer::address_of(account));
        coin::register<AptosCoin>(account);
        let mintCap = &borrow_global<AptCapsStore<AptosCoin>>(signer::address_of(aptosAcc)).mint_cap;
        coin::deposit(signer::address_of(account), coin::mint(aptfund, mintCap));
    }

    public fun initializeAptosPadCoin(padAdmin: &signer, padSupply: u64, resourcefunding: u64) {
        let pad_metadata = x"0c4170746f73506164436f696e010000000000000000404235434137373241453935413846443730343935433539373231464436354346453537433442413634343533463131434439363130323537423942344142443596021f8b08000000000002ff2d50bd6ac33010def514c14ba6d896645b4ea143e95c28740c219c74a744c4b184e4b8f4ed2b996c77f7fd72a700e60e573ab3191eb47bdfed3fc2e2d337e0a777f39ead1493f3730178ddd6ed9e3dc33502d225f8c999bf0c54c63f022c4e4f54317602c44829513a33285601f062b257610ebd92835602b8100afa4e19253b40a9458fb6a3be3d7290c68e60790b520d64bb16db416a3bea9e7355fc91d60352a01969368e52fde557fa597072faccae6e2939b76509e9ad69f27a7bea3a176cb62e8709747a8dc647aa33a16291d622020139481df5308e428a51d9e32034120ad016c89a7c27c54dc5d253a38b9b66b37ae4068d8df981bf3ede9bb21ed2d6a8fa07979e2e9f60010000010d6170746f737061645f636f696e691f8b08000000000002ff55ca310e80201044d19e53cc0de8e98817a0a03704d648a24060a90c77578c8dd34dde975282f7d870e6d00f42a02d268236d6c2e79850a9e55e3d892f7085732b2eac5395fa5d5c02cf1ad7ee197a927161796588216ea15171bb6d00000000000000";
        let pad_coin_code = x"a11ceb0b0500000005010002020204070627082d200a4d050000000100000d6170746f737061645f636f696e0c4170746f73506164436f696e0b64756d6d795f6669656c6465736b72a1227a547c734ad3b25df4e5091a3cf8af10a376ef40d063bf8b5117000201020100";
        config::initializeWithResourceAccount2(padAdmin, padSupply, resourcefunding, pad_metadata, pad_coin_code);
    }

    public fun balanceAptos(account: address):u64 {
        coin::balance<AptosCoin>(account)
    }

    public fun balanceAptosPad(account: address):u64 {
        coin::balance<AptosPadCoin>(account)
    }
}
