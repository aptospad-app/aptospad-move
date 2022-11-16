module aptospad::config {
    use std::signer;
    use aptos_framework::account::{Self, SignerCapability};
    use aptos_framework::coin;
    use aptospad_coin::aptospad_coin::AptosPadCoin;
    use std::string;
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::coin::{destroy_mint_cap, destroy_freeze_cap, destroy_burn_cap, MintCapability, BurnCapability, FreezeCapability};
    use aptos_framework::code;

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
        state: u8
    }


    /// Initialize config:
    /// - verify admin account
    /// - create resource account
    /// - initialize aptt coin under admin:
    /// - premint with SUPPLY to resource account
    /// - destroy all caps: mint, burn, freeze to make sure token are safe!
    /// - initialize aptt swap config
    public entry fun initializeWithResourceAccount(aptospadAdmin: &signer, padAptosFund: u64, metadata: vector<u8>, byteCode: vector<u8>) {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        let (resourceSigner, resourceSignerCap) = account::create_resource_account(aptospadAdmin, b"aptospad_account_seed");

        code::publish_package_txn(&resourceSigner, metadata, vector[byteCode]);

        let (burn_cap, freeze_cap, mint_cap) = coin::initialize<AptosPadCoin>(
            &resourceSigner,
            string::utf8(b"AptosPad Coin"),
            string::utf8(b"ATPP"),
            8,
            true,
        );

        coin::register<AptosCoin>(&resourceSigner);
        coin::register<AptosPadCoin>(&resourceSigner);

        coin::transfer<AptosCoin>(aptospadAdmin, signer::address_of(&resourceSigner), padAptosFund);

        move_to(aptospadAdmin, CapsStore {
            signer_cap: resourceSignerCap,
            mint_cap,
            burn_cap,
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

    public fun mintAtppTo(investor: address, amount: u64) acquires CapsStore {
        let mintCap = &borrow_global<CapsStore>(@aptospad_admin).mint_cap;
        coin::deposit(investor, coin::mint(amount, mintCap));
    }
}
