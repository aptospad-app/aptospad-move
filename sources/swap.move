module aptospad::swap {
    use std::signer;
    use aptos_framework::account::{Self, SignerCapability};
    use aptos_framework::coin::{Self, MintCapability, BurnCapability, FreezeCapability};
    use aptos_framework::aptos_coin::{AptosCoin};
    use aptospad::aptospad_coin::AptosPadCoin;
    use std::string;

    const ERR_NOT_ENOUGH_PERMISSIONS: u64 = 403;
    const ERR_NOT_ENABLED: u64 = 404;

    /// store perm
    struct AptosPadCapsStore has key {
        signer_cap: SignerCapability,
        burn_cap: BurnCapability<AptosPadCoin>,
        mint_cap: MintCapability<AptosPadCoin>,
        freeze_cap: FreezeCapability<AptosPadCoin>
    }

    ///Swap config
    struct AptosPadSwapConfig has key {
        enabled: bool,
        rate_round1: u64,
        rate_round2: u64,
        rate_round3: u64,
        rate_round4: u64,
        rate_round5: u64
    }

    /// - create resource account, rotate permission to admin account
    /// - initialize AptosPad coin
    /// - register this resource account with AptosCoin
    public entry fun initializeAptospadSwap(aptospadAdmin: &signer) {
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

        initializeConfig(&resourceSigner);
    }

    /// swap AptosCoin to AptosPad
    /// expect min amount account!
    public entry fun swap(account: &signer, aptosAmount: u64, aptosPadMinExpect: u64,
    ) acquires AptosPadSwapConfig, AptosPadCapsStore {
        let (isEnabled, r1, _, _, _, _) = getConfig();
        assert!(isEnabled, ERR_NOT_ENABLED);
        let aptosPadAmt = r1* aptosAmount;
        assert!(aptosAmount >= aptosPadMinExpect, ERR_NOT_ENABLED);

        let aptosCoin = coin::withdraw<AptosCoin>(account, aptosAmount);
        coin::deposit(getResourceAddress(), aptosCoin);

        let resourceSigner = &borrow_global<AptosPadCapsStore>(@aptospad_admin).signer_cap;
        let aptosPadCoin = coin::withdraw<AptosPadCoin>(&account::create_signer_with_capability(resourceSigner), aptosPadAmt);
        coin::deposit(signer::address_of(account), aptosPadCoin);
    }


    /// initialize swap config
    fun initializeConfig(resourceSigner: &signer){
        let config = AptosPadSwapConfig {
            enabled: false,
            rate_round1: 1000000,
            rate_round2: 800000,
            rate_round3: 600000,
            rate_round4: 400000,
            rate_round5: 100000
        };

        move_to(resourceSigner, config);
    }

    ///get config
    public fun getConfig(): (bool, u64, u64, u64, u64, u64) acquires AptosPadSwapConfig, AptosPadCapsStore {
        let resourceAddr = account::get_signer_capability_address(&borrow_global<AptosPadCapsStore>(@aptospad_admin).signer_cap);
        let config = borrow_global<AptosPadSwapConfig>(resourceAddr);
        let enabled = config.enabled;
        let rate_round1 = config.rate_round1;
        let rate_round2 = config.rate_round2;
        let rate_round3 = config.rate_round3;
        let rate_round4 = config.rate_round4;
        let rate_round5 = config.rate_round5;
        (enabled, rate_round1, rate_round2, rate_round3, rate_round4, rate_round5)
    }

    ///update config
    public entry fun setConfig(account: &signer, enabled: bool, r1: u64, r2: u64, r3: u64, r4: u64, r5: u64)  acquires AptosPadSwapConfig, AptosPadCapsStore {
        assert!(signer::address_of(account) == @aptospad_admin, ERR_NOT_ENOUGH_PERMISSIONS);

        let resourceAddr = getResourceAddress();
        let config = borrow_global_mut<AptosPadSwapConfig>(resourceAddr);
        config.enabled = enabled;
        config.rate_round5 = r5;
        config.rate_round4 = r4;
        config.rate_round3 = r3;
        config.rate_round2 = r2;
        config.rate_round1 = r1;
    }

    fun getResourceAddress(): address acquires AptosPadCapsStore {
        account::get_signer_capability_address(&borrow_global<AptosPadCapsStore>(@aptospad_admin).signer_cap)
    }
}
