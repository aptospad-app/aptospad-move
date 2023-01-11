//#[test_only]
//module aptospad::test_config {
//    use aptospad::config;
//    use aptospad::account_helpers;
//    use aptos_framework::coin;
//    use aptospad_coin::aptospad_coin::AptosPadCoin;
//    use aptos_framework::aptos_coin::AptosCoin;
//
//    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework, wl1 = @test_wl1, wl2 = @test_wl2)]
//    fun testConfig(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer){
//        let padFundingAmt = (100000000 * 1000);
//        let fundingAmt = (100000000 * 100);
//        account_helpers::initializeEnv(aptosFramework);
//        account_helpers::initializeAccount(aptosFramework, padAdmin, padFundingAmt);
//        account_helpers::initializeAccount(aptosFramework, wl1, 0);
//        account_helpers::initializeAccount(aptosFramework, wl2, 0);
//        account_helpers::initializeAptosPadCoin(padAdmin, fundingAmt);
//
//        assert!(config::getSwapState() == 1, 100000);
//        assert!(!config::isEmergency(), 100000);
//
//        let hardCap = 10^8 * 10000 * 2;
//        let softCap = 10^8 * 10000;
//        let rate = 1000;
//        config::setApttSwapConfig(padAdmin, softCap,hardCap, true, rate, false);
//        assert!(config::getSwapConfigHardCap() == hardCap, 100000);
//        assert!(config::getSwapConfigSoftCap() == softCap, 100000);
//        assert!(config::getSwapConfigAptToApttRate() == rate, 100000);
//
//        assert!(coin::balance<AptosCoin>(config::getResourceAddress()) == fundingAmt, 100000);
//        assert!(coin::is_coin_initialized<AptosPadCoin>(), 100000);
//    }
//}
