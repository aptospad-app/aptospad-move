module aptospad::swap {
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::{AptosCoin};
    use aptospad::aptospad_coin::AptosPadCoin;
    use aptospad::config;
    use aptospad::config::CapsStore;
    use aptos_std::table;
    use aptos_std::table::Table;

    const ERR_EMERGENCY: u64 = 405;
    const ERR_PERMISSIONS: u64 = 403;

    struct WhiteList has store {
        cap: u64,
        claimed: u64,
        demand: u64
    }

    struct CoinDistribution has key {
        state: Table<address, WhiteList>,
    }


    public fun initialize(account: &signer){
        assert!(signer::address_of(account) == @aptospad_admin, ERR_PERMISSIONS);
        move_to(&config::getResourceSigner(), CoinDistribution {
            state: table::new<address, WhiteList>()
        })

    }
    /// @todo later: swap APT to APTT
    public fun swap(account: &signer, aptosAmount: u64)  {
        assert!(!config::isEmergency(), ERR_EMERGENCY);
        let (_hardCap, _softCap, _refund, aptToApttRate) = config::getSwapConfig();
        let apttAmount = aptosAmount * aptToApttRate;

        coin::transfer<AptosCoin>(account, config::getResourceAddress(), aptosAmount);
        config::mintAtppTo(account, apttAmount);
    }

    ///@todo later
    public fun addWhiteList(aptospadAdmin: &signer, account: address, cap: u64)acquires CoinDistribution {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        let wls = borrow_global_mut<CoinDistribution>(signer::address_of(aptospadAdmin));
        table::add(&mut wls.state, account, WhiteList{
            cap,
            claimed: 0u64,
            demand: 0u64
        });
    }

    ///@todo later
    public fun distributeAtpp(aptospadAdmin: &signer){

    }
}
