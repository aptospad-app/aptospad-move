#[test_only]
module aptospad::helpers {
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::coin;
    use std::string;
    use std::signer;
    use aptos_framework::account;

    public fun initializeAptos(aptosAcc: &signer, fundAccount: &signer, fundingAmount: u64){
        account::create_account_for_test(signer::address_of(aptosAcc));
        account::create_account_for_test(signer::address_of(fundAccount));

         let (_burnCap, _freezeCap, mintCap) = coin::initialize<AptosCoin>(
             aptosAcc,
            string::utf8(b"Aptos Coin"),
            string::utf8(b"APT"),
            6,
            true,
        );
        coin::register<AptosCoin>(fundAccount);
        coin::deposit(signer::address_of(fundAccount), coin::mint(fundingAmount, &mintCap));

        coin::destroy_burn_cap(_burnCap);
        coin::destroy_mint_cap(mintCap);
        coin::destroy_freeze_cap(_freezeCap);
    }

}
