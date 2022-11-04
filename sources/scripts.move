/// The current module contains pre-deplopyed scripts for AptosPad.
module aptospad::scripts {
    use std::string;
    use std::string::String;
    use std::vector;

    ///add this coin type as an option to buy AptosPad, ex: USDT, BTC, ETH
    public entry fun addBuyAptosPadCoinOption<CoinType>(account: &signer, rate: u64){

    }

    /// buy aptos by CoinType
    public entry fun buyAptosPad<CoinType>(account: &signer, amount: u64){

    }

    /// hold aptos pad to get ticket
    public entry fun holdAptosPad(account: &signer, amount: u64){

    }

    /// unhold aptos pad to release AptosPad
    public entry fun unholdAptosPad(account: &signer, amount: u64){

    }

    ///estimate ticket
    public entry fun estimateTicket(account: address): u64 {
        0u64
    }

    ///to add credit
    public entry fun addCredit(account: &signer, credit: address){

    }


    /// register fundraising project
    public entry fun registerProject<ProjectCoin>(projectName: String, supply: u64, softcap: u64, hardcap: u64, startime: u64, vestingtime: u64){

    }

    /// register coin option for swaping project coin
    public entry fun registerSwapCoinOption<ProjectCoin, OptionCoin>(adminAccount: &signer){

    }

    /// list all vector by id
    public entry fun listProject<ProjectCoin>(): vector<u64> {
        vector::empty<u64>()
    }

    /// detail one project
    public entry fun getProject<ProjectCoin>(): (String, u64, u64, u64, u64, u64) {
        (string::utf8(b"9Swap"), 0, 0, 0, 0, 0)
    }

    /// user hit this api to buy coin of projects
    /// note that: coin will be locked
    public entry fun swapProjectCoin<ProjectCoin, StableCoin>(account: &signer){

    }

    ///start vesting/distribute locked swap coin!
    ///call it from external or internal
    public entry fun vestingProject<ProjectCoin>(projectId: u64){

    }

    ///start vesting/distribute locked swap coin!
   ///call it from external or internal
    public entry fun refundProject<ProjectCoin>(account: &signer){

    }

}
