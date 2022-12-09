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
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.loadParsers = exports.is_vm_address_ = exports.is_vm_ = exports.is_reserved_address_ = exports.is_framework_reserved_address_ = exports.is_core_resource_address_ = exports.is_aptos_framework_address_ = exports.assert_vm_ = exports.assert_framework_reserved_address_ = exports.assert_core_resource_address_ = exports.assert_core_resource_ = exports.assert_aptos_framework_ = exports.EVM = exports.ENOT_FRAMEWORK_RESERVED_ADDRESS = exports.ENOT_CORE_RESOURCE_ADDRESS = exports.ENOT_APTOS_FRAMEWORK_ADDRESS = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Signer = __importStar(require("./signer"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "system_addresses";
exports.ENOT_APTOS_FRAMEWORK_ADDRESS = (0, move_to_ts_1.u64)("3");
exports.ENOT_CORE_RESOURCE_ADDRESS = (0, move_to_ts_1.u64)("1");
exports.ENOT_FRAMEWORK_RESERVED_ADDRESS = (0, move_to_ts_1.u64)("4");
exports.EVM = (0, move_to_ts_1.u64)("2");
function assert_aptos_framework_(account, $c) {
    if (!is_aptos_framework_address_(Signer.address_of_(account, $c), $c)) {
        throw $.abortCode(Error.permission_denied_($.copy(exports.ENOT_APTOS_FRAMEWORK_ADDRESS), $c));
    }
    return;
}
exports.assert_aptos_framework_ = assert_aptos_framework_;
function assert_core_resource_(account, $c) {
    return assert_core_resource_address_(Signer.address_of_(account, $c), $c);
}
exports.assert_core_resource_ = assert_core_resource_;
function assert_core_resource_address_(addr, $c) {
    if (!is_core_resource_address_($.copy(addr), $c)) {
        throw $.abortCode(Error.permission_denied_($.copy(exports.ENOT_CORE_RESOURCE_ADDRESS), $c));
    }
    return;
}
exports.assert_core_resource_address_ = assert_core_resource_address_;
function assert_framework_reserved_address_(account, $c) {
    if (!is_framework_reserved_address_(Signer.address_of_(account, $c), $c)) {
        throw $.abortCode(Error.permission_denied_($.copy(exports.ENOT_FRAMEWORK_RESERVED_ADDRESS), $c));
    }
    return;
}
exports.assert_framework_reserved_address_ = assert_framework_reserved_address_;
function assert_vm_(account, $c) {
    if (!is_vm_(account, $c)) {
        throw $.abortCode(Error.permission_denied_($.copy(exports.EVM), $c));
    }
    return;
}
exports.assert_vm_ = assert_vm_;
function is_aptos_framework_address_(addr, $c) {
    return (($.copy(addr)).hex() === (new aptos_1.HexString("0x1")).hex());
}
exports.is_aptos_framework_address_ = is_aptos_framework_address_;
function is_core_resource_address_(addr, $c) {
    return (($.copy(addr)).hex() === (new aptos_1.HexString("0xa550c18")).hex());
}
exports.is_core_resource_address_ = is_core_resource_address_;
function is_framework_reserved_address_(addr, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9;
    if (is_aptos_framework_address_($.copy(addr), $c)) {
        temp$1 = true;
    }
    else {
        temp$1 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x2")).hex());
    }
    if (temp$1) {
        temp$2 = true;
    }
    else {
        temp$2 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x3")).hex());
    }
    if (temp$2) {
        temp$3 = true;
    }
    else {
        temp$3 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x4")).hex());
    }
    if (temp$3) {
        temp$4 = true;
    }
    else {
        temp$4 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x5")).hex());
    }
    if (temp$4) {
        temp$5 = true;
    }
    else {
        temp$5 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x6")).hex());
    }
    if (temp$5) {
        temp$6 = true;
    }
    else {
        temp$6 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x7")).hex());
    }
    if (temp$6) {
        temp$7 = true;
    }
    else {
        temp$7 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x8")).hex());
    }
    if (temp$7) {
        temp$8 = true;
    }
    else {
        temp$8 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x9")).hex());
    }
    if (temp$8) {
        temp$9 = true;
    }
    else {
        temp$9 = (($.copy(addr)).hex() === (new aptos_1.HexString("0xa")).hex());
    }
    return temp$9;
}
exports.is_framework_reserved_address_ = is_framework_reserved_address_;
function is_reserved_address_(addr, $c) {
    let temp$1;
    if (is_aptos_framework_address_($.copy(addr), $c)) {
        temp$1 = true;
    }
    else {
        temp$1 = is_vm_address_($.copy(addr), $c);
    }
    return temp$1;
}
exports.is_reserved_address_ = is_reserved_address_;
function is_vm_(account, $c) {
    return is_vm_address_(Signer.address_of_(account, $c), $c);
}
exports.is_vm_ = is_vm_;
function is_vm_address_(addr, $c) {
    return (($.copy(addr)).hex() === (new aptos_1.HexString("0x0")).hex());
}
exports.is_vm_address_ = is_vm_address_;
function loadParsers(repo) {
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
}
exports.App = App;
//# sourceMappingURL=system_addresses.js.map