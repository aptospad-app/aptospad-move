/// The current module contains pre-deplopyed scripts for AptosPad.
module aptospad::scripts {
    use aptospad::config;
    use aptospad::aptospad_swap;

    ///initialize with admin role
    public entry fun initializeAptosPad(aptospadAdmin: &signer, totalSupply: u64, fundingResource: u64){
        config::initializeWithResourceAccount(aptospadAdmin, totalSupply, fundingResource);
    }

    /// set emergency
    public entry fun setEmergency(aptospadAdmin: &signer, emergency: bool){
        config::setEmergency(aptospadAdmin, emergency);
    }

    /// update swap config
    public entry fun setApttSwapConfig(aptospadAdmin: &signer, softCap: u64, hardCap: u64, enableRefund: bool, aptToApttRate: u64){
        config::setApttSwapConfig(aptospadAdmin, softCap, hardCap, enableRefund, aptToApttRate);
    }

    /// reset seasion
    public entry fun resetSeason(account: &signer){
        aptospad_swap::resetSeason(account);
    }

    /// whitelist season
    public fun whiteListSeason(account: &signer){
        aptospad_swap::whiteListSeason(account);
    }

    /// launchpad season
    public fun launchPadSeason(account: &signer){
        aptospad_swap::launchPadSeason(account);
    }

    /// to distribute seasion
    public fun distributeSeason(account: &signer){
        aptospad_swap::distributeSeason(account);
    }

    /// bid APTT
    public entry fun bidAptosPad(account: &signer, amount: u64){
        aptospad_swap::bidAptosPad(account, amount);
    }

    /// add whitelist
    public entry fun addWhiteList(aptospadAdmin: &signer, account: address, cap: u64){
        aptospad_swap::addWhiteList(aptospadAdmin, account, cap);
    }
}
