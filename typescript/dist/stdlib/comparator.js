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
exports.App = exports.loadParsers = exports.is_smaller_than_ = exports.is_greater_than_ = exports.is_equal_ = exports.compare_u8_vector_ = exports.compare_ = exports.Result = exports.SMALLER = exports.GREATER = exports.EQUAL = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Bcs = __importStar(require("./bcs"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "comparator";
exports.EQUAL = (0, move_to_ts_1.u8)("0");
exports.GREATER = (0, move_to_ts_1.u8)("2");
exports.SMALLER = (0, move_to_ts_1.u8)("1");
class Result {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.inner = proto['inner'];
    }
    static ResultParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Result);
        return new Result(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Result", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Result = Result;
Result.moduleAddress = exports.moduleAddress;
Result.moduleName = exports.moduleName;
Result.structName = "Result";
Result.typeParameters = [];
Result.fields = [
    { name: "inner", typeTag: move_to_ts_2.AtomicTypeTag.U8 }
];
function compare_(left, right, $c, $p) {
    let left_bytes, right_bytes;
    left_bytes = Bcs.to_bytes_(left, $c, [$p[0]]);
    right_bytes = Bcs.to_bytes_(right, $c, [$p[0]]);
    return compare_u8_vector_($.copy(left_bytes), $.copy(right_bytes), $c);
}
exports.compare_ = compare_;
function compare_u8_vector_(left, right, $c) {
    let temp$1, temp$2, temp$3, idx, left_byte, left_length, right_byte, right_length;
    left_length = Vector.length_(left, $c, [move_to_ts_2.AtomicTypeTag.U8]);
    right_length = Vector.length_(right, $c, [move_to_ts_2.AtomicTypeTag.U8]);
    idx = (0, move_to_ts_1.u64)("0");
    while (true) {
        {
            if (($.copy(idx)).lt($.copy(left_length))) {
                temp$1 = ($.copy(idx)).lt($.copy(right_length));
            }
            else {
                temp$1 = false;
            }
        }
        if (!(temp$1))
            break;
        {
            left_byte = $.copy(Vector.borrow_(left, $.copy(idx), $c, [move_to_ts_2.AtomicTypeTag.U8]));
            right_byte = $.copy(Vector.borrow_(right, $.copy(idx), $c, [move_to_ts_2.AtomicTypeTag.U8]));
            if (($.copy(left_byte)).lt($.copy(right_byte))) {
                return new Result({ inner: $.copy(exports.SMALLER) }, new move_to_ts_2.SimpleStructTag(Result));
            }
            else {
                if (($.copy(left_byte)).gt($.copy(right_byte))) {
                    return new Result({ inner: $.copy(exports.GREATER) }, new move_to_ts_2.SimpleStructTag(Result));
                }
                else {
                }
            }
            idx = ($.copy(idx)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    if (($.copy(left_length)).lt($.copy(right_length))) {
        temp$3 = new Result({ inner: $.copy(exports.SMALLER) }, new move_to_ts_2.SimpleStructTag(Result));
    }
    else {
        if (($.copy(left_length)).gt($.copy(right_length))) {
            temp$2 = new Result({ inner: $.copy(exports.GREATER) }, new move_to_ts_2.SimpleStructTag(Result));
        }
        else {
            temp$2 = new Result({ inner: $.copy(exports.EQUAL) }, new move_to_ts_2.SimpleStructTag(Result));
        }
        temp$3 = temp$2;
    }
    return temp$3;
}
exports.compare_u8_vector_ = compare_u8_vector_;
function is_equal_(result, $c) {
    return ($.copy(result.inner)).eq(($.copy(exports.EQUAL)));
}
exports.is_equal_ = is_equal_;
function is_greater_than_(result, $c) {
    return ($.copy(result.inner)).eq(($.copy(exports.GREATER)));
}
exports.is_greater_than_ = is_greater_than_;
function is_smaller_than_(result, $c) {
    return ($.copy(result.inner)).eq(($.copy(exports.SMALLER)));
}
exports.is_smaller_than_ = is_smaller_than_;
function loadParsers(repo) {
    repo.addParser("0x1::comparator::Result", Result.ResultParser);
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
    get Result() { return Result; }
}
exports.App = App;
//# sourceMappingURL=comparator.js.map