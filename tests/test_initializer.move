#[test_only]
module aptospad::test_initializer {
    use aptos_framework::account;
    use std::signer;
    use aptospad::account_helpers;

    #[test(padAdmin = @aptospad_admin, resourceAcc = @aptospad_resource)]
    fun testCreateResourceAccount(padAdmin: &signer, resourceAcc: address) {
        let (resourceSigner, _resourceSignerCap) = account::create_resource_account(padAdmin, b"aptospad_account_seed");
        assert!(signer::address_of(&resourceSigner) == resourceAcc, 1002);
    }

    #[test(padAdmin = @aptospad_admin, aptosFramework = @aptos_framework)]
    fun testInitialize(padAdmin: &signer, aptosFramework: &signer){
        let padSupply1M = 100000000*1000000;
        let fund1M =  100000000*1000000;
        let fund500k =  100000000*500000;

        account_helpers::initializeEnv(aptosFramework);
        account_helpers::initializeAccount(aptosFramework, padAdmin, fund1M);
        account_helpers::initializeAptosPadCoin(padAdmin, padSupply1M, fund500k);
    }
}
