/// The current module contains pre-deplopyed scripts for AptosPad.
module aptospad::scripts {
    use std::signer;
    use aptospad::config;
    use aptospad::swap;

    ///initialize with admin role
    public entry fun initializeAptosPad(aptospadAdmin: &signer){
        config::initialize(aptospadAdmin);
    }

    /// set emergency
    public entry fun setEmergency(aptospadAdmin: &signer, emergency: bool){
        config::setEmergency(aptospadAdmin, emergency);
    }

    /// update swap config
    public entry fun setApttSwapConfig(aptospadAdmin: &signer,  softCap: u64, hardCap: u64, refund: bool, aptToApttRate: u64){
        config::setApttSwapConfig(aptospadAdmin, softCap, hardCap, refund, aptToApttRate);
    }

    /// buy APTT
    public entry fun buyAptosPad<CoinType>(account: &signer, amount: u64){
        swap::buyAptt(account, amount);
    }

    /// add whitelist
    public entry fun addWhiteList(aptospadAdmin: &signer, account: address, cap: u64){
        swap::addWhiteList(aptospadAdmin, account, cap);
    }

    /// distribute ATPP
    public entry fun distributeAtpp(aptospadAdmin: &signer){
        swap::distributeAtpp(aptospadAdmin);
    }
}
