"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readConfig = void 0;
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const commander_1 = require("commander");
const fs = __importStar(require("fs"));
const yaml = __importStar(require("yaml"));
const Aptospad = __importStar(require("./aptospad"));
const readConfig = (program) => {
    const { config, profile } = program.opts();
    const ymlContent = fs.readFileSync(config, { encoding: "utf-8" });
    const result = yaml.parse(ymlContent);
    //console.log(result);
    if (!result.profiles) {
        throw new Error("Expect a profiles to be present in yaml config");
    }
    if (!result.profiles[profile]) {
        throw new Error(`Expect a ${profile} profile to be present in yaml config`);
    }
    const url = result.profiles[profile].rest_url;
    const privateKeyStr = result.profiles[profile].private_key;
    if (!url) {
        throw new Error(`Expect rest_url to be present in ${profile} profile`);
    }
    if (!privateKeyStr) {
        throw new Error(`Expect private_key to be present in ${profile} profile`);
    }
    const privateKey = new aptos_1.HexString(privateKeyStr);
    const client = new aptos_1.AptosClient(result.profiles[profile].rest_url);
    const account = new aptos_1.AptosAccount(privateKey.toUint8Array());
    console.log(`Using address ${account.address().hex()}`);
    return { client, account };
};
exports.readConfig = readConfig;
const program = new commander_1.Command();
program
    .name('yarn cli')
    .description('Move TS CLI generated by move-to-ts')
    .requiredOption('-c, --config <path>', 'path to your aptos config.yml (generated with "aptos init")')
    .option('-p, --profile <PROFILE>', 'aptos config profile to use', 'default');
const scripts_addWhiteList = (user, cap, max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const user_ = new aptos_1.HexString(user);
    const cap_ = (0, move_to_ts_1.u64)(cap);
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_addWhiteList(user_, cap_);
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:addWhiteList")
    .description("")
    .argument('<user>')
    .argument('<cap>')
    .argument('[max_gas]', '', '10000')
    .action(scripts_addWhiteList);
const scripts_bidAptosPad = (amount, max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const amount_ = (0, move_to_ts_1.u64)(amount);
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_bidAptosPad(amount_);
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:bidAptosPad")
    .description("")
    .argument('<amount>')
    .argument('[max_gas]', '', '10000')
    .action(scripts_bidAptosPad);
const scripts_distributeSeason = (max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_distributeSeason();
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:distributeSeason")
    .description("")
    .argument('[max_gas]', '', '10000')
    .action(scripts_distributeSeason);
const scripts_initializeAptosPad = (preFundAptos, max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const preFundAptos_ = (0, move_to_ts_1.u64)(preFundAptos);
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_initializeAptosPad(preFundAptos_);
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:initializeAptosPad")
    .description("")
    .argument('<preFundAptos>')
    .argument('[max_gas]', '', '10000')
    .action(scripts_initializeAptosPad);
const scripts_launchPadSeason = (max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_launchPadSeason();
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:launchPadSeason")
    .description("")
    .argument('[max_gas]', '', '10000')
    .action(scripts_launchPadSeason);
const scripts_paycoinAndRefund = (max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_paycoinAndRefund();
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:paycoinAndRefund")
    .description("")
    .argument('[max_gas]', '', '10000')
    .action(scripts_paycoinAndRefund);
const scripts_resetSeason = (max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_resetSeason();
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:resetSeason")
    .description("")
    .argument('[max_gas]', '', '10000')
    .action(scripts_resetSeason);
const scripts_setApttSwapConfig = (softCap, hardCap, enableRefund, aptToApttRate, bypassWhitelist, max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const softCap_ = (0, move_to_ts_1.u64)(softCap);
    const hardCap_ = (0, move_to_ts_1.u64)(hardCap);
    const enableRefund_ = enableRefund == 'true';
    const aptToApttRate_ = (0, move_to_ts_1.u64)(aptToApttRate);
    const bypassWhitelist_ = bypassWhitelist == 'true';
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_setApttSwapConfig(softCap_, hardCap_, enableRefund_, aptToApttRate_, bypassWhitelist_);
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:setApttSwapConfig")
    .description("")
    .argument('<softCap>')
    .argument('<hardCap>')
    .argument('<enableRefund>')
    .argument('<aptToApttRate>')
    .argument('<bypassWhitelist>')
    .argument('[max_gas]', '', '10000')
    .action(scripts_setApttSwapConfig);
const scripts_setBypassWhiteList = (bypass, max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const bypass_ = bypass == 'true';
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_setBypassWhiteList(bypass_);
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:setBypassWhiteList")
    .description("")
    .argument('<bypass>')
    .argument('[max_gas]', '', '10000')
    .action(scripts_setBypassWhiteList);
const scripts_setEmergency = (emergency, max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const emergency_ = emergency == 'true';
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_setEmergency(emergency_);
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:setEmergency")
    .description("")
    .argument('<emergency>')
    .argument('[max_gas]', '', '10000')
    .action(scripts_setEmergency);
const scripts_whiteListSeason = (max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_whiteListSeason();
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:whiteListSeason")
    .description("")
    .argument('[max_gas]', '', '10000')
    .action(scripts_whiteListSeason);
const scripts_withdrawAptos = (debit, amount, max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const debit_ = new aptos_1.HexString(debit);
    const amount_ = (0, move_to_ts_1.u64)(amount);
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_withdrawAptos(debit_, amount_);
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:withdrawAptos")
    .description("")
    .argument('<debit>')
    .argument('<amount>')
    .argument('[max_gas]', '', '10000')
    .action(scripts_withdrawAptos);
const scripts_withdrawAptosPad = (debit, amount, max_gas) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, account } = (0, exports.readConfig)(program);
    const debit_ = new aptos_1.HexString(debit);
    const amount_ = (0, move_to_ts_1.u64)(amount);
    const max_gas_ = parseInt(max_gas);
    const payload = Aptospad.Scripts.buildPayload_withdrawAptosPad(debit_, amount_);
    yield (0, move_to_ts_1.sendPayloadTxAndLog)(client, account, payload, { maxGasAmount: max_gas_ });
});
program
    .command("scripts:withdrawAptosPad")
    .description("")
    .argument('<debit>')
    .argument('<amount>')
    .argument('[max_gas]', '', '10000')
    .action(scripts_withdrawAptosPad);
program.parse();
//# sourceMappingURL=cli.js.map