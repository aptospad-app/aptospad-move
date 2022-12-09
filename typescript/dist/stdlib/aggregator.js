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
exports.App = exports.loadParsers = exports.sub_ = exports.read_ = exports.limit_ = exports.destroy_ = exports.add_ = exports.Aggregator = exports.ENOT_SUPPORTED = exports.EAGGREGATOR_UNDERFLOW = exports.EAGGREGATOR_OVERFLOW = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "aggregator";
exports.EAGGREGATOR_OVERFLOW = (0, move_to_ts_1.u64)("1");
exports.EAGGREGATOR_UNDERFLOW = (0, move_to_ts_1.u64)("2");
exports.ENOT_SUPPORTED = (0, move_to_ts_1.u64)("3");
class Aggregator {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.handle = proto['handle'];
        this.key = proto['key'];
        this.limit = proto['limit'];
    }
    static AggregatorParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Aggregator);
        return new Aggregator(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Aggregator", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Aggregator = Aggregator;
Aggregator.moduleAddress = exports.moduleAddress;
Aggregator.moduleName = exports.moduleName;
Aggregator.structName = "Aggregator";
Aggregator.typeParameters = [];
Aggregator.fields = [
    { name: "handle", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "key", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "limit", typeTag: move_to_ts_2.AtomicTypeTag.U128 }
];
function add_(aggregator, value, $c) {
    return $.aptos_framework_aggregator_add(aggregator, value, $c);
}
exports.add_ = add_;
function destroy_(aggregator, $c) {
    return $.aptos_framework_aggregator_destroy(aggregator, $c);
}
exports.destroy_ = destroy_;
function limit_(aggregator, $c) {
    return $.copy(aggregator.limit);
}
exports.limit_ = limit_;
function read_(aggregator, $c) {
    return $.aptos_framework_aggregator_read(aggregator, $c);
}
exports.read_ = read_;
function sub_(aggregator, value, $c) {
    return $.aptos_framework_aggregator_sub(aggregator, value, $c);
}
exports.sub_ = sub_;
function loadParsers(repo) {
    repo.addParser("0x1::aggregator::Aggregator", Aggregator.AggregatorParser);
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
    get Aggregator() { return Aggregator; }
}
exports.App = App;
//# sourceMappingURL=aggregator.js.map