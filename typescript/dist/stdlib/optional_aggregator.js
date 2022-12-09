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
exports.App = exports.loadParsers = exports.switch_to_integer_and_zero_out_ = exports.switch_to_aggregator_and_zero_out_ = exports.switch_and_zero_out_ = exports.switch_ = exports.sub_integer_ = exports.sub_ = exports.read_integer_ = exports.read_ = exports.new_integer_ = exports.new___ = exports.limit_ = exports.is_parallelizable_ = exports.destroy_optional_integer_ = exports.destroy_optional_aggregator_ = exports.destroy_integer_ = exports.destroy_ = exports.add_integer_ = exports.add_ = exports.OptionalAggregator = exports.Integer = exports.EAGGREGATOR_UNDERFLOW = exports.EAGGREGATOR_OVERFLOW = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Aggregator = __importStar(require("./aggregator"));
const Aggregator_factory = __importStar(require("./aggregator_factory"));
const Error = __importStar(require("./error"));
const Option = __importStar(require("./option"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "optional_aggregator";
exports.EAGGREGATOR_OVERFLOW = (0, move_to_ts_1.u64)("1");
exports.EAGGREGATOR_UNDERFLOW = (0, move_to_ts_1.u64)("2");
class Integer {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.value = proto['value'];
        this.limit = proto['limit'];
    }
    static IntegerParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Integer);
        return new Integer(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Integer", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Integer = Integer;
Integer.moduleAddress = exports.moduleAddress;
Integer.moduleName = exports.moduleName;
Integer.structName = "Integer";
Integer.typeParameters = [];
Integer.fields = [
    { name: "value", typeTag: move_to_ts_2.AtomicTypeTag.U128 },
    { name: "limit", typeTag: move_to_ts_2.AtomicTypeTag.U128 }
];
class OptionalAggregator {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.aggregator = proto['aggregator'];
        this.integer = proto['integer'];
    }
    static OptionalAggregatorParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, OptionalAggregator);
        return new OptionalAggregator(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "OptionalAggregator", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.aggregator.loadFullState(app);
            yield this.integer.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.OptionalAggregator = OptionalAggregator;
OptionalAggregator.moduleAddress = exports.moduleAddress;
OptionalAggregator.moduleName = exports.moduleName;
OptionalAggregator.structName = "OptionalAggregator";
OptionalAggregator.typeParameters = [];
OptionalAggregator.fields = [
    { name: "aggregator", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])]) },
    { name: "integer", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "optional_aggregator", "Integer", [])]) }
];
function add_(optional_aggregator, value, $c) {
    let aggregator, integer;
    if (Option.is_some_(optional_aggregator.aggregator, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])])) {
        aggregator = Option.borrow_mut_(optional_aggregator.aggregator, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])]);
        Aggregator.add_(aggregator, $.copy(value), $c);
    }
    else {
        integer = Option.borrow_mut_(optional_aggregator.integer, $c, [new move_to_ts_2.SimpleStructTag(Integer)]);
        add_integer_(integer, $.copy(value), $c);
    }
    return;
}
exports.add_ = add_;
function add_integer_(integer, value, $c) {
    if (!($.copy(value)).le(($.copy(integer.limit)).sub($.copy(integer.value)))) {
        throw $.abortCode(Error.out_of_range_($.copy(exports.EAGGREGATOR_OVERFLOW), $c));
    }
    integer.value = ($.copy(integer.value)).add($.copy(value));
    return;
}
exports.add_integer_ = add_integer_;
function destroy_(optional_aggregator, $c) {
    if (is_parallelizable_(optional_aggregator, $c)) {
        destroy_optional_aggregator_(optional_aggregator, $c);
    }
    else {
        destroy_optional_integer_(optional_aggregator, $c);
    }
    return;
}
exports.destroy_ = destroy_;
function destroy_integer_(integer, $c) {
    integer;
    return;
}
exports.destroy_integer_ = destroy_integer_;
function destroy_optional_aggregator_(optional_aggregator, $c) {
    let limit;
    let { aggregator: aggregator, integer: integer } = optional_aggregator;
    limit = Aggregator.limit_(Option.borrow_(aggregator, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])]), $c);
    Aggregator.destroy_(Option.destroy_some_(aggregator, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])]), $c);
    Option.destroy_none_(integer, $c, [new move_to_ts_2.SimpleStructTag(Integer)]);
    return $.copy(limit);
}
exports.destroy_optional_aggregator_ = destroy_optional_aggregator_;
function destroy_optional_integer_(optional_aggregator, $c) {
    let limit;
    let { aggregator: aggregator, integer: integer } = optional_aggregator;
    limit = limit_(Option.borrow_(integer, $c, [new move_to_ts_2.SimpleStructTag(Integer)]), $c);
    destroy_integer_(Option.destroy_some_(integer, $c, [new move_to_ts_2.SimpleStructTag(Integer)]), $c);
    Option.destroy_none_(aggregator, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])]);
    return $.copy(limit);
}
exports.destroy_optional_integer_ = destroy_optional_integer_;
function is_parallelizable_(optional_aggregator, $c) {
    return Option.is_some_(optional_aggregator.aggregator, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])]);
}
exports.is_parallelizable_ = is_parallelizable_;
function limit_(integer, $c) {
    return $.copy(integer.limit);
}
exports.limit_ = limit_;
function new___(limit, parallelizable, $c) {
    let temp$1;
    if (parallelizable) {
        temp$1 = new OptionalAggregator({ aggregator: Option.some_(Aggregator_factory.create_aggregator_internal_($.copy(limit), $c), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])]), integer: Option.none_($c, [new move_to_ts_2.SimpleStructTag(Integer)]) }, new move_to_ts_2.SimpleStructTag(OptionalAggregator));
    }
    else {
        temp$1 = new OptionalAggregator({ aggregator: Option.none_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])]), integer: Option.some_(new_integer_($.copy(limit), $c), $c, [new move_to_ts_2.SimpleStructTag(Integer)]) }, new move_to_ts_2.SimpleStructTag(OptionalAggregator));
    }
    return temp$1;
}
exports.new___ = new___;
function new_integer_(limit, $c) {
    return new Integer({ value: (0, move_to_ts_1.u128)("0"), limit: $.copy(limit) }, new move_to_ts_2.SimpleStructTag(Integer));
}
exports.new_integer_ = new_integer_;
function read_(optional_aggregator, $c) {
    let temp$1, aggregator, integer;
    if (Option.is_some_(optional_aggregator.aggregator, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])])) {
        aggregator = Option.borrow_(optional_aggregator.aggregator, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])]);
        temp$1 = Aggregator.read_(aggregator, $c);
    }
    else {
        integer = Option.borrow_(optional_aggregator.integer, $c, [new move_to_ts_2.SimpleStructTag(Integer)]);
        temp$1 = read_integer_(integer, $c);
    }
    return temp$1;
}
exports.read_ = read_;
function read_integer_(integer, $c) {
    return $.copy(integer.value);
}
exports.read_integer_ = read_integer_;
function sub_(optional_aggregator, value, $c) {
    let aggregator, integer;
    if (Option.is_some_(optional_aggregator.aggregator, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])])) {
        aggregator = Option.borrow_mut_(optional_aggregator.aggregator, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])]);
        Aggregator.sub_(aggregator, $.copy(value), $c);
    }
    else {
        integer = Option.borrow_mut_(optional_aggregator.integer, $c, [new move_to_ts_2.SimpleStructTag(Integer)]);
        sub_integer_(integer, $.copy(value), $c);
    }
    return;
}
exports.sub_ = sub_;
function sub_integer_(integer, value, $c) {
    if (!($.copy(value)).le($.copy(integer.value))) {
        throw $.abortCode(Error.out_of_range_($.copy(exports.EAGGREGATOR_UNDERFLOW), $c));
    }
    integer.value = ($.copy(integer.value)).sub($.copy(value));
    return;
}
exports.sub_integer_ = sub_integer_;
function switch_(optional_aggregator, $c) {
    let value;
    value = read_(optional_aggregator, $c);
    switch_and_zero_out_(optional_aggregator, $c);
    add_(optional_aggregator, $.copy(value), $c);
    return;
}
exports.switch_ = switch_;
function switch_and_zero_out_(optional_aggregator, $c) {
    if (is_parallelizable_(optional_aggregator, $c)) {
        switch_to_integer_and_zero_out_(optional_aggregator, $c);
    }
    else {
        switch_to_aggregator_and_zero_out_(optional_aggregator, $c);
    }
    return;
}
exports.switch_and_zero_out_ = switch_and_zero_out_;
function switch_to_aggregator_and_zero_out_(optional_aggregator, $c) {
    let aggregator, integer, limit;
    integer = Option.extract_(optional_aggregator.integer, $c, [new move_to_ts_2.SimpleStructTag(Integer)]);
    limit = limit_(integer, $c);
    destroy_integer_(integer, $c);
    aggregator = Aggregator_factory.create_aggregator_internal_($.copy(limit), $c);
    Option.fill_(optional_aggregator.aggregator, aggregator, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])]);
    return $.copy(limit);
}
exports.switch_to_aggregator_and_zero_out_ = switch_to_aggregator_and_zero_out_;
function switch_to_integer_and_zero_out_(optional_aggregator, $c) {
    let aggregator, integer, limit;
    aggregator = Option.extract_(optional_aggregator.aggregator, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aggregator", "Aggregator", [])]);
    limit = Aggregator.limit_(aggregator, $c);
    Aggregator.destroy_(aggregator, $c);
    integer = new_integer_($.copy(limit), $c);
    Option.fill_(optional_aggregator.integer, integer, $c, [new move_to_ts_2.SimpleStructTag(Integer)]);
    return $.copy(limit);
}
exports.switch_to_integer_and_zero_out_ = switch_to_integer_and_zero_out_;
function loadParsers(repo) {
    repo.addParser("0x1::optional_aggregator::Integer", Integer.IntegerParser);
    repo.addParser("0x1::optional_aggregator::OptionalAggregator", OptionalAggregator.OptionalAggregatorParser);
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
    get Integer() { return Integer; }
    get OptionalAggregator() { return OptionalAggregator; }
}
exports.App = App;
//# sourceMappingURL=optional_aggregator.js.map