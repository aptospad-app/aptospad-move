module aptospad::aptospad_swap {
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::{AptosCoin};
    use aptospad::config;
    use aptospad::iterable_table::IterableTable;
    use aptospad::iterable_table;
    use std::option;
    use aptospad_coin::aptospad_coin::AptosPadCoin;
    use aptos_std::math64;
    use std::vector;
    use aptos_framework::event::EventHandle;
    use aptos_framework::account;
    use aptos_framework::event;
    use std::signer::address_of;

    /// error codes
    const ERR_BID_OVERFLOW: u64 = 412;
    const ERR_NOT_IN_WHITELIST: u64 = 411;
    const ERR_HARDCAP_REACHED: u64 = 410;
    const ERR_SEASON_STATE: u64 = 409;
    const ERR_SEASON_ACTIVE: u64 = 408;
    const ERR_SEASON_NOT_RESET: u64 = 407;
    const ERR_SEASON_ENDED: u64 = 406;
    const ERR_EMERGENCY: u64 = 405;
    const ERR_PERMISSIONS: u64 = 403;

    const DEFAULT_CAP_1K: u64 = 100000000*100;
    const DEFAULT_OVERFLOW_100: u64 = 100000000*100;


    const STATE_INIT: u8 = 1;
    const STATE_WL: u8 = 2;
    const STATE_LAUNCHPAD: u8 = 3;
    const STATE_DISTRIBUTE: u8 = 4;
    const STATE_ENDED: u8 = 5;
    const REFUND_CHARGE_RATE_PER_100K: u64 = 100;
    const STATE_DISTRIBUTE2: u8 = 5;


    ///cap: in token
    ///wanna: in APT
    ///distributed: in token
    struct TokenDistribute has drop, store, copy, key {
        cap: u64,
        bid: u64,
        distributed: u64,
        distributedToken: u64,
        refund: u64,
        investor: address
    }

    struct WhiteListEvent has drop, store, copy {
        cap: u64,
        bid: u64,
        distributed: u64,
        distributedToken: u64,
        refund: u64,
        investor: address
    }

    struct BidAptosPadEvent has drop, store, copy {
        cap: u64,
        bid: u64,
        investor: address
    }

    struct DistributeAptospadEvent has drop, store, copy {
        cap: u64,
        bid: u64,
        distributedToken: u64,
        refund: u64,
        investor: address
    }

    struct LaunchPadRegistry has key {
        investors: IterableTable<address, TokenDistribute>,
        totalBid: u64,
        bidaptospad_events: EventHandle<BidAptosPadEvent>,
        distributeaptospad_events: EventHandle<DistributeAptospadEvent>,
        whitelist_events: EventHandle<WhiteListEvent>,
    }

    public fun initialize(account: &signer){
        assert_admin(account);
        move_to(&config::getResourceSigner(), LaunchPadRegistry {
            investors: iterable_table::new<address, TokenDistribute>(),
            totalBid: 0u64,
            whitelist_events: account::new_event_handle<WhiteListEvent>(&config::getResourceSigner()),
            bidaptospad_events: account::new_event_handle<BidAptosPadEvent>(&config::getResourceSigner()),
            distributeaptospad_events: account::new_event_handle<DistributeAptospadEvent>(&config::getResourceSigner()),
        });

        config::setSwapState(STATE_INIT);
    }

    public fun getSwapTotalBid(): u64 acquires LaunchPadRegistry {
        borrow_global<LaunchPadRegistry>(config::getResourceAddress()).totalBid
    }

    /// start season: make sure prev season if any, already released!
    public fun resetSeason(account: &signer){
        assert_admin(account);
        assert!(config::getSwapState() == STATE_ENDED, ERR_SEASON_ENDED);
        config::setSwapState(STATE_INIT);
    }

    /// start buy season
    public fun whiteListSeason(account: &signer){
        assert_admin(account);
        assert!(config::getSwapState() == STATE_INIT, ERR_SEASON_NOT_RESET);
        config::setSwapState(STATE_WL);
    }

    /// start lunchpad
    public fun launchPadSeason(account: &signer){
        assert_admin(account);
        assert!(config::getSwapState() == STATE_WL, ERR_SEASON_STATE);
        config::setSwapState(STATE_LAUNCHPAD);
    }

    /// end launch pad and start distribute
    public fun distributeSeason(account: &signer) acquires LaunchPadRegistry {
        assert_admin(account);
        assert_no_emergency();
        assert!(config::getSwapState() == STATE_LAUNCHPAD, ERR_SEASON_STATE);
        config::setSwapState(STATE_DISTRIBUTE);
        distributeAtpp();
        config::setSwapState(STATE_ENDED);
    }

    public fun distributeSeasonV2(account: &signer) acquires LaunchPadRegistry, TokenDistribute {
        assert_admin(account);
        assert_no_emergency();
        assert!(config::getSwapState() == STATE_LAUNCHPAD, ERR_SEASON_STATE);
        config::setSwapState(STATE_DISTRIBUTE);
        distributeAtppV2();
        config::setSwapState(STATE_ENDED);
    }

    public fun distributeSeasonV3(account: &signer) acquires LaunchPadRegistry, TokenDistribute {
        assert_admin(account);
        assert_no_emergency();
        assert!(config::getSwapState() == STATE_LAUNCHPAD, ERR_SEASON_STATE);
        config::setSwapState(STATE_DISTRIBUTE);
        distributeAtppV3();
    }

    public fun paycoinAndRefund(account: &signer) acquires LaunchPadRegistry {
        assert_admin(account);
        assert_no_emergency();
        assert!(config::getSwapState() == STATE_DISTRIBUTE, ERR_SEASON_STATE);
        payCoinAndRefund();
        config::setSwapState(STATE_ENDED);
    }

    /// withdraw aptos from resource to ...
    public fun withdrawAptos(admin: &signer, debit: address, amount: u64){
        assert_admin(admin);
        coin::transfer<AptosCoin>(&config::getResourceSigner(), debit, amount);
    }

    /// withdraw aptosPad from resource to ...
    public fun withdrawAptosPad(admin: &signer, debit: address, amount: u64){
        assert_admin(admin);
        coin::transfer<AptosPadCoin>(&config::getResourceSigner(), debit, amount);
    }

    /// user will lock settlement
    /// in the case hardcap reached, transaction will be rejected
    public fun bidAptosPad(user: &signer, aptosAmount: u64)  acquires LaunchPadRegistry {
        assert_no_emergency();
        assert!(config::getSwapState() == STATE_LAUNCHPAD, ERR_SEASON_STATE);

        let hardCap = config::getSwapConfigHardCap();
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());

        let bypassWhitelistEnabled = config::isBypassWhiteList();
        let isWhitelisted = iterable_table::contains( &mut registry.investors, signer::address_of(user));

        assert!(bypassWhitelistEnabled || isWhitelisted, ERR_NOT_IN_WHITELIST);
        assert!(registry.totalBid <= hardCap, ERR_HARDCAP_REACHED);
        registry.totalBid = registry.totalBid + aptosAmount;

        let eventHandler = &mut registry.bidaptospad_events;
        coin::transfer<AptosCoin>(user, config::getResourceAddress(), aptosAmount);
        coin::register<AptosPadCoin>(user);

        let wl = iterable_table::borrow_mut_with_default( &mut registry.investors, signer::address_of(user), TokenDistribute {
            cap: DEFAULT_CAP_1K,
            bid: 0u64,
            distributed: 0u64,
            distributedToken: 0u64,
            refund: 0u64,
            investor: signer::address_of(user)
        });
        wl.bid = aptosAmount;

        event::emit_event<BidAptosPadEvent>(eventHandler,  BidAptosPadEvent {
            cap: wl.cap,
            bid: wl.bid,
            investor: wl.investor
        });
    }

    public fun bidAptosPadV2(user: &signer, aptosAmount: u64)  acquires LaunchPadRegistry {
        assert_no_emergency();
        assert!(config::getSwapState() == STATE_LAUNCHPAD, ERR_SEASON_STATE);

        let hardCap = config::getSwapConfigHardCap();
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());

        let bypassWhitelistEnabled = config::isBypassWhiteList();
        let isWhitelisted = iterable_table::contains( &mut registry.investors, signer::address_of(user));

        assert!(bypassWhitelistEnabled || isWhitelisted, ERR_NOT_IN_WHITELIST);
        assert!(registry.totalBid <= hardCap, ERR_HARDCAP_REACHED);
        registry.totalBid = registry.totalBid + aptosAmount;

        let eventHandler = &mut registry.bidaptospad_events;
        coin::transfer<AptosCoin>(user, config::getResourceAddress(), aptosAmount);

        if(!coin::is_account_registered<AptosPadCoin>(signer::address_of(user))){
            coin::register<AptosPadCoin>(user)
        };

        let wl = iterable_table::borrow_mut_with_default( &mut registry.investors, signer::address_of(user), TokenDistribute {
            cap: DEFAULT_CAP_1K,
            bid: 0u64,
            distributed: 0u64,
            distributedToken: 0u64,
            refund: 0u64,
            investor: signer::address_of(user)
        });

        wl.bid = wl.bid + aptosAmount;

        event::emit_event<BidAptosPadEvent>(eventHandler,  BidAptosPadEvent {
            cap: wl.cap,
            bid: wl.bid,
            investor: wl.investor
        });
    }

    public fun bidAptosPadV3(user: &signer, aptosAmount: u64)  acquires LaunchPadRegistry {
        assert_no_emergency();
        assert!(config::getSwapState() == STATE_LAUNCHPAD, ERR_SEASON_STATE);

        let hardCap = config::getSwapConfigHardCap();
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());

        let bypassWhitelistEnabled = config::isBypassWhiteList();
        let isWhitelisted = iterable_table::contains( &mut registry.investors, signer::address_of(user));

        assert!(bypassWhitelistEnabled || isWhitelisted, ERR_NOT_IN_WHITELIST);
        assert!(registry.totalBid <= hardCap, ERR_HARDCAP_REACHED);

        let wl = iterable_table::borrow_mut_with_default( &mut registry.investors, signer::address_of(user), TokenDistribute {
            cap: DEFAULT_CAP_1K,
            bid: 0u64,
            distributed: 0u64,
            distributedToken: 0u64,
            refund: 0u64,
            investor: signer::address_of(user)
        });

        wl.bid = wl.bid + aptosAmount;

        checkBidOverflow(wl.bid, wl.cap);


        registry.totalBid = registry.totalBid + aptosAmount;

        let eventHandler = &mut registry.bidaptospad_events;
        coin::transfer<AptosCoin>(user, config::getResourceAddress(), aptosAmount);

        if(!coin::is_account_registered<AptosPadCoin>(signer::address_of(user))){
            coin::register<AptosPadCoin>(user)
        };

        event::emit_event<BidAptosPadEvent>(eventHandler,  BidAptosPadEvent {
            cap: wl.cap,
            bid: wl.bid,
            investor: wl.investor
        });
    }

    public fun bidAptosPadV4(user: &signer, aptosAmount: u64)  acquires LaunchPadRegistry, TokenDistribute {
        assert_no_emergency();
        assert!(config::getSwapState() == STATE_LAUNCHPAD, ERR_SEASON_STATE);

        let userAddr = signer::address_of(user);
        let hardCap = config::getSwapConfigHardCap();
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());

        let bypassWhitelistEnabled = config::isBypassWhiteList();
        let isWhitelisted = iterable_table::contains( &mut registry.investors, signer::address_of(user));

        assert!(bypassWhitelistEnabled || isWhitelisted, ERR_NOT_IN_WHITELIST);
        assert!(registry.totalBid <= hardCap, ERR_HARDCAP_REACHED);

        let wl = iterable_table::borrow_mut_with_default( &mut registry.investors, signer::address_of(user), TokenDistribute {
            cap: DEFAULT_CAP_1K,
            bid: 0u64,
            distributed: 0u64,
            distributedToken: 0u64,
            refund: 0u64,
            investor: signer::address_of(user)
        });

        wl.bid = wl.bid + aptosAmount;

        checkBidOverflow(wl.bid, wl.cap);

        if(exists<TokenDistribute>(userAddr)){
            move_from<TokenDistribute>(address_of(user));
        };

        move_to(user, *wl);

        registry.totalBid = registry.totalBid + aptosAmount;

        let eventHandler = &mut registry.bidaptospad_events;
        coin::transfer<AptosCoin>(user, config::getResourceAddress(), aptosAmount);

        if(!coin::is_account_registered<AptosPadCoin>(signer::address_of(user))){
            coin::register<AptosPadCoin>(user)
        };

        event::emit_event<BidAptosPadEvent>(eventHandler,  BidAptosPadEvent {
            cap: wl.cap,
            bid: wl.bid,
            investor: wl.investor
        });
    }

    public fun bidAptosPadV5(user: &signer, aptosAmount: u64)  acquires LaunchPadRegistry, TokenDistribute {
        assert_no_emergency();
        assert!(config::getSwapState() == STATE_LAUNCHPAD, ERR_SEASON_STATE);

        let userAddr = signer::address_of(user);
        let hardCap = config::getSwapConfigHardCap();
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());

        let bypassWhitelistEnabled = config::isBypassWhiteList();
        let isWhitelisted = iterable_table::contains( &mut registry.investors, signer::address_of(user));

        assert!(bypassWhitelistEnabled || isWhitelisted, ERR_NOT_IN_WHITELIST);
        assert!(registry.totalBid <= hardCap, ERR_HARDCAP_REACHED);

        let wl = iterable_table::borrow_mut_with_default( &mut registry.investors, signer::address_of(user), TokenDistribute {
            cap: DEFAULT_CAP_1K,
            bid: 0u64,
            distributed: 0u64,
            distributedToken: 0u64,
            refund: 0u64,
            investor: signer::address_of(user)
        });

        wl.bid = wl.bid + aptosAmount;

        registry.totalBid = registry.totalBid + aptosAmount;

        checkBidOverflow(wl.bid, wl.cap);

        if(!exists<TokenDistribute>(userAddr)){
            move_to(user, *wl);
        }
        else {
            let bill = borrow_global_mut<TokenDistribute>(address_of(user));
            bill.bid = bill.bid + aptosAmount;
        };

        let eventHandler = &mut registry.bidaptospad_events;
        coin::transfer<AptosCoin>(user, config::getResourceAddress(), aptosAmount);

        if(!coin::is_account_registered<AptosPadCoin>(signer::address_of(user))){
            coin::register<AptosPadCoin>(user)
        };

        event::emit_event<BidAptosPadEvent>(eventHandler,  BidAptosPadEvent {
            cap: wl.cap,
            bid: wl.bid,
            investor: wl.investor
        });
    }

    fun checkBidOverflow(_bid: u64, _cap: u64) {
//        assert!(_bid <= DEFAULT_OVERFLOW_100, ERR_BID_OVERFLOW);
    }

    public fun addWhiteList(aptospadAdmin: &signer, account: address, cap: u64) acquires LaunchPadRegistry {
        assert_admin(aptospadAdmin);
        assert!(config::getSwapState() == STATE_WL, ERR_SEASON_STATE);
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
        let investors = &mut registry.investors;
        let wlEventHandler = &mut registry.whitelist_events;

        let wl = iterable_table::borrow_mut_with_default(investors, account, TokenDistribute {
            cap: 0u64,
            distributed: 0u64,
            distributedToken: 0u64,
            bid: 0u64,
            refund: 0u64,
            investor: account
        });
        wl.cap = cap;

        event::emit_event<WhiteListEvent>(wlEventHandler, WhiteListEvent{
            cap: wl.cap,
            bid: wl.bid,
            distributed: wl.distributedToken,
            distributedToken: wl.refund,
            refund: wl.refund,
            investor: wl.investor
        });
    }

    public fun getWhiteList(account: address): (u64, u64, u64, u64, u64) acquires LaunchPadRegistry {
        let details = &mut borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress()).investors;
        let wl = iterable_table::borrow_mut_with_default(details, account, TokenDistribute {
            cap: 0u64,
            distributed: 0u64,
            distributedToken: 0u64,
            bid: 0u64,
            refund: 0u64,
            investor: account
        });
        (wl.cap, wl.bid, wl.distributed, wl.distributedToken, wl.refund)
    }

    public fun getWhiteLists(): vector<address> acquires LaunchPadRegistry {
        let investors = &mut borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress()).investors;
        let output = vector::empty<address>();
        let looper = &mut iterable_table::head_key(investors);
        while(option::is_some(looper)){
            let (investor, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));
            vector::push_back( &mut output, investor.investor);
            looper = &mut next;
        };
        output
    }

    /// if not satisfied softcap:
    ///     if refund enabled --> refund
    ///     else --> distribute
    /// else
    ///     distribute all
    ///
    fun distributeAtpp() acquires LaunchPadRegistry {
        let softCap = config::getSwapConfigSoftCap();
        let totalBuy = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress()).totalBid;
        let enableRefund = config::getSwapConfigEnableRefund();

        if(enableRefund && (totalBuy < softCap))
            refundAll()
        else
            distributeAll()
    }

    fun distributeAtppV2() acquires LaunchPadRegistry, TokenDistribute {
        let softCap = config::getSwapConfigSoftCap();
        let totalBuy = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress()).totalBid;
        let enableRefund = config::getSwapConfigEnableRefund();

        if(enableRefund && (totalBuy < softCap))
            refundAllV2()
        else
            distributeAllV2()
    }

    fun distributeAtppV3() acquires LaunchPadRegistry, TokenDistribute {
        let softCap = config::getSwapConfigSoftCap();
        let totalBuy = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress()).totalBid;
        let enableRefund = config::getSwapConfigEnableRefund();

        if(enableRefund && (totalBuy < softCap))
            refundAllV3()
        else
            distributeAllV3()
    }


    /// Distribute Aptt to Pad with rounds:
    /// - if mid cap --> distribute all
    /// - if hardcap satisfied:
    ///     + max distribute amount is hardcap
    ///     + prefer cap first
    ///     + then fill remainning
    fun distributeAll() acquires LaunchPadRegistry {
        let hardCapApt = config::getSwapConfigHardCap();
        let toPadRate = config::getSwapConfigAptToApttRate();
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
        let totalBidApt = registry.totalBid;

        if(totalBidApt <= hardCapApt){
            let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
            let investors = &mut registry.investors;
            let eventHandler = &mut registry.distributeaptospad_events;

            let looper = &mut iterable_table::head_key(investors);
            while(option::is_some(looper)){
                let (investor, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));
                investor.distributed = investor.bid;
                investor.distributedToken = investor.distributed * toPadRate;
                config::mintAtppTo(investor.investor, investor.distributedToken);

                event::emit_event<DistributeAptospadEvent>(eventHandler, DistributeAptospadEvent {
                    cap: investor.cap,
                    bid: investor.bid,
                    distributedToken: investor.distributedToken,
                    refund: investor.refund,
                    investor: investor.investor
                });

                looper = &mut next;
            }
        }
        else {
            let availToAllocate = hardCapApt;
            {
                let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
                let investors = &mut registry.investors;
                let eventHandler = &mut registry.distributeaptospad_events;

                let looper = &mut iterable_table::head_key(investors);
                while (option::is_some(looper)) {
                    let (investor, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));
                    let capApt = investor.cap;
                    let bidApt = investor.bid;

                    let allocatedApt = math64::min(math64::min(capApt, bidApt), availToAllocate);
                    if(allocatedApt > 0){
                        investor.distributed = allocatedApt;
                        investor.distributedToken = allocatedApt * toPadRate;
                        availToAllocate = availToAllocate - allocatedApt;
                        config::mintAtppTo(investor.investor, investor.distributedToken);

                        event::emit_event<DistributeAptospadEvent>(eventHandler, DistributeAptospadEvent {
                            cap: investor.cap,
                            bid: investor.bid,
                            distributedToken: investor.distributedToken,
                            refund: investor.refund,
                            investor: investor.investor
                        });
                    };

                    if (availToAllocate <= 0)
                    {
                        break
                    }
                    else
                    {
                        looper = &mut next;
                        continue
                    }
                };
            };

            if(availToAllocate > 0){
                let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
                let investors = &mut registry.investors;
                let eventHandler = &mut registry.distributeaptospad_events;

                let looper = &mut iterable_table::head_key(investors);
                while(option::is_some(looper)){
                    let (investor, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));
                    let moreAllocated = math64::min(math64::max(investor.bid - investor.distributed, 0), availToAllocate);
                    if(moreAllocated > 0){
                        investor.distributed = investor.distributed + moreAllocated;
                        let morePad = moreAllocated * toPadRate;
                        investor.distributedToken = investor.distributedToken + morePad;
                        availToAllocate = availToAllocate - moreAllocated;
                        config::mintAtppTo(investor.investor, morePad);

                        event::emit_event<DistributeAptospadEvent>(eventHandler, DistributeAptospadEvent {
                            cap: investor.cap,
                            bid: investor.bid,
                            distributedToken: investor.distributedToken,
                            refund: investor.refund,
                            investor: investor.investor
                        });
                    };

                    if(availToAllocate <= 0)
                    {
                        break
                    }
                    else
                    {
                        looper = &mut next;
                        continue
                    }
                };
            };

            assert!(availToAllocate <= 0, 100001);

            {
                let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
                let investors = &mut registry.investors;
                let eventHandler = &mut registry.distributeaptospad_events;
                let looper = &mut iterable_table::head_key(investors);
                while(option::is_some(looper)){
                    let (investor, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));
                    let bidApt = investor.bid;
                    let distributed = investor.distributed;
                    assert!(bidApt >= distributed, 10001);
                    investor.refund = math64::max(bidApt - distributed, 0);
                    if(investor.refund > 0)
                    {
                        refundAptos(&config::getResourceSigner(), investor.investor, investor.refund);

                        event::emit_event<DistributeAptospadEvent>(eventHandler, DistributeAptospadEvent {
                            cap: investor.cap,
                            bid: investor.bid,
                            distributedToken: investor.distributedToken,
                            refund: investor.refund,
                            investor: investor.investor
                        });
                    };
                    looper = &mut next;
                };
            }
        }
    }


    /// Distribute per account
    /// - update pool bill
    /// - update account's bill
    /// - mint token
    fun distributePerAccount(poolBill: &mut TokenDistribute, toPadRate: u64, moreAptAllocated: u64) acquires TokenDistribute {
        poolBill.distributed = poolBill.distributed + moreAptAllocated;
        let morePad = moreAptAllocated * toPadRate;
        poolBill.distributedToken = poolBill.distributedToken + morePad;

        if(exists<TokenDistribute>(poolBill.investor)){
            let userBill = borrow_global_mut<TokenDistribute>(poolBill.investor);
            userBill.distributed = poolBill.distributed;
            userBill.distributedToken = poolBill.distributedToken;
        };

        config::mintAtppTo(poolBill.investor, morePad);
    }

    /// Distribute per account
   /// - update pool bill
   /// - update account's bill
   /// - mint token
    fun distributePerAccountV2(poolBill: &mut TokenDistribute, toPadRate: u64, moreAptAllocated: u64) acquires TokenDistribute {
        poolBill.distributed = poolBill.distributed + moreAptAllocated;
        let morePad = moreAptAllocated * toPadRate;
        poolBill.distributedToken = poolBill.distributedToken + morePad;

        if(exists<TokenDistribute>(poolBill.investor)){
            let userBill = borrow_global_mut<TokenDistribute>(poolBill.investor);
            userBill.distributed = poolBill.distributed;
            userBill.distributedToken = poolBill.distributedToken;
        };
    }

    /// Distribute Aptt to Pad with rounds:
    /// - if mid cap --> distribute all
    /// - if hardcap satisfied:
    ///     + max distribute amount is hardcap
    ///     + prefer cap first
    ///     + then fill remainning
    fun distributeAllV2() acquires LaunchPadRegistry, TokenDistribute {
        let hardCapApt = config::getSwapConfigHardCap();
        let toPadRate = config::getSwapConfigAptToApttRate();
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
        let totalBidApt = registry.totalBid;

        if(totalBidApt <= hardCapApt){
            let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
            let investors = &mut registry.investors;
            let eventHandler = &mut registry.distributeaptospad_events;

            let looper = &mut iterable_table::head_key(investors);
            while(option::is_some(looper)){
                let (poolBill, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));

                let moreAptAllocated = poolBill.bid;
                distributePerAccount(poolBill, toPadRate, moreAptAllocated);

                event::emit_event<DistributeAptospadEvent>(eventHandler, DistributeAptospadEvent {
                    cap: poolBill.cap,
                    bid: poolBill.bid,
                    distributedToken: poolBill.distributedToken,
                    refund: poolBill.refund,
                    investor: poolBill.investor
                });

                looper = &mut next;
            }
        }
        else {
            let availToAllocate = hardCapApt;
                {
                    let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
                    let investors = &mut registry.investors;
                    let eventHandler = &mut registry.distributeaptospad_events;

                    let looper = &mut iterable_table::head_key(investors);
                    while (option::is_some(looper)) {
                        let (poolBill, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));

                        let allocatedApt = math64::min(math64::min(poolBill.cap, poolBill.bid), availToAllocate);

                        if(allocatedApt > 0){
                            availToAllocate = availToAllocate - allocatedApt;

                            distributePerAccount(poolBill, toPadRate, allocatedApt);

                            event::emit_event<DistributeAptospadEvent>(eventHandler, DistributeAptospadEvent {
                                cap: poolBill.cap,
                                bid: poolBill.bid,
                                distributedToken: poolBill.distributedToken,
                                refund: poolBill.refund,
                                investor: poolBill.investor
                            });
                        };

                        if (availToAllocate <= 0)
                        {
                            break
                        }
                        else
                        {
                            looper = &mut next;
                            continue
                        }
                    };
                };

            if(availToAllocate > 0){
                let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
                let investors = &mut registry.investors;
                let eventHandler = &mut registry.distributeaptospad_events;

                let looper = &mut iterable_table::head_key(investors);
                while(option::is_some(looper)){
                    let (poolBill, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));
                    let moreAllocated = math64::min(math64::max(poolBill.bid - poolBill.distributed, 0), availToAllocate);
                    if(moreAllocated > 0){
                        availToAllocate = availToAllocate - moreAllocated;

                        distributePerAccount(poolBill, toPadRate, moreAllocated);

                        event::emit_event<DistributeAptospadEvent>(eventHandler, DistributeAptospadEvent {
                            cap: poolBill.cap,
                            bid: poolBill.bid,
                            distributedToken: poolBill.distributedToken,
                            refund: poolBill.refund,
                            investor: poolBill.investor
                        });
                    };

                    if(availToAllocate <= 0)
                    {
                        break
                    }
                    else
                    {
                        looper = &mut next;
                        continue
                    }
                };
            };

            assert!(availToAllocate <= 0, 100001);

            {
                let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
                let investors = &mut registry.investors;
                let eventHandler = &mut registry.distributeaptospad_events;
                let looper = &mut iterable_table::head_key(investors);
                while(option::is_some(looper)){
                    let (poolBill, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));

                    assert!(poolBill.bid >= poolBill.distributed, 10001);

                    let refundAmt = math64::max(poolBill.bid - poolBill.distributed, 0);

                    if(refundAmt > 0)
                    {
                        refundAptosV2(&config::getResourceSigner(), poolBill, refundAmt);

                        event::emit_event<DistributeAptospadEvent>(eventHandler, DistributeAptospadEvent {
                            cap: poolBill.cap,
                            bid: poolBill.bid,
                            distributedToken: poolBill.distributedToken,
                            refund: poolBill.refund,
                            investor: poolBill.investor
                        });
                    };
                    looper = &mut next;
                };
            }
        }
    }

    fun distributeAllV3() acquires LaunchPadRegistry, TokenDistribute {
        let hardCapApt = config::getSwapConfigHardCap();
        let toPadRate = config::getSwapConfigAptToApttRate();
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
        let totalBidApt = registry.totalBid;

        if(totalBidApt <= hardCapApt){
            let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
            let investors = &mut registry.investors;

            let looper = &mut iterable_table::head_key(investors);
            while(option::is_some(looper)){
                let (poolBill, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));

                let moreAptAllocated = poolBill.bid;
                distributePerAccountV2(poolBill, toPadRate, moreAptAllocated);
                looper = &mut next;
            }
        }
        else {
            let availToAllocate = hardCapApt;
                {
                    let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
                    let investors = &mut registry.investors;

                    let looper = &mut iterable_table::head_key(investors);
                    while (option::is_some(looper)) {
                        let (poolBill, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));

                        let allocatedApt = math64::min(math64::min(poolBill.cap, poolBill.bid), availToAllocate);

                        if(allocatedApt > 0){
                            availToAllocate = availToAllocate - allocatedApt;
                            distributePerAccountV2(poolBill, toPadRate, allocatedApt);
                        };

                        if (availToAllocate <= 0)
                        {
                            break
                        }
                        else
                        {
                            looper = &mut next;
                            continue
                        }
                    };
                };

            if(availToAllocate > 0){
                let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
                let investors = &mut registry.investors;

                let looper = &mut iterable_table::head_key(investors);
                while(option::is_some(looper)){
                    let (poolBill, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));
                    let moreAllocated = math64::min(math64::max(poolBill.bid - poolBill.distributed, 0), availToAllocate);
                    if(moreAllocated > 0){
                        availToAllocate = availToAllocate - moreAllocated;
                        distributePerAccountV2(poolBill, toPadRate, moreAllocated);
                    };

                    if(availToAllocate <= 0)
                    {
                        break
                    }
                    else
                    {
                        looper = &mut next;
                        continue
                    }
                };
            };

            assert!(availToAllocate <= 0, 100001);

            {
                let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
                let investors = &mut registry.investors;
                let looper = &mut iterable_table::head_key(investors);
                while(option::is_some(looper)){
                    let (poolBill, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));

                    assert!(poolBill.bid >= poolBill.distributed, 10001);

                    let refundAmt = math64::max(poolBill.bid - poolBill.distributed, 0);

                    if(refundAmt > 0)
                    {
                        refundAptosV3(&config::getResourceSigner(), poolBill, refundAmt);
                    };
                    looper = &mut next;
                };
            }
        }
    }

    public fun payCoinAndRefund()acquires LaunchPadRegistry {
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
        let investors = &mut registry.investors;
        let resourceSigner = &config::getResourceSigner();

        let looper = &mut iterable_table::head_key(investors);
        while(option::is_some(looper)){
            let (poolBill, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));
            let investor = poolBill.investor;
            let tokenAmt = poolBill.distributedToken;
            let refundAmt = poolBill.refund;
            if(tokenAmt > 0)
            {
                config::mintAtppTo(investor, tokenAmt);
            };

            if(refundAmt > 0) {
                coin::transfer<AptosCoin>(resourceSigner, investor, refundAmt);
            };

            looper = &mut next;
        }
    }

    fun refundAll() acquires LaunchPadRegistry {
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
        let investors = &mut registry.investors;
        let eventHandler = &mut registry.distributeaptospad_events;
        let looper = &mut iterable_table::head_key(investors);
        let resourceSigner = &config::getResourceSigner();
        while(option::is_some(looper)){
            let (investor, _prev, next) = iterable_table::borrow_iter(investors, option::extract(looper));
            refundAptos(resourceSigner, investor.investor, investor.bid);

            event::emit_event<DistributeAptospadEvent>(eventHandler, DistributeAptospadEvent {
                cap: investor.cap,
                bid: investor.bid,
                distributedToken: investor.distributedToken,
                refund: investor.refund,
                investor: investor.investor
            });

            looper = &mut next;
        }
    }

    fun refundAllV2() acquires LaunchPadRegistry, TokenDistribute {
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
        let investors = &mut registry.investors;
        let eventHandler = &mut registry.distributeaptospad_events;
        let looper = &mut iterable_table::head_key(investors);
        let resourceSigner = &config::getResourceSigner();

        while(option::is_some(looper)){
            let (poolBill, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));

            let moreRefundAptAmt = poolBill.bid;
            refundAptosV2(resourceSigner, poolBill, moreRefundAptAmt);

            event::emit_event<DistributeAptospadEvent>(eventHandler, DistributeAptospadEvent {
                cap: poolBill.cap,
                bid: poolBill.bid,
                distributedToken: poolBill.distributedToken,
                refund: poolBill.refund,
                investor: poolBill.investor
            });

            looper = &mut next;
        }
    }

    fun refundAllV3() acquires LaunchPadRegistry, TokenDistribute {
        let registry = borrow_global_mut<LaunchPadRegistry>(config::getResourceAddress());
        let investors = &mut registry.investors;
        let looper = &mut iterable_table::head_key(investors);
        let resourceSigner = &config::getResourceSigner();

        while(option::is_some(looper)){
            let (poolBill, _prev, next) = iterable_table::borrow_iter_mut(investors, option::extract(looper));
            let moreRefundAptAmt = poolBill.bid;
            refundAptosV3(resourceSigner, poolBill, moreRefundAptAmt);
            looper = &mut next;
        }
    }

    fun refundAptos(resourceSigner: &signer, investor: address, bidAmt: u64){
        coin::transfer<AptosCoin>(resourceSigner, investor, bidAmt);
    }

    ///Refund more apt
    /// - charge refund fee by percent
    /// - transfer refund to investor
    /// - update account's bill
    fun refundAptosV2(resourceSigner: &signer, poolBill: &mut TokenDistribute, moreRefundAptAmt: u64) acquires TokenDistribute {
        let realRefund = moreRefundAptAmt - (moreRefundAptAmt * REFUND_CHARGE_RATE_PER_100K)/100000;

        poolBill.refund = poolBill.refund + realRefund;

        coin::transfer<AptosCoin>(resourceSigner, poolBill.investor, realRefund);

        if(exists<TokenDistribute>(poolBill.investor)){
            let investorBill = borrow_global_mut<TokenDistribute>(poolBill.investor);
            investorBill.refund = investorBill.refund + realRefund;
        }
    }

    fun refundAptosV3(_resourceSigner: &signer, poolBill: &mut TokenDistribute, moreRefundAptAmt: u64) acquires TokenDistribute {
        let realRefund = moreRefundAptAmt - (moreRefundAptAmt * REFUND_CHARGE_RATE_PER_100K)/100000;

        poolBill.refund = poolBill.refund + realRefund;
        if(exists<TokenDistribute>(poolBill.investor)){
            let investorBill = borrow_global_mut<TokenDistribute>(poolBill.investor);
            investorBill.refund = investorBill.refund + realRefund;
        }
    }

    fun assert_no_emergency(){
        assert!(!config::isEmergency(), ERR_EMERGENCY);
    }

    fun assert_admin(aptosAdmin: &signer){
        assert!(signer::address_of(aptosAdmin) == @aptospad_admin, ERR_PERMISSIONS);
    }
}
