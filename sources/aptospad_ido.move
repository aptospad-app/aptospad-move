module aptospad::aptospad_ido {
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::{AptosCoin};
    use aptospad::config;
    use aptospad::iterable_table::IterableTable;
    use aptospad::iterable_table;
    use std::option;
    use aptospad::aptospad_coin::AptosPadCoin;
    use aptos_std::math64;

    /// error codes
    const ERR_HARDCAP_REACHED: u64 = 410;
    const ERR_SEASON_STATE: u64 = 409;
    const ERR_SEASON_ACTIVE: u64 = 408;
    const ERR_SEASON_NOT_RESET: u64 = 407;
    const ERR_SEASON_ENDED: u64 = 406;
    const ERR_EMERGENCY: u64 = 405;
    const ERR_PERMISSIONS: u64 = 403;

    const DEFAULT_CAP: u64 = 1000;

    const STATE_INIT: u8 = 1;
    const STATE_WL: u8 = 2;
    const STATE_LAUNCHPAD: u8 = 3;
    const STATE_DISTRIBUTE: u8 = 4;
    const STATE_ENDED: u8 = 5;

    ///cap: in token
    ///wanna: in APT
    ///distributed: in token
    struct TokenDistribute has drop, store, copy {
        cap: u64,
        bid: u64,
        distributed: u64,
        investor: address
    }

    struct LaunchPadRegistry has key {
        investors: IterableTable<address, TokenDistribute>,
        totalBid: u64
    }

    public fun initialize(account: &signer){
        assert!(signer::address_of(account) == @aptospad_admin, ERR_PERMISSIONS);
        move_to(&config::getResourceSigner(), LaunchPadRegistry {
            investors: iterable_table::new<address, TokenDistribute>(),
            totalBid: 0u64
        });

        config::setSwapState(STATE_INIT);
    }

    /// start season: make sure prev season if any, already released!
    public fun resetSeason(account: &signer){
        assert!(signer::address_of(account) == @aptospad_admin, ERR_PERMISSIONS);
        assert!(config::getSwapState() == STATE_ENDED, ERR_SEASON_ENDED);
        config::setSwapState(STATE_INIT);
    }

    /// start buy season
    public fun whiteListSeason(account: &signer){
        assert!(signer::address_of(account) == @aptospad_admin, ERR_PERMISSIONS);
        assert!(config::getSwapState() == STATE_INIT, ERR_SEASON_NOT_RESET);
        config::setSwapState(STATE_WL);
    }

    /// start lunchpad
    public fun launchPadSeason(account: &signer){
        assert!(signer::address_of(account) == @aptospad_admin, ERR_PERMISSIONS);
        assert!(config::getSwapState() == STATE_WL, ERR_SEASON_STATE);
        config::setSwapState(STATE_LAUNCHPAD);
    }

    /// end launch pad and start distribute
    public fun distributeSeason(account: &signer) acquires LaunchPadRegistry {
        assert!(signer::address_of(account) == @aptospad_admin, ERR_PERMISSIONS);
        assert!(config::getSwapState() == STATE_LAUNCHPAD, ERR_SEASON_STATE);
        config::setSwapState(STATE_DISTRIBUTE);
        distributeAtpp();
        config::setSwapState(STATE_ENDED);
    }


    /// user will lock settlement
    /// in the case hardcap reached, transaction will be rejected
    public fun bidAptosPad(user: &signer, aptosAmount: u64)  acquires LaunchPadRegistry {
        assert!(!config::isEmergency(), ERR_EMERGENCY);
        assert!(config::getSwapState() == STATE_LAUNCHPAD, ERR_SEASON_STATE);

        let hardCap = config::getSwapConfigHardCap();
        let distribute = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
        assert!(distribute.totalBid <= hardCap, ERR_HARDCAP_REACHED);

        coin::transfer<AptosCoin>(user, config::getResourceAddress(), aptosAmount);
        coin::register<AptosPadCoin>(user);

        let wl = iterable_table::borrow_mut_with_default( &mut distribute.investors, signer::address_of(user), TokenDistribute {
            cap: DEFAULT_CAP,
            distributed: 0u64,
            bid: 0u64,
            investor: signer::address_of(user)
        });
        wl.bid = aptosAmount;
        distribute.totalBid = distribute.totalBid + aptosAmount;
    }

    public fun addWhiteList(aptospadAdmin: &signer, account: address, cap: u64) acquires LaunchPadRegistry {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        assert!(config::getSwapState() == STATE_WL, ERR_SEASON_STATE);

        let details = &mut borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress()).investors;
        let wl = iterable_table::borrow_mut_with_default(details, account, TokenDistribute {
            cap: 0u64,
            distributed: 0u64,
            bid: 0u64,
            investor: account
        });
        wl.cap = cap;
    }

    /// check refund & softcap
    /// release token or refund!
    fun distributeAtpp() acquires LaunchPadRegistry {
        let softCap = config::getSwapConfigSoftCap();
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
        let totalBuy = registry.totalBid;
        let enableRefund = config::getSwapConfigEnableRefund();

        if(enableRefund && (totalBuy < softCap))
            refund()
        else
            distribute()
    }

    /// Distribute Aptt to Pad with rounds:
    /// - if hardcap not satisfied --> distribute all
    /// - if hardcap satisfied:
    ///     + fill cap first
    ///     + then fill remainning
    fun distribute() acquires LaunchPadRegistry {
        let hardCapApt = config::getSwapConfigHardCap();
        let toPadRate = config::getSwapConfigAptToApttRate();
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
        let totalBidApt = registry.totalBid;

        if(totalBidApt <= hardCapApt){
            let investors = &mut borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress()).investors;
            let iterator = &mut iterable_table::head_key(investors);
            while(option::is_some(iterator)){
                let (investor, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(iterator));
                investor.distributed =  toPadRate * investor.bid; ///@todo prevent overflow

                config::mintAtppTo(investor.investor, investor.distributed);
                iterator = &mut next;
            }
        }
        else {
            let totalAllocatedApt = 0u64;
            {
                let investors = &mut borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress()).investors;
                let iterator = &mut iterable_table::head_key(investors);
                while (option::is_some(iterator)) {
                    let (investor, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(iterator));
                    let capApt = investor.cap;
                    let bidApt = investor.bid;
                    let allocatedApt = math64::min(capApt, bidApt);
                    totalAllocatedApt = totalAllocatedApt + allocatedApt;
                    investor.distributed = allocatedApt * toPadRate;
                    config::mintAtppTo(investor.investor, investor.distributed);
                    if (totalAllocatedApt >= hardCapApt)
                        break
                    else
                    {
                        iterator = &mut next;
                        continue
                    }
                };
            };

            ///round 2: pick over-cap
            if(totalAllocatedApt < hardCapApt){
                let investors = &mut borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress()).investors;
                let iterator = &mut iterable_table::head_key(investors);
                let totalAllocatedApt = 0u64;
                while(option::is_some(iterator)){
                    let (investor, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(iterator));
                    let capApt = investor.cap;
                    let bidApt = investor.bid;
                    let moreAllocatedApt = math64::max(bidApt - capApt, 0);
                    if(moreAllocatedApt > 0){
                        let morePad = moreAllocatedApt * toPadRate;
                        totalAllocatedApt = totalAllocatedApt + moreAllocatedApt;
                        investor.distributed = investor.distributed + morePad;
                        config::mintAtppTo(investor.investor, morePad);
                    };

                    if(totalAllocatedApt >= hardCapApt)
                    {
                        break
                    }
                    else
                    {
                        iterator = &mut next;
                        continue
                    }
                };
            }
        }
    }

    /// Refund
    /// @todo be carefull of fee
    fun refund() acquires LaunchPadRegistry {
        let investors = &mut borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress()).investors;
        let iterator = &mut iterable_table::head_key(investors);
        while(option::is_some(iterator)){
            let (investor, _prev, next) = iterable_table::borrow_iter(investors, option::extract(iterator));
            coin::transfer<AptosCoin>(&config::getResourceSigner(), investor.investor, investor.bid);
            iterator = &mut next;
        }
    }
}
