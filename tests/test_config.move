#[test_only]
module aptospad::test_config {
    use aptospad::config;
    use aptospad::helpers;
    use aptos_framework::coin;
    use aptospad::aptospad_coin::AptosPadCoin;
    use aptos_framework::aptos_coin::AptosCoin;

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework)]
    fun testConfig(padAdmin: &signer, aptosFramework: &signer){
        let atppSupply = 100000000u64;
        let padFundingAmt = (100000000 * 1000);
        let fundingAmt = (100000000 * 100);
        helpers::initializeAptos(aptosFramework, padAdmin, padFundingAmt);

        config::initializeWithResourceAccount(padAdmin, atppSupply, fundingAmt);
        assert!(config::getSwapState() == 1, 100000);
        assert!(!config::isEmergency(), 100000);

        let hardCap = 10^8 * 10000 * 2;
        let softCap = 10^8 * 10000;
        let rate = 1000;
        config::setApttSwapConfig(padAdmin, softCap,hardCap, true, rate);
        assert!(config::getSwapConfigHardCap() == hardCap, 100000);
        assert!(config::getSwapConfigSoftCap() == softCap, 100000);
        assert!(config::getSwapConfigAptToApttRate() == rate, 100000);

        assert!(coin::balance<AptosCoin>(config::getResourceAddress()) == fundingAmt, 100000);
        assert!(coin::balance<AptosPadCoin>(config::getResourceAddress()) == atppSupply, 100000);
    }
}
