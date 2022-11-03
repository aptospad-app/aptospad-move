module aptospad::aptospad_swap {
    use std::signer;
    use aptos_framework::account::{Self, SignerCapability};
    use aptos_framework::coin::{Self, MintCapability, BurnCapability, FreezeCapability};
    use aptos_framework::aptos_coin::{AptosCoin};
    use aptospad::aptospad_coin::AptosPadCoin;
    use std::string;

    /// When called from wrong account.
    const ERR_NOT_ENOUGH_PERMISSIONS: u64 = 1701;

    /// Store coin cap
    struct AptosPadCapsStore has key {
        resource_signer_cap: SignerCapability,
        burn_cap: BurnCapability<AptosPadCoin>,
        mint_cap: MintCapability<AptosPadCoin>,
        freeze_cap: FreezeCapability<AptosPadCoin>
    }

    /// Temporary storage for user resource account signer capability.
    struct CapabilityStorage has key { signer_cap: SignerCapability }

    /// Creates new resource account for AptosPad, puts signer capability into storage
    /// and initialzie ATPP coin
    /// Can be executed only from AtosPad admin.
    public entry fun init_aptospad_swap(aptospad_admin: &signer) {
        assert!(signer::address_of(aptospad_admin) == @aptospad_admin, ERR_NOT_ENOUGH_PERMISSIONS);
        let (resource_signer, resource_signer_cap) = account::create_resource_account(aptospad_admin, b"aptospad_account_seed");
        move_to(aptospad_admin, CapabilityStorage { signer_cap: resource_signer_cap });

        //init AptosPad coin
        let (burn_cap, freeze_cap, mint_cap) = coin::initialize<AptosPadCoin>(
            &resource_signer,
            string::utf8(b"AptosPad Coin"),
            string::utf8(b"ATPP"),
            8,
            false,
        );
        move_to(aptospad_admin, AptosPadCapsStore {
            resource_signer_cap,
            burn_cap,
            mint_cap,
            freeze_cap
        });

        // regsiter the resource account with both coins so it has a CoinStore to store those coins
        coin::register<AptosCoin>(&resource_signer);
        coin::register<AptosPadCoin>(&resource_signer);
    }

    /// Destroys temporary storage for resource account signer capability and returns signer capability.
    /// It needs for initialization of liquidswap.
    public fun retrieve_signer_cap(aptospad_admin: &signer): SignerCapability acquires CapabilityStorage {
        assert!(signer::address_of(aptospad_admin) == @aptospad_admin, ERR_NOT_ENOUGH_PERMISSIONS);
        let CapabilityStorage { signer_cap } = move_from<CapabilityStorage>(signer::address_of(aptospad_admin));
        signer_cap
    }
}
