module aptospad::aptospad_swap {
    use std::signer;
    use aptos_framework::account::{Self, SignerCapability};
    use aptos_framework::coin::{Self, MintCapability, BurnCapability, FreezeCapability};
    use aptos_framework::aptos_coin::{AptosCoin};
    use aptospad::aptospad_coin::AptosPadCoin;
    use std::string;

    const ERR_NOT_ENOUGH_PERMISSIONS: u64 = 403;

    struct AptosPadCapsStore has key {
        signer_cap: SignerCapability,
        burn_cap: BurnCapability<AptosPadCoin>,
        mint_cap: MintCapability<AptosPadCoin>,
        freeze_cap: FreezeCapability<AptosPadCoin>
    }

    /// @todo
    /// - create resource account, rotate permission to admin account
    /// - initialize AptosPad coin
    /// - register this resource account with AptosCoin
    public entry fun initialize_aptospad_swap(aptospadAdmin: &signer) {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_NOT_ENOUGH_PERMISSIONS);

        let (resourceSigner, resourceSignerCap) = account::create_resource_account(aptospadAdmin, b"aptospad_account_seed");

        let (burn_cap, freeze_cap, mint_cap) = coin::initialize<AptosPadCoin>(
            &resourceSigner,
            string::utf8(b"AptosPad Coin"),
            string::utf8(b"ATPP"),
            8,
            true,
        );

        coin::register<AptosCoin>(&resourceSigner);
        coin::register<AptosPadCoin>(&resourceSigner);

        move_to(aptospadAdmin, AptosPadCapsStore {
            signer_cap: resourceSignerCap,
            burn_cap,
            mint_cap,
            freeze_cap
        });
    }
}
