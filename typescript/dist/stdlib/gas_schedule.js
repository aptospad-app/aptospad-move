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
exports.App = exports.loadParsers = exports.set_storage_gas_config_ = exports.set_gas_schedule_ = exports.initialize_ = exports.GasScheduleV2 = exports.GasSchedule = exports.GasEntry = exports.EINVALID_GAS_SCHEDULE = exports.EINVALID_GAS_FEATURE_VERSION = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Reconfiguration = __importStar(require("./reconfiguration"));
const Storage_gas = __importStar(require("./storage_gas"));
const System_addresses = __importStar(require("./system_addresses"));
const Util = __importStar(require("./util"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "gas_schedule";
exports.EINVALID_GAS_FEATURE_VERSION = (0, move_to_ts_1.u64)("2");
exports.EINVALID_GAS_SCHEDULE = (0, move_to_ts_1.u64)("1");
class GasEntry {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.key = proto['key'];
        this.val = proto['val'];
    }
    static GasEntryParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, GasEntry);
        return new GasEntry(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "GasEntry", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.key.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.GasEntry = GasEntry;
GasEntry.moduleAddress = exports.moduleAddress;
GasEntry.moduleName = exports.moduleName;
GasEntry.structName = "GasEntry";
GasEntry.typeParameters = [];
GasEntry.fields = [
    { name: "key", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "val", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class GasSchedule {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.entries = proto['entries'];
    }
    static GasScheduleParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, GasSchedule);
        return new GasSchedule(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, GasSchedule, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, GasSchedule, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "GasSchedule", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.GasSchedule = GasSchedule;
GasSchedule.moduleAddress = exports.moduleAddress;
GasSchedule.moduleName = exports.moduleName;
GasSchedule.structName = "GasSchedule";
GasSchedule.typeParameters = [];
GasSchedule.fields = [
    { name: "entries", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "gas_schedule", "GasEntry", [])) }
];
class GasScheduleV2 {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.feature_version = proto['feature_version'];
        this.entries = proto['entries'];
    }
    static GasScheduleV2Parser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, GasScheduleV2);
        return new GasScheduleV2(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, GasScheduleV2, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, GasScheduleV2, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "GasScheduleV2", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.GasScheduleV2 = GasScheduleV2;
GasScheduleV2.moduleAddress = exports.moduleAddress;
GasScheduleV2.moduleName = exports.moduleName;
GasScheduleV2.structName = "GasScheduleV2";
GasScheduleV2.typeParameters = [];
GasScheduleV2.fields = [
    { name: "feature_version", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "entries", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "gas_schedule", "GasEntry", [])) }
];
function initialize_(aptos_framework, gas_schedule_blob, $c) {
    let gas_schedule;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (!!Vector.is_empty_(gas_schedule_blob, $c, [move_to_ts_2.AtomicTypeTag.U8])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_GAS_SCHEDULE), $c));
    }
    gas_schedule = Util.from_bytes_($.copy(gas_schedule_blob), $c, [new move_to_ts_2.SimpleStructTag(GasScheduleV2)]);
    $c.move_to(new move_to_ts_2.SimpleStructTag(GasScheduleV2), aptos_framework, $.copy(gas_schedule));
    return;
}
exports.initialize_ = initialize_;
function set_gas_schedule_(aptos_framework, gas_schedule_blob, $c) {
    let gas_schedule, new_gas_schedule, new_gas_schedule__1;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (!!Vector.is_empty_(gas_schedule_blob, $c, [move_to_ts_2.AtomicTypeTag.U8])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_GAS_SCHEDULE), $c));
    }
    if ($c.exists(new move_to_ts_2.SimpleStructTag(GasScheduleV2), new aptos_1.HexString("0x1"))) {
        gas_schedule = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(GasScheduleV2), new aptos_1.HexString("0x1"));
        new_gas_schedule = Util.from_bytes_($.copy(gas_schedule_blob), $c, [new move_to_ts_2.SimpleStructTag(GasScheduleV2)]);
        if (!($.copy(new_gas_schedule.feature_version)).ge($.copy(gas_schedule.feature_version))) {
            throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_GAS_FEATURE_VERSION), $c));
        }
        $.set(gas_schedule, $.copy(new_gas_schedule));
    }
    else {
        if ($c.exists(new move_to_ts_2.SimpleStructTag(GasSchedule), new aptos_1.HexString("0x1"))) {
            $c.move_from(new move_to_ts_2.SimpleStructTag(GasSchedule), new aptos_1.HexString("0x1"));
        }
        else {
        }
        new_gas_schedule__1 = Util.from_bytes_($.copy(gas_schedule_blob), $c, [new move_to_ts_2.SimpleStructTag(GasScheduleV2)]);
        $c.move_to(new move_to_ts_2.SimpleStructTag(GasScheduleV2), aptos_framework, $.copy(new_gas_schedule__1));
    }
    Reconfiguration.reconfigure_($c);
    return;
}
exports.set_gas_schedule_ = set_gas_schedule_;
function set_storage_gas_config_(aptos_framework, config, $c) {
    Storage_gas.set_config_(aptos_framework, $.copy(config), $c);
    Reconfiguration.reconfigure_($c);
    return;
}
exports.set_storage_gas_config_ = set_storage_gas_config_;
function loadParsers(repo) {
    repo.addParser("0x1::gas_schedule::GasEntry", GasEntry.GasEntryParser);
    repo.addParser("0x1::gas_schedule::GasSchedule", GasSchedule.GasScheduleParser);
    repo.addParser("0x1::gas_schedule::GasScheduleV2", GasScheduleV2.GasScheduleV2Parser);
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
    get GasEntry() { return GasEntry; }
    get GasSchedule() { return GasSchedule; }
    loadGasSchedule(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield GasSchedule.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get GasScheduleV2() { return GasScheduleV2; }
    loadGasScheduleV2(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield GasScheduleV2.load(this.repo, this.client, owner, []);
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
//# sourceMappingURL=gas_schedule.js.map