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
exports.App = exports.loadParsers = exports.sip_hash_from_value_ = exports.sip_hash_ = exports.keccak256_ = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const aptos_1 = require("aptos");
const Bcs = __importStar(require("./bcs"));
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "aptos_hash";
function keccak256_(bytes, $c) {
    return $.aptos_std_aptos_hash_keccak256(bytes, $c);
}
exports.keccak256_ = keccak256_;
function sip_hash_(bytes, $c) {
    return $.aptos_std_aptos_hash_sip_hash(bytes, $c);
}
exports.sip_hash_ = sip_hash_;
function sip_hash_from_value_(v, $c, $p) {
    let bytes;
    bytes = Bcs.to_bytes_(v, $c, [$p[0]]);
    return sip_hash_($.copy(bytes), $c);
}
exports.sip_hash_from_value_ = sip_hash_from_value_;
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
//# sourceMappingURL=aptos_hash.js.map