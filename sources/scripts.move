/// The current module contains pre-deplopyed scripts for AptosPad.
module aptospad::scripts {
    use aptospad::config;
    use aptospad::aptospad_swap;

    ///initialize with admin role
    #[cmd]
    public entry fun initializeAptosPad(admin: &signer, preFundAptos: u64){
        config::initializeAptosPad(admin, preFundAptos);
        aptospad_swap::initialize(admin);
    }

    /// set emergency
    #[cmd]
    public entry fun setEmergency(admin: &signer, emergency: bool){
        config::setEmergency(admin, emergency);
    }

    /// set bypass whitelist
    #[cmd]
    public entry fun setBypassWhiteList(admin: &signer, bypass: bool){
        config::setBypassWhitelist(admin, bypass);
    }

    /// update swap config
    #[cmd]
    public entry fun setApttSwapConfig(admin: &signer, softCap: u64, hardCap: u64, enableRefund: bool, aptToApttRate: u64, bypassWhitelist: bool){
        config::setApttSwapConfigV2(admin, softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist);
    }

    /// reset seasion
    #[cmd]
    public entry fun resetSeason(admin: &signer){
        aptospad_swap::resetSeason(admin);
    }

    /// whitelist season
    #[cmd]
    public entry fun whiteListSeason(admin: &signer){
        aptospad_swap::whiteListSeason(admin);
    }

    /// launchpad season
    #[cmd]
    public entry fun launchPadSeason(admin: &signer){
        aptospad_swap::launchPadSeason(admin);
    }

    /// to distribute seasion
    #[cmd]
    public entry fun distributeSeason(admin: &signer){
        aptospad_swap::distributeSeasonV3(admin);
    }

    /// pay coin & refund
    #[cmd]
    public entry fun paycoinAndRefund(admin: &signer){
        aptospad_swap::paycoinAndRefund(admin);
    }

    /// bid APTT
    #[cmd]
    public entry fun bidAptosPad(user: &signer, amount: u64){
        aptospad_swap::bidAptosPadV5(user, amount);
    }

    /// add whitelist
    #[cmd]
    public entry fun addWhiteList(admin: &signer, user: address, cap: u64){
        aptospad_swap::addWhiteList(admin, user, cap);
    }

    /// withdraw aptos from resource to ...
    #[cmd]
    public entry fun withdrawAptos(admin: &signer, debit: address, amount: u64){
        aptospad_swap::withdrawAptos(admin, debit, amount);
    }

    /// withdraw aptosPad from resource to ...
    #[cmd]
    public entry fun withdrawAptosPad(admin: &signer, debit: address, amount: u64){
        aptospad_swap::withdrawAptosPad(admin, debit, amount);
    }
}
