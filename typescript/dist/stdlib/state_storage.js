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
exports.App = exports.loadParsers = exports.on_reconfig_ = exports.on_new_block_ = exports.initialize_ = exports.get_state_storage_usage_only_at_epoch_beginning_ = exports.current_items_and_bytes_ = exports.Usage = exports.StateStorageUsage = exports.GasParameter = exports.ESTATE_STORAGE_USAGE = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const System_addresses = __importStar(require("./system_addresses"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "state_storage";
exports.ESTATE_STORAGE_USAGE = (0, move_to_ts_1.u64)("0");
class GasParameter {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.usage = proto['usage'];
    }
    static GasParameterParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, GasParameter);
        return new GasParameter(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, GasParameter, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, GasParameter, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "GasParameter", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.usage.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.GasParameter = GasParameter;
GasParameter.moduleAddress = exports.moduleAddress;
GasParameter.moduleName = exports.moduleName;
GasParameter.structName = "GasParameter";
GasParameter.typeParameters = [];
GasParameter.fields = [
    { name: "usage", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "state_storage", "Usage", []) }
];
class StateStorageUsage {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.epoch = proto['epoch'];
        this.usage = proto['usage'];
    }
    static StateStorageUsageParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, StateStorageUsage);
        return new StateStorageUsage(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, StateStorageUsage, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, StateStorageUsage, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "StateStorageUsage", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.usage.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.StateStorageUsage = StateStorageUsage;
StateStorageUsage.moduleAddress = exports.moduleAddress;
StateStorageUsage.moduleName = exports.moduleName;
StateStorageUsage.structName = "StateStorageUsage";
StateStorageUsage.typeParameters = [];
StateStorageUsage.fields = [
    { name: "epoch", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "usage", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "state_storage", "Usage", []) }
];
class Usage {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.items = proto['items'];
        this.bytes = proto['bytes'];
    }
    static UsageParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Usage);
        return new Usage(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Usage", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Usage = Usage;
Usage.moduleAddress = exports.moduleAddress;
Usage.moduleName = exports.moduleName;
Usage.structName = "Usage";
Usage.typeParameters = [];
Usage.fields = [
    { name: "items", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "bytes", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function current_items_and_bytes_($c) {
    let usage;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(StateStorageUsage), new aptos_1.HexString("0x1"))) {
        throw $.abortCode(Error.not_found_($.copy(exports.ESTATE_STORAGE_USAGE), $c));
    }
    usage = $c.borrow_global(new move_to_ts_2.SimpleStructTag(StateStorageUsage), new aptos_1.HexString("0x1"));
    return [$.copy(usage.usage.items), $.copy(usage.usage.bytes)];
}
exports.current_items_and_bytes_ = current_items_and_bytes_;
function get_state_storage_usage_only_at_epoch_beginning_($c) {
    return $.aptos_framework_state_storage_get_state_storage_usage_only_at_epoch_beginning($c);
}
exports.get_state_storage_usage_only_at_epoch_beginning_ = get_state_storage_usage_only_at_epoch_beginning_;
function initialize_(aptos_framework, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (!!$c.exists(new move_to_ts_2.SimpleStructTag(StateStorageUsage), new aptos_1.HexString("0x1"))) {
        throw $.abortCode(Error.already_exists_($.copy(exports.ESTATE_STORAGE_USAGE), $c));
    }
    $c.move_to(new move_to_ts_2.SimpleStructTag(StateStorageUsage), aptos_framework, new StateStorageUsage({ epoch: (0, move_to_ts_1.u64)("0"), usage: new Usage({ items: (0, move_to_ts_1.u64)("0"), bytes: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(Usage)) }, new move_to_ts_2.SimpleStructTag(StateStorageUsage)));
    return;
}
exports.initialize_ = initialize_;
function on_new_block_(epoch, $c) {
    let usage;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(StateStorageUsage), new aptos_1.HexString("0x1"))) {
        throw $.abortCode(Error.not_found_($.copy(exports.ESTATE_STORAGE_USAGE), $c));
    }
    usage = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StateStorageUsage), new aptos_1.HexString("0x1"));
    if (($.copy(epoch)).neq($.copy(usage.epoch))) {
        usage.epoch = $.copy(epoch);
        usage.usage = get_state_storage_usage_only_at_epoch_beginning_($c);
    }
    else {
    }
    return;
}
exports.on_new_block_ = on_new_block_;
function on_reconfig_($c) {
    throw $.abortCode((0, move_to_ts_1.u64)("0"));
}
exports.on_reconfig_ = on_reconfig_;
function loadParsers(repo) {
    repo.addParser("0x1::state_storage::GasParameter", GasParameter.GasParameterParser);
    repo.addParser("0x1::state_storage::StateStorageUsage", StateStorageUsage.StateStorageUsageParser);
    repo.addParser("0x1::state_storage::Usage", Usage.UsageParser);
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
    get GasParameter() { return GasParameter; }
    loadGasParameter(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield GasParameter.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get StateStorageUsage() { return StateStorageUsage; }
    loadStateStorageUsage(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield StateStorageUsage.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get Usage() { return Usage; }
}
exports.App = App;
//# sourceMappingURL=state_storage.js.map