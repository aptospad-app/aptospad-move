/// The current module contains pre-deplopyed scripts for AptosPad.
module aptospad::scripts {
    use aptospad::config;
    use aptospad::aptospad_swap;
    use aptospad::lock_apd;

    #[cmd]
    public entry fun initializeAptosPad(admin: &signer, preFundAptos: u64){
        config::initializeAptosPad(admin, preFundAptos);
        aptospad_swap::initialize(admin);
    }

    #[cmd]
    public entry fun setEmergency(admin: &signer, emergency: bool){
        config::setEmergency(admin, emergency);
    }

    #[cmd]
    public entry fun setBypassWhiteList(admin: &signer, bypass: bool){
        config::setBypassWhitelist(admin, bypass);
    }

    #[cmd]
    public entry fun setApttSwapConfig(admin: &signer, softCap: u64, hardCap: u64, enableRefund: bool, aptToApttRate: u64, bypassWhitelist: bool){
        config::setApttSwapConfigV2(admin, softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist);
    }

    #[cmd]
    public entry fun resetSeason(admin: &signer){
        aptospad_swap::resetSeason(admin);
    }

    #[cmd]
    public entry fun whiteListSeason(admin: &signer){
        aptospad_swap::whiteListSeason(admin);
    }

    #[cmd]
    public entry fun launchPadSeason(admin: &signer){
        aptospad_swap::launchPadSeason(admin);
    }

    #[cmd]
    public entry fun distributeSeason(admin: &signer){
        aptospad_swap::distributeSeasonV3(admin);
    }

    #[cmd]
    public entry fun paycoinAndRefund(admin: &signer){
        aptospad_swap::paycoinAndRefund(admin);
    }

    #[cmd]
    public entry fun bidAptosPad(user: &signer, amount: u64){
        aptospad_swap::bidAptosPadV5(user, amount);
    }

    #[cmd]
    public entry fun addWhiteList(admin: &signer, user: address, cap: u64){
        aptospad_swap::addWhiteList(admin, user, cap);
    }

    #[cmd]
    public entry fun withdrawAptos(admin: &signer, debit: address, amount: u64){
        aptospad_swap::withdrawAptos(admin, debit, amount);
    }

    #[cmd]
    public entry fun withdrawAptosPad(admin: &signer, debit: address, amount: u64){
        aptospad_swap::withdrawAptosPad(admin, debit, amount);
    }


    #[cmd]
    public entry fun lockAptosPad(user: &signer, amount: u64) {
        lock_apd::lock(user, amount);
    }

    #[cmd]
    public entry fun unlockAptosPad(user: &signer) {
        lock_apd::unlock(user);
    }

    #[cmd]
    public entry fun lockAptosPadConfig(admin: &signer,
                                        level1: u64,
                                        level1_prob: u64,
                                        level1_hold: u64,
                                        level1_lock: u64) {
        lock_apd::config(admin, level1, level1_prob, level1_hold, level1_lock);
    }

    #[cmd]
    public entry fun useVotePower(user: &signer, amount: u64) {
        lock_apd::useVotePower(user, amount);
    }
}
