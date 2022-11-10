#[test_only]
module aptospad::account_helpers {
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::coin;
    use std::string;
    use std::signer;
    use aptos_framework::account;
    use aptos_framework::coin::{MintCapability, BurnCapability, FreezeCapability};
    use aptospad::aptospad_coin::AptosPadCoin;

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

    public fun balanceAptos(account: address):u64 {
        coin::balance<AptosCoin>(account)
    }

    public fun balanceAptosPad(account: address):u64 {
        coin::balance<AptosPadCoin>(account)
    }
}
