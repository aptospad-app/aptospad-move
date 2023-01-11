#[test_only]
module aptospad::test_lock_apd {
    use aptospad::account_helpers;
    use aptospad::config;
    use aptospad::aptospad_swap;
    use std::signer;
    use aptospad::lock_apd;
    use std::signer::address_of;
    use aptos_std::debug;
    use aptos_framework::timestamp;

    ///State
    const STATE_INIT: u8 = 1;
    const STATE_WL: u8 = 2;
    const STATE_LAUNCHPAD: u8 = 3;
    const STATE_DISTRIBUTE: u8 = 4;
    const STATE_ENDED: u8 = 5;

    ///Test params
    const DEFAULT_CAP_1K: u64 = 100000000*1000;
    const SUPPLY_100M: u64 = 100000000 * 100000000;
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

    const LOCK_APD_50: u64 = 100000000*50;
    const LOCK_APD_100: u64 = 100000000*100;
    const LOCK_APD_500: u64 = 100000000*500;
    const LOCK_APD_1000: u64 = 100000000*1000;
    const LOCK_APD_1500: u64 = 100000000*1500;
    const LOCK_APD_4500: u64 = 100000000*4500;
    const LOCK_APD_15000: u64 = 100000000*15000;

    const TOKEN_RATE_10: u64 = 10;
    const FEEMAX: u64 = 100000000;



    fun initApd(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer){
        //init aptos
        account_helpers::initializeEnv(aptosFramework);
        account_helpers::initializeAccount(aptosFramework, padAdmin, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl1, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl2, CAP_500K);
        account_helpers::initializeAptosPadCoin(padAdmin, CAP_10K);

        timestamp::set_time_has_started_for_testing(aptosFramework);
        let now = 1673433657000000;
        timestamp::update_global_time_for_test(now);

        config::setApttSwapConfig(padAdmin, CAP_100K, CAP_200K, true, TOKEN_RATE_10, false);

        aptospad_swap::initialize(padAdmin);
        aptospad_swap::whiteListSeason(padAdmin);

        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl1), CAP_50K);
        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl2), CAP_50K);

        aptospad_swap::launchPadSeason(padAdmin);

        aptospad_swap::bidAptosPadV5(wl1, CAP_200K);
        aptospad_swap::bidAptosPadV5(wl2, CAP_200K);

        aptospad_swap::distributeSeasonV3(padAdmin);
        aptospad_swap::paycoinAndRefund(padAdmin);
    }

    fun debugLockState(user: address){
        let (
            level,
            apd_amount,
            lottery_prob,
            hold_time,
            hold_expire_time,
            lock_time,
            lock_expire_time
        ) = lock_apd::getLockApd(user);


        debug::print(&level);
        debug::print(&apd_amount);
        debug::print(&lottery_prob);
        debug::print(&hold_time);
        debug::print(&hold_expire_time);
        debug::print(&lock_time);
        debug::print(&lock_expire_time);
    }

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework, wl1 = @test_wl1, wl2 = @test_wl2)]
    fun testLockApd(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer) {
        //init apd
        initApd(padAdmin, aptosFramework, wl1, wl2);

        //init locks
        lock_apd::initDefault(padAdmin);

        {
            lock_apd::lock(wl1, LOCK_APD_500);

            let (
                level,
                apd_amount,
                _lottery_prob,
                _hold_time,
                _hold_expire_time,
                _lock_time,
                _lock_expire_time
            ) = lock_apd::getLockApd(address_of(wl1));

            assert!(level == 1, 6001);
            assert!(apd_amount == LOCK_APD_500, 6002);
        };

        {
            //lock more
            lock_apd::lock(wl1, LOCK_APD_500);
            debugLockState(address_of(wl1));

//            let (
//                level,
//                apd_amount,
//                _lottery_prob,
//                _hold_time,
//                _hold_expire_time,
//                _lock_time,
//                _lock_expire_time
//            ) = lock_apd::getLockApd(address_of(wl1));
//
//            assert!(level == 1, 6001);
//            assert!(apd_amount == LOCK_APD_1000, 6002);
        };

    }
}
