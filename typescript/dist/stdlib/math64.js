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
exports.App = exports.loadParsers = exports.pow_ = exports.min_ = exports.max_ = exports.average_ = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "math64";
function average_(a, b, $c) {
    let temp$1;
    if (($.copy(a)).lt($.copy(b))) {
        temp$1 = ($.copy(a)).add((($.copy(b)).sub($.copy(a))).div((0, move_to_ts_1.u64)("2")));
    }
    else {
        temp$1 = ($.copy(b)).add((($.copy(a)).sub($.copy(b))).div((0, move_to_ts_1.u64)("2")));
    }
    return temp$1;
}
exports.average_ = average_;
function max_(a, b, $c) {
    let temp$1;
    if (($.copy(a)).ge($.copy(b))) {
        temp$1 = $.copy(a);
    }
    else {
        temp$1 = $.copy(b);
    }
    return temp$1;
}
exports.max_ = max_;
function min_(a, b, $c) {
    let temp$1;
    if (($.copy(a)).lt($.copy(b))) {
        temp$1 = $.copy(a);
    }
    else {
        temp$1 = $.copy(b);
    }
    return temp$1;
}
exports.min_ = min_;
function pow_(n, e, $c) {
    let temp$1, p;
    if (($.copy(e)).eq(((0, move_to_ts_1.u64)("0")))) {
        temp$1 = (0, move_to_ts_1.u64)("1");
    }
    else {
        p = (0, move_to_ts_1.u64)("1");
        while (($.copy(e)).gt((0, move_to_ts_1.u64)("1"))) {
            {
                if ((($.copy(e)).mod((0, move_to_ts_1.u64)("2"))).eq(((0, move_to_ts_1.u64)("1")))) {
                    p = ($.copy(p)).mul($.copy(n));
                }
                else {
                }
                e = ($.copy(e)).div((0, move_to_ts_1.u64)("2"));
                n = ($.copy(n)).mul($.copy(n));
            }
        }
        temp$1 = ($.copy(p)).mul($.copy(n));
    }
    return temp$1;
}
exports.pow_ = pow_;
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
//# sourceMappingURL=math64.js.map