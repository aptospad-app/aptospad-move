module aptospad::config {
    use std::signer;
    use aptos_framework::account::{Self, SignerCapability};
    use aptos_framework::coin;
    use aptospad_coin::aptospad_coin::AptosPadCoin;
    use std::string;
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::coin::{destroy_mint_cap, destroy_freeze_cap, destroy_burn_cap, MintCapability, BurnCapability, FreezeCapability};

    const ERR_INVALID_CAP: u64 = 414;
    const ERR_INVALID_RATE: u64 = 413;
    const ERR_INITIALIZED: u64 = 412;
    const ERR_INVALID_SUPPLY: u64 = 411;
    const ERR_HARDCAP_REACHED: u64 = 410;
    const ERR_SEASON_STATE: u64 = 409;
    const ERR_SEASON_ACTIVE: u64 = 408;
    const ERR_SEASON_NOT_RESET: u64 = 407;
    const ERR_SEASON_ENDED: u64 = 406;
    const ERR_EMERGENCY: u64 = 405;

    const ERR_PERMISSIONS: u64 = 403;

    const STATE_INIT: u8 = 1;
    const STATE_WL: u8 = 2;
    const STATE_BUY: u8 = 3;
    const STATE_RELEASE: u8 = 4;
    const STATE_ENDED: u8 = 5;

    const CAP_10K: u64 = 100000000*10000;
    const CAP_20K: u64 = 100000000*20000;
    const CAP_40K: u64 = 100000000*40000;
    const CAP_50K: u64 = 100000000*50000;
    const CAP_80K: u64 = 100000000*80000;
    const CAP_100K: u64 = 100000000*100000;
    const CAP_200K: u64 = 100000000*200000;
    const CAP_190K: u64 = 100000000*190000;
    const CAP_300K: u64 = 100000000*300000;
    const CAP_400K: u64 = 100000000*400000;
    const CAP_500K: u64 = 100000000*500000;

    /// Store perm
    struct CapsStore has key {
        signer_cap: SignerCapability,
        mint_cap: MintCapability<AptosPadCoin>,
        burn_cap: BurnCapability<AptosPadCoin>,
        freeze_cap: FreezeCapability<AptosPadCoin>
    }

    /// Store swap config
    struct ApttSwapConfig has key {
        emgergency: bool,
        softCap: u64,
        hardCap: u64,
        refund: bool,
        aptToApttRate: u64,
        state: u8,
        bypassWhiteList: bool
    }

    /// Initialize config:
    /// - verify admin account
    /// - initialize APTT coin under resournce
    /// - initialize aptt swap config
    public fun initializeAptosPad(aptospadAdmin: &signer, padAptosFund: u64) {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        let resourceSignerCap = aptospad::aptospad_coin_boot::retrieveResourceSignerCap(aptospadAdmin);
        let resourceSigner = &account::create_signer_with_capability(&resourceSignerCap);

        assert!(!exists<ApttSwapConfig>(signer::address_of(resourceSigner)), ERR_INITIALIZED);

        let (burn_cap, freeze_cap, mint_cap) = coin::initialize<AptosPadCoin>(
            resourceSigner,
            string::utf8(b"AptosPad Coin"),
            string::utf8(b"ATPP"),
            8,
            true,
        );

        coin::register<AptosCoin>(resourceSigner);
        coin::register<AptosPadCoin>(resourceSigner);

        coin::transfer<AptosCoin>(aptospadAdmin, signer::address_of(resourceSigner), padAptosFund);

        move_to(aptospadAdmin, CapsStore {
            signer_cap: resourceSignerCap,
            mint_cap,
            burn_cap,
            freeze_cap
        });

        let config = ApttSwapConfig {
            emgergency: false,
            softCap: CAP_10K,
            hardCap: CAP_50K,
            refund: false,
            aptToApttRate: 1000,
            state: STATE_INIT,
            bypassWhiteList: false
        };

        move_to(resourceSigner, config);

        destroy_mint_cap(mint_cap);
        destroy_freeze_cap(freeze_cap);
        destroy_burn_cap(burn_cap);
    }

    public fun getResourceAddr(): address acquires CapsStore {
        signer::address_of(&getResourceSigner())
    }

    public fun setEmergency(aptospadAdmin: &signer, emergency: bool)  acquires CapsStore, ApttSwapConfig {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        let signerCap = &borrow_global<CapsStore>(@aptospad_admin).signer_cap;
        let config = borrow_global_mut<ApttSwapConfig>(account::get_signer_capability_address(signerCap));
        config.emgergency = emergency;
    }

    public fun setBypassWhitelist(aptospadAdmin: &signer, bypass: bool)  acquires CapsStore, ApttSwapConfig {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        let signerCap = &borrow_global<CapsStore>(@aptospad_admin).signer_cap;
        let config = borrow_global_mut<ApttSwapConfig>(account::get_signer_capability_address(signerCap));
        config.bypassWhiteList = bypass;
    }

    public fun setApttSwapConfig(aptospadAdmin: &signer,  softCap: u64, hardCap: u64, refund: bool, aptToApttRate: u64, bypassWhitelist: bool) acquires CapsStore, ApttSwapConfig {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        assert!(getSwapState() == STATE_INIT, ERR_SEASON_STATE);
        assert!((softCap > 0) && (hardCap > 0) && (hardCap > softCap), ERR_INVALID_CAP);
        assert!((aptToApttRate > 0), ERR_INVALID_RATE);

        let signerCap = &borrow_global<CapsStore>(@aptospad_admin).signer_cap;
        let config = borrow_global_mut<ApttSwapConfig>(account::get_signer_capability_address(signerCap));
        config.softCap = softCap;
        config.hardCap = hardCap;
        config.refund = refund;
        config.aptToApttRate = aptToApttRate;
        config.bypassWhiteList = bypassWhitelist;
    }

    public fun isEmergency(): bool acquires CapsStore, ApttSwapConfig {
        let signerCap = &borrow_global<CapsStore>(@aptospad_admin).signer_cap;
        let config = borrow_global<ApttSwapConfig>(account::get_signer_capability_address(signerCap));
        config.emgergency
    }

    public fun getSwapConfig(): (u64, u64, bool, u64) acquires CapsStore, ApttSwapConfig {
        let signerCap = &borrow_global<CapsStore>(@aptospad_admin).signer_cap;
        let config = borrow_global<ApttSwapConfig>(account::get_signer_capability_address(signerCap));
        (config.hardCap, config.softCap, config.refund, config.aptToApttRate)
    }

    public fun getSwapConfigHardCap(): u64 acquires CapsStore, ApttSwapConfig {
        let (hardcap, _, _, _) = getSwapConfig();
        hardcap
    }

    public fun getSwapConfigSoftCap(): u64 acquires CapsStore, ApttSwapConfig {
        let (_, softcap, _, _) = getSwapConfig();
        softcap
    }

    public fun getSwapConfigAptToApttRate(): u64 acquires CapsStore, ApttSwapConfig {
        let ( _, _, _, rate) = getSwapConfig();
        rate
    }

    public fun getSwapConfigEnableRefund(): bool acquires CapsStore, ApttSwapConfig {
        let (_, _, enableRefund, _) = getSwapConfig();
        enableRefund
    }

    public fun isBypassWhiteList(): bool acquires CapsStore, ApttSwapConfig {
        let signerCap = &borrow_global<CapsStore>(@aptospad_admin)
                         .signer_cap;
        borrow_global<ApttSwapConfig>(account::get_signer_capability_address(signerCap))
                     .bypassWhiteList
    }


    public fun getSwapState(): u8 acquires CapsStore, ApttSwapConfig {
        let signerCap = &borrow_global<CapsStore>(@aptospad_admin).signer_cap;
        let config = borrow_global<ApttSwapConfig>(account::get_signer_capability_address(signerCap));
        config.state
    }

    public fun setSwapState(state: u8) acquires CapsStore, ApttSwapConfig {
        let signerCap = &borrow_global<CapsStore>(@aptospad_admin).signer_cap;
        let config = borrow_global_mut<ApttSwapConfig>(account::get_signer_capability_address(signerCap));
        config.state = state;
    }

    public fun getResourceAddress(): address acquires CapsStore {
        let signerCap = &borrow_global<CapsStore>(@aptospad_admin).signer_cap;
        account::get_signer_capability_address(signerCap)
    }

    public fun getResourceSigner(): signer acquires CapsStore {
        let signerCap = &borrow_global<CapsStore>(@aptospad_admin).signer_cap;
        account::create_signer_with_capability(signerCap)
    }

    public fun mintAtppTo(investor: address, amount: u64) acquires CapsStore {
        let mintCap = &borrow_global<CapsStore>(@aptospad_admin).mint_cap;
        coin::deposit(investor, coin::mint(amount, mintCap));
    }
}
