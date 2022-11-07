module aptospad::swap {
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::{AptosCoin};
    use aptospad::aptospad_coin::AptosPadCoin;
    use aptospad::config;
    use aptospad::config::CapsStore;

    const ERR_EMERGENCY: u64 = 405;

    /// @todo later: swap APT to APTT
    public fun swap(account: &signer, aptosAmount: u64)  {
        assert!(!config::isEmergency(), ERR_EMERGENCY);
        let (_hardCap, _softCap, _refund, aptToApttRate) = config::getSwapConfig();
        let apttAmount = aptosAmount * aptToApttRate;

        coin::transfer<AptosCoin>(account, config::getResourceAddress(), aptosAmount);
        config::mintAtppTo(account, apttAmount);
    }

    ///@todo later
    public fun addWhiteList(aptospadAdmin: &signer, account: address, cap: u64){

    }

    ///@todo later
    public fun distributeAtpp(aptospadAdmin: &signer){

    }
}
