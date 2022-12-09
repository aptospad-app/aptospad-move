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
exports.App = exports.loadParsers = exports.reconfigure_ = exports.reconfiguration_enabled_ = exports.last_reconfiguration_time_ = exports.initialize_ = exports.enable_reconfiguration_ = exports.emit_genesis_reconfiguration_event_ = exports.disable_reconfiguration_ = exports.current_epoch_ = exports.NewEpochEvent = exports.DisableReconfiguration = exports.Configuration = exports.EMODIFY_CAPABILITY = exports.EINVALID_GUID_FOR_EVENT = exports.EINVALID_BLOCK_TIME = exports.ECONFIGURATION = exports.ECONFIG = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Account = __importStar(require("./account"));
const Chain_status = __importStar(require("./chain_status"));
const Error = __importStar(require("./error"));
const Event = __importStar(require("./event"));
const Signer = __importStar(require("./signer"));
const Stake = __importStar(require("./stake"));
const Storage_gas = __importStar(require("./storage_gas"));
const System_addresses = __importStar(require("./system_addresses"));
const Timestamp = __importStar(require("./timestamp"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "reconfiguration";
exports.ECONFIG = (0, move_to_ts_1.u64)("2");
exports.ECONFIGURATION = (0, move_to_ts_1.u64)("1");
exports.EINVALID_BLOCK_TIME = (0, move_to_ts_1.u64)("4");
exports.EINVALID_GUID_FOR_EVENT = (0, move_to_ts_1.u64)("5");
exports.EMODIFY_CAPABILITY = (0, move_to_ts_1.u64)("3");
class Configuration {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.epoch = proto['epoch'];
        this.last_reconfiguration_time = proto['last_reconfiguration_time'];
        this.events = proto['events'];
    }
    static ConfigurationParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Configuration);
        return new Configuration(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Configuration, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Configuration, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Configuration", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Configuration = Configuration;
Configuration.moduleAddress = exports.moduleAddress;
Configuration.moduleName = exports.moduleName;
Configuration.structName = "Configuration";
Configuration.typeParameters = [];
Configuration.fields = [
    { name: "epoch", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "last_reconfiguration_time", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "reconfiguration", "NewEpochEvent", [])]) }
];
class DisableReconfiguration {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
    }
    static DisableReconfigurationParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, DisableReconfiguration);
        return new DisableReconfiguration(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, DisableReconfiguration, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, DisableReconfiguration, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "DisableReconfiguration", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.DisableReconfiguration = DisableReconfiguration;
DisableReconfiguration.moduleAddress = exports.moduleAddress;
DisableReconfiguration.moduleName = exports.moduleName;
DisableReconfiguration.structName = "DisableReconfiguration";
DisableReconfiguration.typeParameters = [];
DisableReconfiguration.fields = [];
class NewEpochEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.epoch = proto['epoch'];
    }
    static NewEpochEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, NewEpochEvent);
        return new NewEpochEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "NewEpochEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.NewEpochEvent = NewEpochEvent;
NewEpochEvent.moduleAddress = exports.moduleAddress;
NewEpochEvent.moduleName = exports.moduleName;
NewEpochEvent.structName = "NewEpochEvent";
NewEpochEvent.typeParameters = [];
NewEpochEvent.fields = [
    { name: "epoch", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function current_epoch_($c) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(Configuration), new aptos_1.HexString("0x1")).epoch);
}
exports.current_epoch_ = current_epoch_;
function disable_reconfiguration_(aptos_framework, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (!reconfiguration_enabled_($c)) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.ECONFIGURATION), $c));
    }
    return $c.move_to(new move_to_ts_2.SimpleStructTag(DisableReconfiguration), aptos_framework, new DisableReconfiguration({}, new move_to_ts_2.SimpleStructTag(DisableReconfiguration)));
}
exports.disable_reconfiguration_ = disable_reconfiguration_;
function emit_genesis_reconfiguration_event_($c) {
    let temp$1, config_ref;
    config_ref = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Configuration), new aptos_1.HexString("0x1"));
    if (($.copy(config_ref.epoch)).eq(((0, move_to_ts_1.u64)("0")))) {
        temp$1 = ($.copy(config_ref.last_reconfiguration_time)).eq(((0, move_to_ts_1.u64)("0")));
    }
    else {
        temp$1 = false;
    }
    if (!temp$1) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.ECONFIGURATION), $c));
    }
    config_ref.epoch = (0, move_to_ts_1.u64)("1");
    Event.emit_event_(config_ref.events, new NewEpochEvent({ epoch: $.copy(config_ref.epoch) }, new move_to_ts_2.SimpleStructTag(NewEpochEvent)), $c, [new move_to_ts_2.SimpleStructTag(NewEpochEvent)]);
    return;
}
exports.emit_genesis_reconfiguration_event_ = emit_genesis_reconfiguration_event_;
function enable_reconfiguration_(aptos_framework, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (!!reconfiguration_enabled_($c)) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.ECONFIGURATION), $c));
    }
    $c.move_from(new move_to_ts_2.SimpleStructTag(DisableReconfiguration), Signer.address_of_(aptos_framework, $c));
    return;
}
exports.enable_reconfiguration_ = enable_reconfiguration_;
function initialize_(aptos_framework, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (!(Account.get_guid_next_creation_num_(Signer.address_of_(aptos_framework, $c), $c)).eq(((0, move_to_ts_1.u64)("2")))) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.EINVALID_GUID_FOR_EVENT), $c));
    }
    $c.move_to(new move_to_ts_2.SimpleStructTag(Configuration), aptos_framework, new Configuration({ epoch: (0, move_to_ts_1.u64)("0"), last_reconfiguration_time: (0, move_to_ts_1.u64)("0"), events: Account.new_event_handle_(aptos_framework, $c, [new move_to_ts_2.SimpleStructTag(NewEpochEvent)]) }, new move_to_ts_2.SimpleStructTag(Configuration)));
    return;
}
exports.initialize_ = initialize_;
function last_reconfiguration_time_($c) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(Configuration), new aptos_1.HexString("0x1")).last_reconfiguration_time);
}
exports.last_reconfiguration_time_ = last_reconfiguration_time_;
function reconfiguration_enabled_($c) {
    return !$c.exists(new move_to_ts_2.SimpleStructTag(DisableReconfiguration), new aptos_1.HexString("0x1"));
}
exports.reconfiguration_enabled_ = reconfiguration_enabled_;
function reconfigure_($c) {
    let temp$1, temp$2, config_ref, current_time;
    if (Chain_status.is_genesis_($c)) {
        temp$1 = true;
    }
    else {
        temp$1 = (Timestamp.now_microseconds_($c)).eq(((0, move_to_ts_1.u64)("0")));
    }
    if (temp$1) {
        temp$2 = true;
    }
    else {
        temp$2 = !reconfiguration_enabled_($c);
    }
    if (temp$2) {
        return;
    }
    else {
    }
    config_ref = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Configuration), new aptos_1.HexString("0x1"));
    current_time = Timestamp.now_microseconds_($c);
    if (($.copy(current_time)).eq(($.copy(config_ref.last_reconfiguration_time)))) {
        return;
    }
    else {
    }
    Stake.on_new_epoch_($c);
    Storage_gas.on_reconfig_($c);
    if (!($.copy(current_time)).gt($.copy(config_ref.last_reconfiguration_time))) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.EINVALID_BLOCK_TIME), $c));
    }
    config_ref.last_reconfiguration_time = $.copy(current_time);
    ;
    config_ref.epoch = ($.copy(config_ref.epoch)).add((0, move_to_ts_1.u64)("1"));
    Event.emit_event_(config_ref.events, new NewEpochEvent({ epoch: $.copy(config_ref.epoch) }, new move_to_ts_2.SimpleStructTag(NewEpochEvent)), $c, [new move_to_ts_2.SimpleStructTag(NewEpochEvent)]);
    return;
}
exports.reconfigure_ = reconfigure_;
function loadParsers(repo) {
    repo.addParser("0x1::reconfiguration::Configuration", Configuration.ConfigurationParser);
    repo.addParser("0x1::reconfiguration::DisableReconfiguration", DisableReconfiguration.DisableReconfigurationParser);
    repo.addParser("0x1::reconfiguration::NewEpochEvent", NewEpochEvent.NewEpochEventParser);
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
    get Configuration() { return Configuration; }
    loadConfiguration(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Configuration.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get DisableReconfiguration() { return DisableReconfiguration; }
    loadDisableReconfiguration(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield DisableReconfiguration.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get NewEpochEvent() { return NewEpochEvent; }
}
exports.App = App;
//# sourceMappingURL=reconfiguration.js.map