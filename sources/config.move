module aptospad::config {
    use std::signer;
    use aptos_framework::account::{Self, SignerCapability};
    use aptos_framework::coin::{Self, MintCapability, BurnCapability, FreezeCapability};
    use aptos_framework::aptos_coin::{AptosCoin};
    use aptospad::aptospad_coin::AptosPadCoin;
    use std::string;

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

    /// store perm
    struct CapsStore has key {
        signer_cap: SignerCapability,
        burn_cap: BurnCapability<AptosPadCoin>,
        mint_cap: MintCapability<AptosPadCoin>,
        freeze_cap: FreezeCapability<AptosPadCoin>
    }

    /// store swap config
    struct ApttSwapConfig has key {
        emgergency: bool,
        softCap: u64,
        hardCap: u64,
        refund: bool,
        aptToApttRate: u64,
        state: u8
    }

    /// mission:
    /// - create resource account
    /// - initialize aptt coin: register coin, pre-mint, destroy mint cap
    /// - initialize aptt swap config
    public fun initialize(aptospadAdmin: &signer) {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);

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

        move_to(aptospadAdmin, CapsStore {
            signer_cap: resourceSignerCap,
            burn_cap,
            mint_cap,
            freeze_cap
        });

        let config = ApttSwapConfig {
            emgergency: false,
            softCap: 500000,
            hardCap: 1000000,
            refund: false,
            aptToApttRate: 1000,
            state: STATE_INIT
        };

        move_to(&resourceSigner, config);
    }

    public fun setEmergency(aptospadAdmin: &signer, emergency: bool)acquires CapsStore, ApttSwapConfig {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        let signerCap = &borrow_global<CapsStore>(@aptospad_admin).signer_cap;
        let config = borrow_global_mut<ApttSwapConfig>(account::get_signer_capability_address(signerCap));
        config.emgergency = emergency;
    }

    public fun setApttSwapConfig(aptospadAdmin: &signer,  softCap: u64, hardCap: u64, refund: bool, aptToApttRate: u64) acquires CapsStore, ApttSwapConfig {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        assert!(getSwapState() == STATE_INIT, ERR_SEASON_STATE);

        let signerCap = &borrow_global<CapsStore>(@aptospad_admin).signer_cap;
        let config = borrow_global_mut<ApttSwapConfig>(account::get_signer_capability_address(signerCap));
        config.softCap = softCap;
        config.hardCap = hardCap;
        config.refund = refund;
        config.aptToApttRate = aptToApttRate;
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

    public fun getAtppMintCap(): MintCapability<AptosPadCoin> acquires CapsStore {
       borrow_global<CapsStore>(@aptospad_admin).mint_cap
    }

    public fun mintAtppTo(investor: address, amount: u64) acquires CapsStore {
        let capsStore = borrow_global<CapsStore>(@aptospad_admin);
        let coin = coin::mint(amount, &capsStore.mint_cap);
        coin::deposit(investor, coin);
    }
}
