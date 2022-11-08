module aptospad::swap {
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::{AptosCoin};
    use aptospad::config;
    use aptos_framework::timestamp;
    use aptospad::iterable_table::IterableTable;
    use aptospad::iterable_table;

    const ERR_SEASON_ACTIVE: u64 = 408;
    const ERR_SEASON_NOT_RESET: u64 = 407;
    const ERR_SEASON_ENDED: u64 = 406;
    const ERR_EMERGENCY: u64 = 405;
    const ERR_PERMISSIONS: u64 = 403;
    const ERR_NOT_RUNNING: u64 = 404;

    const DEFAULT_CAP: u64 = 1000;

    const STATE_INIT: u8 = 1;
    const STATE_WL: u8 = 2;
    const STATE_BUY: u8 = 3;
    const STATE_RELEASE: u8 = 4;
    const STATE_ENDED: u8 = 5;

    struct DistributeState has drop, store, copy {
        cap: u64, /// in token
        wanna: u64, /// in APT
        distributed: u64, /// in token
    }

    struct CoinDistribution has key {
        details: IterableTable<address, DistributeState>,
        totalBuy: u64
    }

    public fun initialize(account: &signer){
        assert!(signer::address_of(account) == @aptospad_admin, ERR_PERMISSIONS);
        move_to(&config::getResourceSigner(), CoinDistribution {
            details: iterable_table::new<address, DistributeState>(),
            totalBuy: 0u64
        });

        config::setSwapState(STATE_INIT);
    }

    /// start buy season
    public fun startSeason(account: &signer){
        assert!(signer::address_of(account) == @aptospad_admin, ERR_PERMISSIONS);
        assert!(config::getSwapState() == STATE_INIT, ERR_SEASON_NOT_RESET);
        config::setSwapState(STATE_WL);
    }

    /// start season: make sure prev season if any, already released!
    public fun resetSeason(account: &signer){
        assert!(signer::address_of(account) == @aptospad_admin, ERR_PERMISSIONS);
        assert!(config::getSwapState() == STATE_ENDED, ERR_SEASON_ENDED);
        config::setSwapState(STATE_INIT);
    }

    public fun buyAptt(user: &signer, aptosAmount: u64)  acquires CoinDistribution {
        assert!(!config::isEmergency(), ERR_EMERGENCY);
        assert!(config::getSwapState() == STATE_BUY, ERR_NOT_RUNNING);

        let (hardCap, _softCap, _refund, _aptToApttRate, _end) = config::getSwapConfig();

        let distribute = borrow_global_mut<CoinDistribution>(config::getResourceAddress());
        assert!(distribute.totalBuy <= hardCap, 406);

        coin::transfer<AptosCoin>(user, config::getResourceAddress(), aptosAmount);

        let wl = iterable_table::borrow_mut_with_default( &mut distribute.details, signer::address_of(user), DistributeState {
            cap: DEFAULT_CAP,
            distributed: 0u64,
            wanna: 0u64
        });
        wl.wanna = aptosAmount;
        distribute.totalBuy = distribute.totalBuy + aptosAmount;
    }

    public fun addWhiteList(aptospadAdmin: &signer, account: address, cap: u64) acquires CoinDistribution {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        let (_hardCap, _softCap, _refund, _aptToApttRate, end) = config::getSwapConfig();
        assert!(end >= timestamp::now_microseconds(), 405);

        let details = &mut borrow_global_mut<CoinDistribution>(config::getResourceAddress()).details;
        let wl = iterable_table::borrow_mut_with_default(details, account, DistributeState {
            cap: 0u64,
            distributed: 0u64,
            wanna: 0u64
        });
        wl.cap = cap;
    }

    public fun releaseAtpp(aptospadAdmin: &signer) acquires CoinDistribution {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        assert!(!config::isEmergency(), ERR_EMERGENCY);

        let (_hardCap, softCap, refund, _aptToApttRate, _end) = config::getSwapConfig();
        let distribute = borrow_global_mut<CoinDistribution>(config::getResourceAddress());
        let totalBuy = distribute.totalBuy;

        /// compare total vs soft/hard cap!!!
        if(refund && (totalBuy < softCap))
            refund()
        else
            distributeAtppInt()
    }

    /// Distribute token to
    fun distributeAtppInt(){

    }

    /// Refund settlled asset
    /// be carefull of fee
    fun refund(){

    }
}
