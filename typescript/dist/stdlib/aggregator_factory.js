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
exports.App = exports.loadParsers = exports.new_aggregator_ = exports.initialize_aggregator_factory_ = exports.create_aggregator_internal_ = exports.create_aggregator_ = exports.AggregatorFactory = exports.EAGGREGATOR_FACTORY_NOT_FOUND = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const System_addresses = __importStar(require("./system_addresses"));
const Table = __importStar(require("./table"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "aggregator_factory";
exports.EAGGREGATOR_FACTORY_NOT_FOUND = (0, move_to_ts_1.u64)("1");
class AggregatorFactory {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.phantom_table = proto['phantom_table'];
    }
    static AggregatorFactoryParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AggregatorFactory);
        return new AggregatorFactory(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, AggregatorFactory, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, AggregatorFactory, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AggregatorFactory", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.phantom_table.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.AggregatorFactory = AggregatorFactory;
AggregatorFactory.moduleAddress = exports.moduleAddress;
AggregatorFactory.moduleName = exports.moduleName;
AggregatorFactory.structName = "AggregatorFactory";
AggregatorFactory.typeParameters = [];
AggregatorFactory.fields = [
    { name: "phantom_table", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "table", "Table", [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.U128]) }
];
function create_aggregator_(account, limit, $c) {
    System_addresses.assert_aptos_framework_(account, $c);
    return create_aggregator_internal_($.copy(limit), $c);
}
exports.create_aggregator_ = create_aggregator_;
function create_aggregator_internal_(limit, $c) {
    let aggregator_factory;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(AggregatorFactory), new aptos_1.HexString("0x1"))) {
        throw $.abortCode(Error.not_found_($.copy(exports.EAGGREGATOR_FACTORY_NOT_FOUND), $c));
    }
    aggregator_factory = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(AggregatorFactory), new aptos_1.HexString("0x1"));
    return new_aggregator_(aggregator_factory, $.copy(limit), $c);
}
exports.create_aggregator_internal_ = create_aggregator_internal_;
function initialize_aggregator_factory_(aptos_framework, $c) {
    let aggregator_factory;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    aggregator_factory = new AggregatorFactory({ phantom_table: Table.new___($c, [move_to_ts_2.AtomicTypeTag.Address, move_to_ts_2.AtomicTypeTag.U128]) }, new move_to_ts_2.SimpleStructTag(AggregatorFactory));
    $c.move_to(new move_to_ts_2.SimpleStructTag(AggregatorFactory), aptos_framework, aggregator_factory);
    return;
}
exports.initialize_aggregator_factory_ = initialize_aggregator_factory_;
function new_aggregator_(aggregator_factory, limit, $c) {
    return $.aptos_framework_aggregator_factory_new_aggregator(aggregator_factory, limit, $c);
}
exports.new_aggregator_ = new_aggregator_;
function loadParsers(repo) {
    repo.addParser("0x1::aggregator_factory::AggregatorFactory", AggregatorFactory.AggregatorFactoryParser);
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
    get AggregatorFactory() { return AggregatorFactory; }
    loadAggregatorFactory(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield AggregatorFactory.load(this.repo, this.client, owner, []);
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
//# sourceMappingURL=aggregator_factory.js.map