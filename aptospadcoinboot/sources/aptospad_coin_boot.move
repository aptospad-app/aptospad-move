/// this module deploy code to be used in main source code
module aptospad::aptospad_coin_boot {
    use std::signer;
    use aptos_framework::account::{Self, SignerCapability};
    use aptos_framework::code;

    const ERR_PERMISSIONS: u64 = 403;

    struct BootResourceSignerStore has key {
        resource_signer_cap: SignerCapability,
    }

    /// Deploy code & store tempo resource signer
    public entry fun initializeWithResourceAccount(aptospadAdmin: &signer, metadata: vector<u8>, byteCode: vector<u8>) {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        let (resourceSigner, resourceSignerCap) = account::create_resource_account(aptospadAdmin, b"aptospad_account_seed");

        code::publish_package_txn(&resourceSigner, metadata, vector[byteCode]);

        move_to(aptospadAdmin, BootResourceSignerStore {
            resource_signer_cap: resourceSignerCap,
        });
    }

    /// Destroys temporary storage for resource account signer capability and returns signer capability.
    /// It needs for initialization of aptospad.
    public fun retrieveResourceSignerCap(aptospadAdmin: &signer): SignerCapability acquires BootResourceSignerStore {
        assert!(signer::address_of(aptospadAdmin) == @aptospad_admin, ERR_PERMISSIONS);
        let BootResourceSignerStore { resource_signer_cap} = move_from<BootResourceSignerStore>(signer::address_of(aptospadAdmin));
        resource_signer_cap
    }
}
