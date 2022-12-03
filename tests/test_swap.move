#[test_only]
module aptospad::test_swap {
    use aptospad::account_helpers;
    use aptospad::config;
    use aptospad::aptospad_swap;
    use std::signer;

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
    const TOKEN_RATE_10: u64 = 10;
    const FEEMAX: u64 = 100000000;

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework, wl1 = @test_wl1, wl2 = @test_wl2)]
    fun testSwapSoftCapRefundDisabled(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer) {
        account_helpers::initializeEnv(aptosFramework);
        account_helpers::initializeAccount(aptosFramework, padAdmin, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl1, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl2, CAP_500K);
        account_helpers::initializeAptosPadCoin(padAdmin, CAP_10K);

        config::setApttSwapConfig(padAdmin, CAP_100K, CAP_200K, false, TOKEN_RATE_10, false);

        aptospad_swap::initialize(padAdmin);
        aptospad_swap::whiteListSeason(padAdmin);

        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl1), CAP_50K);
        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl2), CAP_50K);

        aptospad_swap::launchPadSeason(padAdmin);

        aptospad_swap::bidAptosPadV5(wl1, CAP_40K);
        aptospad_swap::bidAptosPadV5(wl2, CAP_40K);

        aptospad_swap::distributeSeasonV3(padAdmin);
        aptospad_swap::paycoinAndRefund(padAdmin);

        assert!(account_helpers::balanceAptosPad(signer::address_of(wl1))  == CAP_40K * TOKEN_RATE_10, 10001);
        assert!(account_helpers::balanceAptosPad(signer::address_of(wl2)) == CAP_40K * TOKEN_RATE_10, 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl1)) >= (CAP_500K - CAP_40K - FEEMAX) , 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl2)) >= (CAP_500K - CAP_40K - FEEMAX) , 10001);
    }

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework, wl1 = @test_wl1, wl2 = @test_wl2)]
    fun testSwapSoftCapRefundEnabled(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer) {
        account_helpers::initializeEnv(aptosFramework);
        account_helpers::initializeAccount(aptosFramework, padAdmin, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl1, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl2, CAP_500K);
        account_helpers::initializeAptosPadCoin(padAdmin, CAP_10K);

        config::setApttSwapConfig(padAdmin, CAP_100K, CAP_200K, true, TOKEN_RATE_10, false);

        aptospad_swap::initialize(padAdmin);
        aptospad_swap::whiteListSeason(padAdmin);

        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl1), CAP_50K);
        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl2), CAP_50K);

        aptospad_swap::launchPadSeason(padAdmin);

        aptospad_swap::bidAptosPadV5(wl1, CAP_40K);
        aptospad_swap::bidAptosPadV5(wl2, CAP_40K);

        aptospad_swap::distributeSeasonV3(padAdmin);
        aptospad_swap::paycoinAndRefund(padAdmin);

        assert!(account_helpers::balanceAptosPad(signer::address_of(wl1))  == 0, 10001);
        assert!(account_helpers::balanceAptosPad(signer::address_of(wl2)) == 0, 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl1)) >= (CAP_500K - FEEMAX) , 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl2)) >= (CAP_500K - FEEMAX) , 10001);
    }

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework, wl1 = @test_wl1, wl2 = @test_wl2)]
    fun testSwapMidCap0(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer) {
        account_helpers::initializeEnv(aptosFramework);
        account_helpers::initializeAccount(aptosFramework, padAdmin, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl1, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl2, CAP_500K);
        account_helpers::initializeAptosPadCoin(padAdmin, CAP_10K);

        config::setApttSwapConfig(padAdmin, CAP_100K, CAP_200K, true, TOKEN_RATE_10, false);

        aptospad_swap::initialize(padAdmin);
        aptospad_swap::whiteListSeason(padAdmin);

        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl1), CAP_50K);
        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl2), CAP_50K);

        aptospad_swap::launchPadSeason(padAdmin);

        aptospad_swap::bidAptosPadV5(wl1, CAP_50K);
        aptospad_swap::bidAptosPadV5(wl2, CAP_50K);

        aptospad_swap::distributeSeasonV3(padAdmin);
        aptospad_swap::paycoinAndRefund(padAdmin);

        assert!(account_helpers::balanceAptosPad(signer::address_of(wl1))  == CAP_50K * TOKEN_RATE_10, 10001);
        assert!(account_helpers::balanceAptosPad(signer::address_of(wl2)) ==  CAP_50K * TOKEN_RATE_10, 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl1)) >= (CAP_500K - CAP_50K - FEEMAX) , 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl2)) >= (CAP_500K - CAP_50K - FEEMAX) , 10001);
    }

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework, wl1 = @test_wl1, wl2 = @test_wl2)]
    fun testSwapMidCap(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer) {
        account_helpers::initializeEnv(aptosFramework);
        account_helpers::initializeAccount(aptosFramework, padAdmin, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl1, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl2, CAP_500K);
        account_helpers::initializeAptosPadCoin(padAdmin, CAP_10K);

        config::setApttSwapConfig(padAdmin, CAP_100K, CAP_200K, true, TOKEN_RATE_10, false);

        aptospad_swap::initialize(padAdmin);
        aptospad_swap::whiteListSeason(padAdmin);

        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl1), CAP_50K);
        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl2), CAP_50K);

        aptospad_swap::launchPadSeason(padAdmin);

        aptospad_swap::bidAptosPadV5(wl1, CAP_80K);
        aptospad_swap::bidAptosPadV5(wl2, CAP_80K);

        aptospad_swap::distributeSeasonV3(padAdmin);
        aptospad_swap::paycoinAndRefund(padAdmin);

        assert!(account_helpers::balanceAptosPad(signer::address_of(wl1))  == CAP_80K * TOKEN_RATE_10, 10001);
        assert!(account_helpers::balanceAptosPad(signer::address_of(wl2)) ==  CAP_80K * TOKEN_RATE_10, 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl1)) >= (CAP_500K - CAP_80K - FEEMAX) , 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl2)) >= (CAP_500K - CAP_80K - FEEMAX) , 10001);
    }

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework, wl1 = @test_wl1, wl2 = @test_wl2)]
    fun testSwapMidCap2(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer) {
        account_helpers::initializeEnv(aptosFramework);
        account_helpers::initializeAccount(aptosFramework, padAdmin, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl1, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl2, CAP_500K);
        account_helpers::initializeAptosPadCoin(padAdmin, CAP_10K);

        config::setApttSwapConfig(padAdmin, CAP_100K, CAP_200K, true, TOKEN_RATE_10, false);

        aptospad_swap::initialize(padAdmin);
        aptospad_swap::whiteListSeason(padAdmin);

        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl1), CAP_50K);
        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl2), CAP_50K);

        aptospad_swap::launchPadSeason(padAdmin);

        aptospad_swap::bidAptosPadV5(wl1, CAP_100K);
        aptospad_swap::bidAptosPadV5(wl2, CAP_100K);

        aptospad_swap::distributeSeasonV3(padAdmin);
        aptospad_swap::paycoinAndRefund(padAdmin);

        assert!(account_helpers::balanceAptosPad(signer::address_of(wl1))  == CAP_100K * TOKEN_RATE_10, 10001);
        assert!(account_helpers::balanceAptosPad(signer::address_of(wl2)) ==  CAP_100K * TOKEN_RATE_10, 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl1)) >= (CAP_500K - CAP_100K - FEEMAX) , 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl2)) >= (CAP_500K - CAP_100K - FEEMAX) , 10001);
    }

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework, wl1 = @test_wl1, wl2 = @test_wl2)]
    fun testSwapHardCap(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer) {
        account_helpers::initializeEnv(aptosFramework);
        account_helpers::initializeAccount(aptosFramework, padAdmin, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl1, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl2, CAP_500K);
        account_helpers::initializeAptosPadCoin(padAdmin, CAP_10K);

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

        assert!(account_helpers::balanceAptosPad(signer::address_of(wl1))  == (CAP_100K + CAP_50K) * TOKEN_RATE_10, 10001);
        assert!(account_helpers::balanceAptosPad(signer::address_of(wl2))  == (CAP_50K) * TOKEN_RATE_10, 10001);

        assert!(account_helpers::balanceAptos(config::getResourceAddress())  >= (CAP_10K + CAP_200K - FEEMAX), 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl2))  >= (CAP_500K - CAP_50K - FEEMAX), 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl1))  >= (CAP_500K - CAP_50K - CAP_100K - FEEMAX), 10001);
    }

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework, wl1 = @test_wl1, wl2 = @test_wl2)]
    fun testSwapHardCap2(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer) {
        account_helpers::initializeEnv(aptosFramework);
        account_helpers::initializeAccount(aptosFramework, padAdmin, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl1, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl2, CAP_500K);
        account_helpers::initializeAptosPadCoin(padAdmin, CAP_10K);

        config::setApttSwapConfig(padAdmin, CAP_100K, CAP_200K, true, TOKEN_RATE_10, false);

        aptospad_swap::initialize(padAdmin);
        aptospad_swap::whiteListSeason(padAdmin);

        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl1), CAP_50K);
        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl2), CAP_50K);

        aptospad_swap::launchPadSeason(padAdmin);

        aptospad_swap::bidAptosPadV5(wl1, CAP_200K);
        aptospad_swap::bidAptosPadV5(wl2, CAP_50K);

        aptospad_swap::distributeSeasonV3(padAdmin);
        aptospad_swap::paycoinAndRefund(padAdmin);

        assert!(account_helpers::balanceAptosPad(signer::address_of(wl2))  == (CAP_50K) * TOKEN_RATE_10, 10001);
        assert!(account_helpers::balanceAptosPad(signer::address_of(wl1))  == (CAP_50K + CAP_100K) * TOKEN_RATE_10, 10001);

        assert!(account_helpers::balanceAptos(config::getResourceAddress())  >= (CAP_10K + CAP_200K - FEEMAX), 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl1))  >= (CAP_500K - CAP_50K - CAP_100K - FEEMAX), 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl2))  >= (CAP_500K - CAP_50K - FEEMAX), 10001);
    }

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework, wl1 = @test_wl1, wl2 = @test_wl2)]
    fun testBypassWhitelist(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer) {
        account_helpers::initializeEnv(aptosFramework);
        account_helpers::initializeAccount(aptosFramework, padAdmin, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl1, CAP_500K);
        account_helpers::initializeAccount(aptosFramework, wl2, CAP_500K);
        account_helpers::initializeAptosPadCoin(padAdmin, CAP_10K);

//        config::setApttSwapConfig(padAdmin, CAP_100K, CAP_200K, true, TOKEN_RATE_10, false);
        config::setApttSwapConfig(padAdmin, CAP_100K, CAP_200K, true, TOKEN_RATE_10, true);

        aptospad_swap::initialize(padAdmin);
        aptospad_swap::whiteListSeason(padAdmin);

        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl2), CAP_50K);

        aptospad_swap::launchPadSeason(padAdmin);

        aptospad_swap::bidAptosPadV5(wl1, CAP_200K);
        aptospad_swap::bidAptosPadV5(wl2, CAP_50K);

        aptospad_swap::distributeSeasonV3(padAdmin);
        aptospad_swap::paycoinAndRefund(padAdmin);

        assert!(account_helpers::balanceAptosPad(signer::address_of(wl2))  == (CAP_50K) * TOKEN_RATE_10, 10001);
        assert!(account_helpers::balanceAptosPad(signer::address_of(wl1))  == (CAP_50K + CAP_100K) * TOKEN_RATE_10, 10001);

        assert!(account_helpers::balanceAptos(config::getResourceAddress())  >= (CAP_10K + CAP_200K - FEEMAX), 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl1))  >= (CAP_500K - CAP_50K - CAP_100K - FEEMAX), 10001);
        assert!(account_helpers::balanceAptos(signer::address_of(wl2))  >= (CAP_500K - CAP_50K - FEEMAX), 10001);
    }
}
