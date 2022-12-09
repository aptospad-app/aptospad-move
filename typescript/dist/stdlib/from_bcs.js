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
exports.App = exports.loadParsers = exports.to_u8_ = exports.to_u64_ = exports.to_u128_ = exports.to_string_ = exports.to_bool_ = exports.to_address_ = exports.from_bytes_ = exports.EINVALID_UTF8 = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const String = __importStar(require("./string"));
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "from_bcs";
exports.EINVALID_UTF8 = (0, move_to_ts_1.u64)("1");
function from_bytes_(bytes, $c, $p) {
    return $.aptos_std_from_bcs_from_bytes(bytes, $c, [$p[0]]);
}
exports.from_bytes_ = from_bytes_;
function to_address_(v, $c) {
    return from_bytes_($.copy(v), $c, [move_to_ts_2.AtomicTypeTag.Address]);
}
exports.to_address_ = to_address_;
function to_bool_(v, $c) {
    return from_bytes_($.copy(v), $c, [move_to_ts_2.AtomicTypeTag.Bool]);
}
exports.to_bool_ = to_bool_;
function to_string_(v, $c) {
    let s;
    s = from_bytes_($.copy(v), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]);
    if (!String.internal_check_utf8_(String.bytes_(s, $c), $c)) {
        throw $.abortCode($.copy(exports.EINVALID_UTF8));
    }
    return $.copy(s);
}
exports.to_string_ = to_string_;
function to_u128_(v, $c) {
    return from_bytes_($.copy(v), $c, [move_to_ts_2.AtomicTypeTag.U128]);
}
exports.to_u128_ = to_u128_;
function to_u64_(v, $c) {
    return from_bytes_($.copy(v), $c, [move_to_ts_2.AtomicTypeTag.U64]);
}
exports.to_u64_ = to_u64_;
function to_u8_(v, $c) {
    return from_bytes_($.copy(v), $c, [move_to_ts_2.AtomicTypeTag.U8]);
}
exports.to_u8_ = to_u8_;
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
//# sourceMappingURL=from_bcs.js.map