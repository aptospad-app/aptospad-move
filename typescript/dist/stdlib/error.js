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
exports.App = exports.loadParsers = exports.unavailable_ = exports.unauthenticated_ = exports.resource_exhausted_ = exports.permission_denied_ = exports.out_of_range_ = exports.not_implemented_ = exports.not_found_ = exports.invalid_state_ = exports.invalid_argument_ = exports.internal_ = exports.canonical_ = exports.already_exists_ = exports.aborted_ = exports.UNAVAILABLE = exports.UNAUTHENTICATED = exports.RESOURCE_EXHAUSTED = exports.PERMISSION_DENIED = exports.OUT_OF_RANGE = exports.NOT_IMPLEMENTED = exports.NOT_FOUND = exports.INVALID_STATE = exports.INVALID_ARGUMENT = exports.INTERNAL = exports.CANCELLED = exports.ALREADY_EXISTS = exports.ABORTED = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
exports.packageName = "MoveStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "error";
exports.ABORTED = (0, move_to_ts_1.u64)("7");
exports.ALREADY_EXISTS = (0, move_to_ts_1.u64)("8");
exports.CANCELLED = (0, move_to_ts_1.u64)("10");
exports.INTERNAL = (0, move_to_ts_1.u64)("11");
exports.INVALID_ARGUMENT = (0, move_to_ts_1.u64)("1");
exports.INVALID_STATE = (0, move_to_ts_1.u64)("3");
exports.NOT_FOUND = (0, move_to_ts_1.u64)("6");
exports.NOT_IMPLEMENTED = (0, move_to_ts_1.u64)("12");
exports.OUT_OF_RANGE = (0, move_to_ts_1.u64)("2");
exports.PERMISSION_DENIED = (0, move_to_ts_1.u64)("5");
exports.RESOURCE_EXHAUSTED = (0, move_to_ts_1.u64)("9");
exports.UNAUTHENTICATED = (0, move_to_ts_1.u64)("4");
exports.UNAVAILABLE = (0, move_to_ts_1.u64)("13");
function aborted_(r, $c) {
    return canonical_($.copy(exports.ABORTED), $.copy(r), $c);
}
exports.aborted_ = aborted_;
function already_exists_(r, $c) {
    return canonical_($.copy(exports.ALREADY_EXISTS), $.copy(r), $c);
}
exports.already_exists_ = already_exists_;
function canonical_(category, reason, $c) {
    return (($.copy(category)).shl((0, move_to_ts_1.u8)("16"))).add($.copy(reason));
}
exports.canonical_ = canonical_;
function internal_(r, $c) {
    return canonical_($.copy(exports.INTERNAL), $.copy(r), $c);
}
exports.internal_ = internal_;
function invalid_argument_(r, $c) {
    return canonical_($.copy(exports.INVALID_ARGUMENT), $.copy(r), $c);
}
exports.invalid_argument_ = invalid_argument_;
function invalid_state_(r, $c) {
    return canonical_($.copy(exports.INVALID_STATE), $.copy(r), $c);
}
exports.invalid_state_ = invalid_state_;
function not_found_(r, $c) {
    return canonical_($.copy(exports.NOT_FOUND), $.copy(r), $c);
}
exports.not_found_ = not_found_;
function not_implemented_(r, $c) {
    return canonical_($.copy(exports.NOT_IMPLEMENTED), $.copy(r), $c);
}
exports.not_implemented_ = not_implemented_;
function out_of_range_(r, $c) {
    return canonical_($.copy(exports.OUT_OF_RANGE), $.copy(r), $c);
}
exports.out_of_range_ = out_of_range_;
function permission_denied_(r, $c) {
    return canonical_($.copy(exports.PERMISSION_DENIED), $.copy(r), $c);
}
exports.permission_denied_ = permission_denied_;
function resource_exhausted_(r, $c) {
    return canonical_($.copy(exports.RESOURCE_EXHAUSTED), $.copy(r), $c);
}
exports.resource_exhausted_ = resource_exhausted_;
function unauthenticated_(r, $c) {
    return canonical_($.copy(exports.UNAUTHENTICATED), $.copy(r), $c);
}
exports.unauthenticated_ = unauthenticated_;
function unavailable_(r, $c) {
    return canonical_($.copy(exports.UNAVAILABLE), $.copy(r), $c);
}
exports.unavailable_ = unavailable_;
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
//# sourceMappingURL=error.js.map