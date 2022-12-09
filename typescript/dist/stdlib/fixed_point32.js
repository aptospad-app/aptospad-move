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
exports.App = exports.loadParsers = exports.multiply_u64_ = exports.is_zero_ = exports.get_raw_value_ = exports.divide_u64_ = exports.create_from_raw_value_ = exports.create_from_rational_ = exports.FixedPoint32 = exports.MAX_U64 = exports.ERATIO_OUT_OF_RANGE = exports.EMULTIPLICATION = exports.EDIVISION_BY_ZERO = exports.EDIVISION = exports.EDENOMINATOR = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
exports.packageName = "MoveStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "fixed_point32";
exports.EDENOMINATOR = (0, move_to_ts_1.u64)("65537");
exports.EDIVISION = (0, move_to_ts_1.u64)("131074");
exports.EDIVISION_BY_ZERO = (0, move_to_ts_1.u64)("65540");
exports.EMULTIPLICATION = (0, move_to_ts_1.u64)("131075");
exports.ERATIO_OUT_OF_RANGE = (0, move_to_ts_1.u64)("131077");
exports.MAX_U64 = (0, move_to_ts_1.u128)("18446744073709551615");
class FixedPoint32 {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.value = proto['value'];
    }
    static FixedPoint32Parser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, FixedPoint32);
        return new FixedPoint32(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "FixedPoint32", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.FixedPoint32 = FixedPoint32;
FixedPoint32.moduleAddress = exports.moduleAddress;
FixedPoint32.moduleName = exports.moduleName;
FixedPoint32.structName = "FixedPoint32";
FixedPoint32.typeParameters = [];
FixedPoint32.fields = [
    { name: "value", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function create_from_rational_(numerator, denominator, $c) {
    let temp$1, quotient, scaled_denominator, scaled_numerator;
    scaled_numerator = ((0, move_to_ts_1.u128)($.copy(numerator))).shl((0, move_to_ts_1.u8)("64"));
    scaled_denominator = ((0, move_to_ts_1.u128)($.copy(denominator))).shl((0, move_to_ts_1.u8)("32"));
    if (!($.copy(scaled_denominator)).neq((0, move_to_ts_1.u128)("0"))) {
        throw $.abortCode($.copy(exports.EDENOMINATOR));
    }
    quotient = ($.copy(scaled_numerator)).div($.copy(scaled_denominator));
    if (($.copy(quotient)).neq((0, move_to_ts_1.u128)("0"))) {
        temp$1 = true;
    }
    else {
        temp$1 = ($.copy(numerator)).eq(((0, move_to_ts_1.u64)("0")));
    }
    if (!temp$1) {
        throw $.abortCode($.copy(exports.ERATIO_OUT_OF_RANGE));
    }
    if (!($.copy(quotient)).le($.copy(exports.MAX_U64))) {
        throw $.abortCode($.copy(exports.ERATIO_OUT_OF_RANGE));
    }
    return new FixedPoint32({ value: (0, move_to_ts_1.u64)($.copy(quotient)) }, new move_to_ts_2.SimpleStructTag(FixedPoint32));
}
exports.create_from_rational_ = create_from_rational_;
function create_from_raw_value_(value, $c) {
    return new FixedPoint32({ value: $.copy(value) }, new move_to_ts_2.SimpleStructTag(FixedPoint32));
}
exports.create_from_raw_value_ = create_from_raw_value_;
function divide_u64_(val, divisor, $c) {
    let quotient, scaled_value;
    if (!($.copy(divisor.value)).neq((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode($.copy(exports.EDIVISION_BY_ZERO));
    }
    scaled_value = ((0, move_to_ts_1.u128)($.copy(val))).shl((0, move_to_ts_1.u8)("32"));
    quotient = ($.copy(scaled_value)).div((0, move_to_ts_1.u128)($.copy(divisor.value)));
    if (!($.copy(quotient)).le($.copy(exports.MAX_U64))) {
        throw $.abortCode($.copy(exports.EDIVISION));
    }
    return (0, move_to_ts_1.u64)($.copy(quotient));
}
exports.divide_u64_ = divide_u64_;
function get_raw_value_(num, $c) {
    return $.copy(num.value);
}
exports.get_raw_value_ = get_raw_value_;
function is_zero_(num, $c) {
    return ($.copy(num.value)).eq(((0, move_to_ts_1.u64)("0")));
}
exports.is_zero_ = is_zero_;
function multiply_u64_(val, multiplier, $c) {
    let product, unscaled_product;
    unscaled_product = ((0, move_to_ts_1.u128)($.copy(val))).mul((0, move_to_ts_1.u128)($.copy(multiplier.value)));
    product = ($.copy(unscaled_product)).shr((0, move_to_ts_1.u8)("32"));
    if (!($.copy(product)).le($.copy(exports.MAX_U64))) {
        throw $.abortCode($.copy(exports.EMULTIPLICATION));
    }
    return (0, move_to_ts_1.u64)($.copy(product));
}
exports.multiply_u64_ = multiply_u64_;
function loadParsers(repo) {
    repo.addParser("0x1::fixed_point32::FixedPoint32", FixedPoint32.FixedPoint32Parser);
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
    get FixedPoint32() { return FixedPoint32; }
}
exports.App = App;
//# sourceMappingURL=fixed_point32.js.map