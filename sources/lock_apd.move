module aptospad::lock_apd {
    //    use std::signer;
    use aptos_framework::coin;
    use aptospad::config;
    use aptospad_coin::aptospad_coin::AptosPadCoin;
    use std::signer::address_of;
    use aptos_framework::timestamp;
    use aptos_framework::coin::transfer;
    use aptos_framework::event::EventHandle;
    use aptos_framework::event;
    use aptos_framework::account;

    const DECIMAL_8: u64 = 100000000;
    const MIN_LOCK_APD: u64 = 100 * 100000000;
    //100 apd
    const MIN_LOCK_TIME: u64 = 24 * 3600; //one day

    const LEVEL_0: u64 = 0;
    const LEVEL_1: u64 = 1;
    const LEVEL_2: u64 = 2;
    const LEVEL_3: u64 = 3;
    const LEVEL_4: u64 = 4;
    const LEVEL_5: u64 = 5;

    const ERR_NOT_ENOUGH_APD: u64 = 600;
    const ERR_NOT_LOCKED_APD: u64 = 601;
    const ERR_INVALID_AMOUNT: u64 = 602;
    const ERR_INVALID_PROB: u64 = 603;
    const ERR_INVALID_HOLD: u64 = 604;
    const ERR_INVALID_LOCK: u64 = 605;
    const ERR_INVALID_UNLOCK: u64 = 606;
    const ERR_NOT_ENOUGH_PAPD: u64 = 607;

    struct LockApdConfig has key {
        //level amount
        level1: u64,
        level2: u64,
        level3: u64,
        level4: u64,
        level5: u64,

        //lucky probs
        level1_prob: u64,
        level2_prob: u64,
        level3_prob: u64,
        level4_prob: u64,
        level5_prob: u64,

        //time period in seconds locked before able to in whitelist lucky pool
        level1_hold: u64,
        level2_hold: u64,
        level3_hold: u64,
        level4_hold: u64,
        level5_hold: u64,

        //time period in seconds locked before able to unlock
        level1_lock: u64,
        level2_lock: u64,
        level3_lock: u64,
        level4_lock: u64,
        level5_lock: u64,

        //global info
        total_locked_apd: u64,
        total_locked_user: u64,
    }

    struct LockApdState has key {
        apd_amount: u64,
        level: u64,
        lottery_prob: u64,
        hold_time: u64,
        hold_expire_time: u64,
        lock_time: u64,
        lock_expire_time: u64,
        p_apd_available: u64,
        // use to vote project, will be reset = 0 when unlock

        lock_events: EventHandle<LockEvent>,
        unlock_events: EventHandle<UnlockEvent>,
        vote_events: EventHandle<UseVotePowerEvent>,
    }

    struct LockEvent has drop, store, copy {
        amount: u64,
        time: u64,
        user: address,
        old_balance: u64,
        new_balance: u64,
        old_level: u64,
        new_level: u64
    }

    struct UnlockEvent has drop, store, copy {
        time: u64,
        user: address,
        old_balance: u64,
        new_balance: u64,
        old_level: u64,
        new_level: u64
    }

    struct UseVotePowerEvent has drop, store, copy {
        time: u64,
        user: address,
        amount: u64
    }

    public fun config(admin: &signer,
                      level1: u64,
                      level1_prob: u64,
                      level1_hold: u64,
                      level1_lock: u64) {
        config::assert_admin(admin);
        assert!(level1 >= MIN_LOCK_APD, ERR_INVALID_AMOUNT);
        assert!(level1_prob > 0, ERR_INVALID_PROB);
        assert!(level1_hold >= MIN_LOCK_TIME, ERR_INVALID_HOLD);
        assert!(level1_lock >= MIN_LOCK_TIME, ERR_INVALID_LOCK);

        //@todo later: update config
    }

    public fun initDefault(admin: &signer) {
        config::assert_admin(admin);

        move_to(&config::getResourceSigner(), LockApdConfig {
            //level amount
            level1: 500 * DECIMAL_8,
            level2: 1500 * DECIMAL_8,
            level3: 4500 * DECIMAL_8,
            level4: 12000 * DECIMAL_8,
            level5: 30000 * DECIMAL_8,
            //lucky probs per 10000
            level1_prob: 553,
            level2_prob: 1653,
            level3_prob: 3212,
            level4_prob: 5243,
            level5_prob: 8753,
            //time period in hours locked before able to in whitelist lucky pool
            level1_hold: 10 * 24 * 3600,
            level2_hold: 8 * 24 * 3600,
            level3_hold: 6 * 24 * 3600,
            level4_hold: 0,
            level5_hold: 0,
            //time period in hours locked before able to unlock
            level1_lock: 5 * 24 * 3600,
            level2_lock: 5 * 24 * 3600,
            level3_lock: 5 * 24 * 3600,
            level4_lock: 5 * 24 * 3600,
            level5_lock: 5 * 24 * 3600,
            total_locked_apd: 0,
            total_locked_user: 0,
        });
    }

    public fun initWithZeroLockTime(admin: &signer) {
        config::assert_admin(admin);

        move_to(&config::getResourceSigner(), LockApdConfig {
            //level amount
            level1: 500 * DECIMAL_8,
            level2: 1500 * DECIMAL_8,
            level3: 4500 * DECIMAL_8,
            level4: 12000 * DECIMAL_8,
            level5: 30000 * DECIMAL_8,
            //lucky probs per 10000
            level1_prob: 553,
            level2_prob: 1653,
            level3_prob: 3212,
            level4_prob: 5243,
            level5_prob: 8753,
            //time period in hours locked before able to in whitelist lucky pool
            level1_hold: 10 * 24 * 3600,
            level2_hold: 8 * 24 * 3600,
            level3_hold: 6 * 24 * 3600,
            level4_hold: 0,
            level5_hold: 0,
            //time period in hours locked before able to unlock
            level1_lock: 0,
            level2_lock: 0,
            level3_lock: 0,
            level4_lock: 0,
            level5_lock: 0,
            total_locked_apd: 0,
            total_locked_user: 0,
        });
    }

    //@todo
    public fun lock(user: &signer, apdAmount: u64) acquires LockApdConfig, LockApdState {
        let userAddr = address_of(user);
        assert!(coin::balance<AptosPadCoin>(userAddr) > apdAmount, ERR_NOT_ENOUGH_APD);
        assert!(apdAmount >= MIN_LOCK_APD, ERR_INVALID_AMOUNT);

        let config = borrow_global_mut<LockApdConfig>(config::getResourceAddress());


        if (!exists<LockApdState>(userAddr)) {
            let (level, lottery_prob, hold_time, hold_expire_time, lock_time, lock_expire_time) = computeLevel(
                apdAmount,
                config
            );

            let state = LockApdState {
                level,
                apd_amount: apdAmount,
                lottery_prob,
                hold_time,
                hold_expire_time,
                lock_time,
                lock_expire_time,
                p_apd_available: apdAmount,
                lock_events: account::new_event_handle<LockEvent>(&config::getResourceSigner()),
                unlock_events: account::new_event_handle<UnlockEvent>(&config::getResourceSigner()),
                vote_events: account::new_event_handle<UseVotePowerEvent>(&config::getResourceSigner()),
            };

            transfer<AptosPadCoin>(user, config::getResourceAddress(), apdAmount);
            config.total_locked_user = config.total_locked_user + 1;
            event::emit_event<LockEvent>(&mut state.lock_events, LockEvent {
                amount: apdAmount,
                time: hold_time,
                user: userAddr,
                old_balance: 0,
                new_balance: apdAmount,
                old_level: 0,
                new_level: level
            });
            move_to(user, state);
        }
        else {
            let state = borrow_global_mut<LockApdState>(userAddr);
            let totalApdAmt = apdAmount + state.apd_amount;
            let (level, prob, hold, holdExpire, lock, lockExpire) = computeLevel(totalApdAmt, config);
            let oldApdAmt = state.apd_amount;
            let oldLvl = state.level;

            state.lottery_prob = prob;
            state.apd_amount = totalApdAmt;

            if (level > state.level) {
                state.level = level;
                state.hold_time = hold;
                state.hold_expire_time = holdExpire;
                state.lock_time = lock;
                state.lock_expire_time = lockExpire;
                state.p_apd_available = state.p_apd_available + apdAmount;
            };

            config.total_locked_apd = config.total_locked_apd + apdAmount;

            event::emit_event<LockEvent>(&mut state.lock_events, LockEvent {
                amount: apdAmount,
                time: hold,
                user: userAddr,
                old_balance: oldApdAmt,
                new_balance: totalApdAmt,
                old_level: oldLvl,
                new_level: level
            });
        };

        config.total_locked_apd = config.total_locked_apd + apdAmount;
    }

    //@todo
    public fun unlock(user: &signer) acquires LockApdState, LockApdConfig {
        let userAddr = address_of(user);
        assert!(exists<LockApdState>(userAddr), ERR_NOT_LOCKED_APD);
        let lockState = borrow_global_mut<LockApdState>(userAddr);
        let now = timestamp::now_seconds();

        //if level 0 or it's time to unlock!
        assert!(
            lockState.level == LEVEL_0 || lockState.lock_expire_time <= timestamp::now_seconds(),
            ERR_INVALID_UNLOCK
        );

        transfer<AptosPadCoin>(&config::getResourceSigner(), userAddr, lockState.apd_amount);

        let globalState = borrow_global_mut<LockApdConfig>(config::getResourceAddress());
        globalState.total_locked_user = globalState.total_locked_user - 1;
        globalState.total_locked_apd = globalState.total_locked_apd - lockState.apd_amount;

        event::emit_event<UnlockEvent>(&mut lockState.unlock_events, UnlockEvent {
            time: now,
            user: userAddr,
            old_balance: lockState.apd_amount,
            new_balance: 0,
            old_level: lockState.level,
            new_level: 0
        });

        lockState.apd_amount = 0;
        lockState.level = 0;
        lockState.p_apd_available = 0;


    }

    public fun getLockApd(user: address): (u64, u64, u64, u64, u64, u64, u64, u64) acquires LockApdState {
        assert!(exists<LockApdState>(user), ERR_NOT_LOCKED_APD);
        let state = borrow_global<LockApdState>(user);

        (
            state.level,
            state.apd_amount,
            state.lottery_prob,
            state.hold_time,
            state.hold_expire_time,
            state.lock_time,
            state.lock_expire_time,
            state.p_apd_available
        )
    }


    //@todo optimize computation ?
    fun computeLevel(apdAmount: u64, config: &LockApdConfig): (u64, u64, u64, u64, u64, u64) {
        let now = timestamp::now_seconds();
        if (apdAmount < config.level1) {
            (LEVEL_0, 0, now, 0, now, 0)
        }
        else if ((apdAmount >= config.level1 && apdAmount < config.level2)) {
            (LEVEL_1, config.level1_prob, now, now + config.level1_hold, now, now + config.level1_lock)
        }

        else if ((apdAmount >= config.level2 && apdAmount < config.level3)) {
            (LEVEL_2, config.level2_prob, now, now + config.level2_hold, now, now + config.level2_lock)
        }

        else if ((apdAmount >= config.level3 && apdAmount < config.level4)) {
            (LEVEL_3, config.level3_prob, now, now + config.level3_hold, now, now + config.level3_lock)
        }

        else if ((apdAmount >= config.level4 && apdAmount < config.level5)) {
            (LEVEL_4, config.level4_prob, now, now + config.level4_hold, now, now + config.level4_lock)
        }

        else {
            (LEVEL_5, config.level5_prob, now, now + config.level5_hold, now, now + config.level5_lock)
        }
    }


    public fun useVotePower(user: &signer, pApdAmount: u64): (u64, address, u64) acquires LockApdState {
        let userAddr = address_of(user);
        assert!(exists<LockApdState>(userAddr), ERR_NOT_LOCKED_APD);

        let state = borrow_global_mut<LockApdState>(userAddr);

        assert!(state.level > 0, ERR_NOT_LOCKED_APD);
        let time = timestamp::now_seconds();

        assert!(pApdAmount <= state.p_apd_available, ERR_NOT_ENOUGH_PAPD);

        state.p_apd_available = state.p_apd_available - pApdAmount;

        event::emit_event<UseVotePowerEvent>(&mut state.vote_events, UseVotePowerEvent {
            time,
            user: userAddr,
            amount: pApdAmount
        });
        (pApdAmount, userAddr, time)
    }

}
