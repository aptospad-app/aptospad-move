module aptospad::lock_apd {
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::{AptosCoin};
    use aptospad::config;
    use aptospad::iterable_table::IterableTable;
    use aptospad::iterable_table;
    use std::option;
    use aptospad_coin::aptospad_coin::AptosPadCoin;
    use aptos_std::math64;
    use std::vector;
    use aptos_framework::event::EventHandle;
    use aptos_framework::account;
    use aptos_framework::event;
    use std::signer::address_of;


    struct LockApdConfig has key {
        credit_unit: u64,
        gold: u64,
        silver: u64,
        bronze: u64,
        plantinum: u64,
        lock_range1: u64,
        lock_range2: u64,
        lock_range3: u64,
    }

    //@todo
    public fun config(admin: &signer,
                      credit_unit: u64,
                      gold: u64,
                      silver: u64,
                      bronze: u64,
                      plantinum: u64,
                      lock_range1: u64,
                      lock_range2: u64,
                      lock_range3: u64) {

    }

    //@todo
    public fun lock(user: &signer, amount: u64) {

    }

    //@todo
    public fun unlock(user: &signer) {

    }

    //@todo
    public fun computeCredit(user: &signer) {

    }
}
