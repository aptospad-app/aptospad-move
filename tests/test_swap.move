#[test_only]
module aptospad::test_swap {
    use aptospad::helpers;
    use aptospad::config;
    use aptospad::aptospad_swap;
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;
    use aptospad::aptospad_coin::AptosPadCoin;

    const STATE_INIT: u8 = 1;
    const STATE_WL: u8 = 2;
    const STATE_LAUNCHPAD: u8 = 3;
    const STATE_DISTRIBUTE: u8 = 4;
    const STATE_ENDED: u8 = 5;

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework, wl1 = @test_wl1, wl2 = @test_wl2)]
    fun testSwapMidCap(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer) {
        let atppSupply = 100000000 * 1000000;
        let padFundingAmt = (100000000 * 1000);
        let fundingAmt = (100000000 * 100);

        let wl1Fund = 100000000*10000;
        let wl2Fund = 100000000*30000;

        helpers::initializeAptos(aptosFramework, padAdmin, padFundingAmt, wl1, wl1Fund, wl2, wl2Fund);
        config::initializeWithResourceAccount(padAdmin, atppSupply, fundingAmt);
        config::setApttSwapConfig(padAdmin, 100000000*10000, 100000000*20000, false, 10);

        aptospad_swap::initialize(padAdmin);
        assert!(aptospad_swap::getSwapTotalBid() == 0, 100000);
        assert!(config::getSwapState() == STATE_INIT, 100000);
        aptospad_swap::whiteListSeason(padAdmin);
        assert!(config::getSwapState() == STATE_WL, 100000);

        let defaultCap = 1000000*30000;
        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl1), defaultCap);
        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl2), defaultCap);
        let (cap, bid, distributed) = aptospad_swap::getWhiteList(signer::address_of(wl1));
        assert!(cap == defaultCap, 100000);
        assert!(bid == 0, 100000);
        assert!(distributed == 0, 100000);

        aptospad_swap::launchPadSeason(padAdmin);

        let wl1bid = 8000*100000000;
        let wl2bid = 8000*100000000;
        aptospad_swap::bidAptosPad(wl1, wl1bid);
        aptospad_swap::bidAptosPad(wl2, wl2bid);

        assert!(aptospad_swap::getSwapTotalBid() == (wl1bid + wl2bid), 100000);
        assert!(coin::balance<AptosCoin>(signer::address_of(wl1)) <= wl1Fund - wl1bid, 100000);
        assert!(coin::balance<AptosCoin>(signer::address_of(wl2)) <= wl2Fund - wl2bid, 100000);
        assert!(!aptospad_swap::maybeRefund(), 100000);
        aptospad_swap::distributeSeason(padAdmin);

        //check coin released amt
        assert!(coin::balance<AptosPadCoin>(signer::address_of(wl1))  == wl1bid * config::getSwapConfigAptToApttRate(), 100000);
        assert!(coin::balance<AptosPadCoin>(signer::address_of(wl2))  == wl2bid * config::getSwapConfigAptToApttRate(), 100000);


    }

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework, wl1 = @test_wl1, wl2 = @test_wl2)]
    fun testHardSwap(padAdmin: &signer, aptosFramework: &signer, wl1: &signer, wl2: &signer) {
        let atppSupply = 100000000 * 1000000;
        let padFundingAmt = (100000000 * 1000);
        let fundingAmt = (100000000 * 100);

        let wl1Fund = 100000000*10000;
        let wl2Fund = 100000000*30000;

        let softCap = 100000000*10000;
        let hardCap = 100000000*20000;

        helpers::initializeAptos(aptosFramework, padAdmin, padFundingAmt, wl1, wl1Fund, wl2, wl2Fund);
        config::initializeWithResourceAccount(padAdmin, atppSupply, fundingAmt);
        config::setApttSwapConfig(padAdmin, softCap, hardCap , false, 10);

        aptospad_swap::initialize(padAdmin);
        assert!(aptospad_swap::getSwapTotalBid() == 0, 100000);
        assert!(config::getSwapState() == STATE_INIT, 100000);
        aptospad_swap::whiteListSeason(padAdmin);
        assert!(config::getSwapState() == STATE_WL, 100000);

        let defaultCap = 1000000*10000;
        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl1), defaultCap);
        aptospad_swap::addWhiteList(padAdmin, signer::address_of(wl2), defaultCap);
        let (cap, bid, distributed) = aptospad_swap::getWhiteList(signer::address_of(wl1));
        assert!(cap == defaultCap, 100000);
        assert!(bid == 0, 100000);
        assert!(distributed == 0, 100000);

        aptospad_swap::launchPadSeason(padAdmin);

        let wl1bid = 7000*100000000;
        let wl2bid = 20000*100000000;
        aptospad_swap::bidAptosPad(wl1, wl1bid);
        aptospad_swap::bidAptosPad(wl2, wl2bid);

        assert!(aptospad_swap::getSwapTotalBid() == (wl1bid + wl2bid), 100000);
        assert!(coin::balance<AptosCoin>(signer::address_of(wl1)) <= wl1Fund - wl1bid, 100000);
        assert!(coin::balance<AptosCoin>(signer::address_of(wl2)) <= wl2Fund - wl2bid, 100000);
        assert!(!aptospad_swap::maybeRefund(), 100000);
        aptospad_swap::distributeSeason(padAdmin);

        //check coin released amt
        assert!(coin::balance<AptosPadCoin>(signer::address_of(wl1))  == wl1bid * config::getSwapConfigAptToApttRate(), 100000);
//        assert!(coin::balance<AptosPadCoin>(signer::address_of(wl2))  == (defaultCap) * config::getSwapConfigAptToApttRate(), 100000);
    }
}
