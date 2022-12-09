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
exports.App = exports.loadParsers = exports.script_prologue_ = exports.prologue_common_ = exports.multi_agent_script_prologue_ = exports.module_prologue_ = exports.initialize_ = exports.epilogue_ = exports.TransactionValidation = exports.PROLOGUE_ETRANSACTION_EXPIRED = exports.PROLOGUE_ESEQUENCE_NUMBER_TOO_OLD = exports.PROLOGUE_ESEQUENCE_NUMBER_TOO_NEW = exports.PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG = exports.PROLOGUE_ESECONDARY_KEYS_ADDRESSES_COUNT_MISMATCH = exports.PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY = exports.PROLOGUE_ECANT_PAY_GAS_DEPOSIT = exports.PROLOGUE_EBAD_CHAIN_ID = exports.PROLOGUE_EACCOUNT_DOES_NOT_EXIST = exports.MAX_U64 = exports.EOUT_OF_GAS = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Account = __importStar(require("./account"));
const Chain_id = __importStar(require("./chain_id"));
const Coin = __importStar(require("./coin"));
const Error = __importStar(require("./error"));
const Signer = __importStar(require("./signer"));
const System_addresses = __importStar(require("./system_addresses"));
const Timestamp = __importStar(require("./timestamp"));
const Transaction_fee = __importStar(require("./transaction_fee"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "transaction_validation";
exports.EOUT_OF_GAS = (0, move_to_ts_1.u64)("6");
exports.MAX_U64 = (0, move_to_ts_1.u128)("18446744073709551615");
exports.PROLOGUE_EACCOUNT_DOES_NOT_EXIST = (0, move_to_ts_1.u64)("1004");
exports.PROLOGUE_EBAD_CHAIN_ID = (0, move_to_ts_1.u64)("1007");
exports.PROLOGUE_ECANT_PAY_GAS_DEPOSIT = (0, move_to_ts_1.u64)("1005");
exports.PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY = (0, move_to_ts_1.u64)("1001");
exports.PROLOGUE_ESECONDARY_KEYS_ADDRESSES_COUNT_MISMATCH = (0, move_to_ts_1.u64)("1009");
exports.PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG = (0, move_to_ts_1.u64)("1008");
exports.PROLOGUE_ESEQUENCE_NUMBER_TOO_NEW = (0, move_to_ts_1.u64)("1003");
exports.PROLOGUE_ESEQUENCE_NUMBER_TOO_OLD = (0, move_to_ts_1.u64)("1002");
exports.PROLOGUE_ETRANSACTION_EXPIRED = (0, move_to_ts_1.u64)("1006");
class TransactionValidation {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.module_addr = proto['module_addr'];
        this.module_name = proto['module_name'];
        this.script_prologue_name = proto['script_prologue_name'];
        this.module_prologue_name = proto['module_prologue_name'];
        this.multi_agent_prologue_name = proto['multi_agent_prologue_name'];
        this.user_epilogue_name = proto['user_epilogue_name'];
    }
    static TransactionValidationParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, TransactionValidation);
        return new TransactionValidation(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, TransactionValidation, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, TransactionValidation, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "TransactionValidation", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.TransactionValidation = TransactionValidation;
TransactionValidation.moduleAddress = exports.moduleAddress;
TransactionValidation.moduleName = exports.moduleName;
TransactionValidation.structName = "TransactionValidation";
TransactionValidation.typeParameters = [];
TransactionValidation.fields = [
    { name: "module_addr", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "module_name", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "script_prologue_name", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "module_prologue_name", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "multi_agent_prologue_name", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "user_epilogue_name", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
function epilogue_(account, _txn_sequence_number, txn_gas_price, txn_max_gas_units, gas_units_remaining, $c) {
    let addr, gas_used, transaction_fee_amount;
    if (!($.copy(txn_max_gas_units)).ge($.copy(gas_units_remaining))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EOUT_OF_GAS), $c));
    }
    gas_used = ($.copy(txn_max_gas_units)).sub($.copy(gas_units_remaining));
    if (!(((0, move_to_ts_1.u128)($.copy(txn_gas_price))).mul((0, move_to_ts_1.u128)($.copy(gas_used)))).le($.copy(exports.MAX_U64))) {
        throw $.abortCode(Error.out_of_range_($.copy(exports.EOUT_OF_GAS), $c));
    }
    transaction_fee_amount = ($.copy(txn_gas_price)).mul($.copy(gas_used));
    addr = Signer.address_of_(account, $c);
    if (!(Coin.balance_($.copy(addr), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])])).ge($.copy(transaction_fee_amount))) {
        throw $.abortCode(Error.out_of_range_($.copy(exports.PROLOGUE_ECANT_PAY_GAS_DEPOSIT), $c));
    }
    Transaction_fee.burn_fee_($.copy(addr), $.copy(transaction_fee_amount), $c);
    Account.increment_sequence_number_($.copy(addr), $c);
    return;
}
exports.epilogue_ = epilogue_;
function initialize_(aptos_framework, script_prologue_name, module_prologue_name, multi_agent_prologue_name, user_epilogue_name, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    $c.move_to(new move_to_ts_2.SimpleStructTag(TransactionValidation), aptos_framework, new TransactionValidation({ module_addr: new aptos_1.HexString("0x1"), module_name: [(0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("110"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("110"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("118"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("108"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("105"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("110")], script_prologue_name: $.copy(script_prologue_name), module_prologue_name: $.copy(module_prologue_name), multi_agent_prologue_name: $.copy(multi_agent_prologue_name), user_epilogue_name: $.copy(user_epilogue_name) }, new move_to_ts_2.SimpleStructTag(TransactionValidation)));
    return;
}
exports.initialize_ = initialize_;
function module_prologue_(sender, txn_sequence_number, txn_public_key, txn_gas_price, txn_max_gas_units, txn_expiration_time, chain_id, $c) {
    return prologue_common_(sender, $.copy(txn_sequence_number), $.copy(txn_public_key), $.copy(txn_gas_price), $.copy(txn_max_gas_units), $.copy(txn_expiration_time), $.copy(chain_id), $c);
}
exports.module_prologue_ = module_prologue_;
function multi_agent_script_prologue_(sender, txn_sequence_number, txn_sender_public_key, secondary_signer_addresses, secondary_signer_public_key_hashes, txn_gas_price, txn_max_gas_units, txn_expiration_time, chain_id, $c) {
    let i, num_secondary_signers, secondary_address, signer_public_key_hash;
    prologue_common_(sender, $.copy(txn_sequence_number), $.copy(txn_sender_public_key), $.copy(txn_gas_price), $.copy(txn_max_gas_units), $.copy(txn_expiration_time), $.copy(chain_id), $c);
    num_secondary_signers = Vector.length_(secondary_signer_addresses, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    if (!(Vector.length_(secondary_signer_public_key_hashes, $c, [new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)])).eq(($.copy(num_secondary_signers)))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.PROLOGUE_ESECONDARY_KEYS_ADDRESSES_COUNT_MISMATCH), $c));
    }
    i = (0, move_to_ts_1.u64)("0");
    while (($.copy(i)).lt($.copy(num_secondary_signers))) {
        {
            secondary_address = $.copy(Vector.borrow_(secondary_signer_addresses, $.copy(i), $c, [move_to_ts_2.AtomicTypeTag.Address]));
            if (!Account.exists_at_($.copy(secondary_address), $c)) {
                throw $.abortCode(Error.invalid_argument_($.copy(exports.PROLOGUE_EACCOUNT_DOES_NOT_EXIST), $c));
            }
            signer_public_key_hash = $.copy(Vector.borrow_(secondary_signer_public_key_hashes, $.copy(i), $c, [new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8)]));
            if (!$.veq($.copy(signer_public_key_hash), Account.get_authentication_key_($.copy(secondary_address), $c))) {
                throw $.abortCode(Error.invalid_argument_($.copy(exports.PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY), $c));
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.multi_agent_script_prologue_ = multi_agent_script_prologue_;
function prologue_common_(sender, txn_sequence_number, txn_authentication_key, txn_gas_price, txn_max_gas_units, txn_expiration_time, chain_id, $c) {
    let account_sequence_number, balance, max_transaction_fee, transaction_sender;
    if (!(Timestamp.now_seconds_($c)).lt($.copy(txn_expiration_time))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.PROLOGUE_ETRANSACTION_EXPIRED), $c));
    }
    if (!(Chain_id.get_($c)).eq(($.copy(chain_id)))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.PROLOGUE_EBAD_CHAIN_ID), $c));
    }
    transaction_sender = Signer.address_of_(sender, $c);
    if (!Account.exists_at_($.copy(transaction_sender), $c)) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.PROLOGUE_EACCOUNT_DOES_NOT_EXIST), $c));
    }
    if (!$.veq($.copy(txn_authentication_key), Account.get_authentication_key_($.copy(transaction_sender), $c))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY), $c));
    }
    if (!((0, move_to_ts_1.u128)($.copy(txn_sequence_number))).lt($.copy(exports.MAX_U64))) {
        throw $.abortCode(Error.out_of_range_($.copy(exports.PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG), $c));
    }
    account_sequence_number = Account.get_sequence_number_($.copy(transaction_sender), $c);
    if (!($.copy(txn_sequence_number)).ge($.copy(account_sequence_number))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.PROLOGUE_ESEQUENCE_NUMBER_TOO_OLD), $c));
    }
    if (!($.copy(txn_sequence_number)).eq(($.copy(account_sequence_number)))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.PROLOGUE_ESEQUENCE_NUMBER_TOO_NEW), $c));
    }
    max_transaction_fee = ($.copy(txn_gas_price)).mul($.copy(txn_max_gas_units));
    if (!Coin.is_account_registered_($.copy(transaction_sender), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.PROLOGUE_ECANT_PAY_GAS_DEPOSIT), $c));
    }
    balance = Coin.balance_($.copy(transaction_sender), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    if (!($.copy(balance)).ge($.copy(max_transaction_fee))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.PROLOGUE_ECANT_PAY_GAS_DEPOSIT), $c));
    }
    return;
}
exports.prologue_common_ = prologue_common_;
function script_prologue_(sender, txn_sequence_number, txn_public_key, txn_gas_price, txn_max_gas_units, txn_expiration_time, chain_id, _script_hash, $c) {
    return prologue_common_(sender, $.copy(txn_sequence_number), $.copy(txn_public_key), $.copy(txn_gas_price), $.copy(txn_max_gas_units), $.copy(txn_expiration_time), $.copy(chain_id), $c);
}
exports.script_prologue_ = script_prologue_;
function loadParsers(repo) {
    repo.addParser("0x1::transaction_validation::TransactionValidation", TransactionValidation.TransactionValidationParser);
}
exports.loadParsers = loadParsers;
class App {
    constructor(client, repo, cache) {
        this.client = client;
        this.repo = repo;
        this.cache = cache;
    }
    get moduleAddress() { {
        return exports.moduleAddress;
    } }
    get moduleName() { {
        return exports.moduleName;
    } }
    get TransactionValidation() { return TransactionValidation; }
    loadTransactionValidation(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield TransactionValidation.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
}
exports.App = App;
//# sourceMappingURL=transaction_validation.js.map