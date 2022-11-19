/// The current module contains pre-deplopyed scripts for AptosPad.
module aptospad::scripts {
    use aptospad::config;
    use aptospad::aptospad_swap;

    ///initialize with admin role
    public entry fun initializeAptosPad(aptospadAdmin: &signer, preFundAptos: u64){
        config::initializeAptosPad(aptospadAdmin, preFundAptos);
        aptospad_swap::initialize(aptospadAdmin);
    }

    /// set emergency
    public entry fun setEmergency(aptospadAdmin: &signer, emergency: bool){
        config::setEmergency(aptospadAdmin, emergency);
    }

    /// set bypass whitelist
    public entry fun setBypassWhiteList(aptospadAdmin: &signer, bypass: bool){
        config::setBypassWhitelist(aptospadAdmin, bypass);
    }

    /// update swap config
    public entry fun setApttSwapConfig(aptospadAdmin: &signer, softCap: u64, hardCap: u64, enableRefund: bool, aptToApttRate: u64, bypassWhitelist: bool){
        config::setApttSwapConfig(aptospadAdmin, softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist);
    }

    /// reset seasion
    public entry fun resetSeason(account: &signer){
        aptospad_swap::resetSeason(account);
    }

    /// whitelist season
    public entry fun whiteListSeason(account: &signer){
        aptospad_swap::whiteListSeason(account);
    }

    /// launchpad season
    public entry fun launchPadSeason(account: &signer){
        aptospad_swap::launchPadSeason(account);
    }

    /// to distribute seasion
    public entry fun distributeSeason(account: &signer){
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

    /// withdraw aptos from resource to ...
    public entry fun withdrawAptos(admin: &signer, debit: address, amount: u64){
        aptospad_swap::withdrawAptos(admin, debit, amount);
    }

    /// withdraw aptosPad from resource to ...
    public entry fun withdrawAptosPad(admin: &signer, debit: address, amount: u64){
        aptospad_swap::withdrawAptosPad(admin, debit, amount);
    }
}
