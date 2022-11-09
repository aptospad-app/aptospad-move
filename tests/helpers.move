#[test_only]
module aptospad::helpers {
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::coin;
    use std::string;
    use std::signer;
    use aptos_framework::account;

    public fun initializeAptos(aptosAcc: &signer, acc1: &signer, amt1: u64, acc2: &signer, amt2: u64, acc3: &signer, amt3: u64){
        account::create_account_for_test(signer::address_of(aptosAcc));
        account::create_account_for_test(signer::address_of(acc1));
        account::create_account_for_test(signer::address_of(acc2));
        account::create_account_for_test(signer::address_of(acc3));

        let (_burnCap, _freezeCap, mintCap) = coin::initialize<AptosCoin>(
             aptosAcc,
            string::utf8(b"Aptos Coin"),
            string::utf8(b"APT"),
            6,
            true,
        );
        coin::register<AptosCoin>(acc1);
        coin::deposit(signer::address_of(acc1), coin::mint(amt1, &mintCap));

        coin::register<AptosCoin>(acc2);
        coin::deposit(signer::address_of(acc2), coin::mint(amt2, &mintCap));

        coin::register<AptosCoin>(acc3);
        coin::deposit(signer::address_of(acc3), coin::mint(amt3, &mintCap));

        coin::destroy_burn_cap(_burnCap);
        coin::destroy_mint_cap(mintCap);
        coin::destroy_freeze_cap(_freezeCap);
    }
}
