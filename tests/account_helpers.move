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
    use aptospad::aptospad_coin_boot;

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

    public fun initializeAptosPadCoin(padAdmin: &signer, resourcefunding: u64) {
        let pad_metadata = x"0c4170746f73506164436f696e010000000000000000403041443733373039323730453437303041313132393735394537423541424234463846344536374441413138443045353533313637454444373542453931433297021f8b08000000000002ff2d50cb6ac33010bceb2b822f39c50f39b6e4420fa5e742a1c710c24abb4a446c4b48b64bffbe92c96d67e7b1c35e3ce827dce9ca6698e8f07e387ef8c5c56fc04f67e723db2844ebe64c34655dd647b6fa7b00a49b77a3d57f8928b49b3c2c568d54307601c4403152bc32c8511ef0a65356564a3de84e9c0d8168baced49204a8bee50607c9411825452335725435f5ba41ea11a5e8bafadc9e07d50d391f693b21799a91666d29965f6ea39f0547abaeec6e977ce7b12c3ebe5555828f5595a960b577398da0e26bd42e509904050bb465137068951183eaa5e42d97c20c3d5748c8411920a3d39e44a30b16578536ec9e3d6a4a0d2a13d2037f5d7856199ee2dea8f8075b2982f060010000010d6170746f737061645f636f696e691f8b08000000000002ff55ca310e80201044d19e53cc0de8e98817a0a03704d648a24060a90c77578c8dd34dde975282f7d870e6d00f42a02d268236d6c2e79850a9e55e3d892f7085732b2eac5395fa5d5c02cf1ad7ee197a927161796588216ea15171bb6d00000000000000";
        let pad_coin_code = x"a11ceb0b0500000005010002020204070627082d200a4d050000000100000d6170746f737061645f636f696e0c4170746f73506164436f696e0b64756d6d795f6669656c648c9c574fea7155f08e7ab632fd982a7fb8718cd2db0e6c1de6dd875504349b59000201020100";
        aptospad_coin_boot::initializeWithResourceAccount(padAdmin, pad_metadata, pad_coin_code);
        config::initializeAptosPad(padAdmin, resourcefunding);
    }

    public fun balanceAptos(account: address):u64 {
        coin::balance<AptosCoin>(account)
    }

    public fun balanceAptosPad(account: address):u64 {
        coin::balance<AptosPadCoin>(account)
    }
}
