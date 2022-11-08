#[test_only]
module aptospad::test_config {
    use aptospad::config;

    #[test(aptospadAdmin = @aptospad_admin)]
    fun testConfig(aptospadAdmin: &signer){
        config::initialize(aptospadAdmin);
        assert!(config::getSwapState() == 1, 4404);
    }
}
