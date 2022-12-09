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
exports.App = exports.loadParsers = exports.update_epoch_interval_microsecs_ = exports.initialize_ = exports.get_epoch_interval_secs_ = exports.get_current_block_height_ = exports.emit_writeset_block_event_ = exports.emit_new_block_event_ = exports.emit_genesis_block_event_ = exports.block_prologue_ = exports.UpdateEpochIntervalEvent = exports.NewBlockEvent = exports.BlockResource = exports.MAX_U64 = exports.EZERO_EPOCH_INTERVAL = exports.ENUM_NEW_BLOCK_EVENTS_DOES_NOT_MATCH_BLOCK_HEIGHT = exports.EINVALID_PROPOSER = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Account = __importStar(require("./account"));
const Error = __importStar(require("./error"));
const Event = __importStar(require("./event"));
const Option = __importStar(require("./option"));
const Reconfiguration = __importStar(require("./reconfiguration"));
const Stake = __importStar(require("./stake"));
const State_storage = __importStar(require("./state_storage"));
const System_addresses = __importStar(require("./system_addresses"));
const Timestamp = __importStar(require("./timestamp"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "block";
exports.EINVALID_PROPOSER = (0, move_to_ts_1.u64)("2");
exports.ENUM_NEW_BLOCK_EVENTS_DOES_NOT_MATCH_BLOCK_HEIGHT = (0, move_to_ts_1.u64)("1");
exports.EZERO_EPOCH_INTERVAL = (0, move_to_ts_1.u64)("3");
exports.MAX_U64 = (0, move_to_ts_1.u64)("18446744073709551615");
class BlockResource {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.height = proto['height'];
        this.epoch_interval = proto['epoch_interval'];
        this.new_block_events = proto['new_block_events'];
        this.update_epoch_interval_events = proto['update_epoch_interval_events'];
    }
    static BlockResourceParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, BlockResource);
        return new BlockResource(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, BlockResource, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, BlockResource, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "BlockResource", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.new_block_events.loadFullState(app);
            yield this.update_epoch_interval_events.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.BlockResource = BlockResource;
BlockResource.moduleAddress = exports.moduleAddress;
BlockResource.moduleName = exports.moduleName;
BlockResource.structName = "BlockResource";
BlockResource.typeParameters = [];
BlockResource.fields = [
    { name: "height", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "epoch_interval", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "new_block_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "block", "NewBlockEvent", [])]) },
    { name: "update_epoch_interval_events", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "event", "EventHandle", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "block", "UpdateEpochIntervalEvent", [])]) }
];
class NewBlockEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.hash = proto['hash'];
        this.epoch = proto['epoch'];
        this.round = proto['round'];
        this.height = proto['height'];
        this.previous_block_votes_bitvec = proto['previous_block_votes_bitvec'];
        this.proposer = proto['proposer'];
        this.failed_proposer_indices = proto['failed_proposer_indices'];
        this.time_microseconds = proto['time_microseconds'];
    }
    static NewBlockEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, NewBlockEvent);
        return new NewBlockEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "NewBlockEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.NewBlockEvent = NewBlockEvent;
NewBlockEvent.moduleAddress = exports.moduleAddress;
NewBlockEvent.moduleName = exports.moduleName;
NewBlockEvent.structName = "NewBlockEvent";
NewBlockEvent.typeParameters = [];
NewBlockEvent.fields = [
    { name: "hash", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "epoch", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "round", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "height", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "previous_block_votes_bitvec", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "proposer", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "failed_proposer_indices", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U64) },
    { name: "time_microseconds", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class UpdateEpochIntervalEvent {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.old_epoch_interval = proto['old_epoch_interval'];
        this.new_epoch_interval = proto['new_epoch_interval'];
    }
    static UpdateEpochIntervalEventParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, UpdateEpochIntervalEvent);
        return new UpdateEpochIntervalEvent(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "UpdateEpochIntervalEvent", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.UpdateEpochIntervalEvent = UpdateEpochIntervalEvent;
UpdateEpochIntervalEvent.moduleAddress = exports.moduleAddress;
UpdateEpochIntervalEvent.moduleName = exports.moduleName;
UpdateEpochIntervalEvent.structName = "UpdateEpochIntervalEvent";
UpdateEpochIntervalEvent.typeParameters = [];
UpdateEpochIntervalEvent.fields = [
    { name: "old_epoch_interval", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "new_epoch_interval", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function block_prologue_(vm, hash, epoch, round, proposer, failed_proposer_indices, previous_block_votes_bitvec, timestamp, $c) {
    let temp$1, block_metadata_ref, new_block_event, proposer_index;
    System_addresses.assert_vm_(vm, $c);
    if ((($.copy(proposer)).hex() === (new aptos_1.HexString("0x0")).hex())) {
        temp$1 = true;
    }
    else {
        temp$1 = Stake.is_current_epoch_validator_($.copy(proposer), $c);
    }
    if (!temp$1) {
        throw $.abortCode(Error.permission_denied_($.copy(exports.EINVALID_PROPOSER), $c));
    }
    proposer_index = Option.none_($c, [move_to_ts_2.AtomicTypeTag.U64]);
    if ((($.copy(proposer)).hex() !== (new aptos_1.HexString("0x0")).hex())) {
        proposer_index = Option.some_(Stake.get_validator_index_($.copy(proposer), $c), $c, [move_to_ts_2.AtomicTypeTag.U64]);
    }
    else {
    }
    block_metadata_ref = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(BlockResource), new aptos_1.HexString("0x1"));
    block_metadata_ref.height = Event.counter_(block_metadata_ref.new_block_events, $c, [new move_to_ts_2.SimpleStructTag(NewBlockEvent)]);
    new_block_event = new NewBlockEvent({ hash: $.copy(hash), epoch: $.copy(epoch), round: $.copy(round), height: $.copy(block_metadata_ref.height), previous_block_votes_bitvec: $.copy(previous_block_votes_bitvec), proposer: $.copy(proposer), failed_proposer_indices: $.copy(failed_proposer_indices), time_microseconds: $.copy(timestamp) }, new move_to_ts_2.SimpleStructTag(NewBlockEvent));
    emit_new_block_event_(vm, block_metadata_ref.new_block_events, new_block_event, $c);
    Stake.update_performance_statistics_($.copy(proposer_index), $.copy(failed_proposer_indices), $c);
    State_storage.on_new_block_(Reconfiguration.current_epoch_($c), $c);
    if ((($.copy(timestamp)).sub(Reconfiguration.last_reconfiguration_time_($c))).ge($.copy(block_metadata_ref.epoch_interval))) {
        Reconfiguration.reconfigure_($c);
    }
    else {
    }
    return;
}
exports.block_prologue_ = block_prologue_;
function emit_genesis_block_event_(vm, $c) {
    let block_metadata_ref, genesis_id;
    block_metadata_ref = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(BlockResource), new aptos_1.HexString("0x1"));
    genesis_id = new aptos_1.HexString("0x0");
    emit_new_block_event_(vm, block_metadata_ref.new_block_events, new NewBlockEvent({ hash: $.copy(genesis_id), epoch: (0, move_to_ts_1.u64)("0"), round: (0, move_to_ts_1.u64)("0"), height: (0, move_to_ts_1.u64)("0"), previous_block_votes_bitvec: Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U8]), proposer: new aptos_1.HexString("0x0"), failed_proposer_indices: Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]), time_microseconds: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(NewBlockEvent)), $c);
    return;
}
exports.emit_genesis_block_event_ = emit_genesis_block_event_;
function emit_new_block_event_(vm, event_handle, new_block_event, $c) {
    Timestamp.update_global_time_(vm, $.copy(new_block_event.proposer), $.copy(new_block_event.time_microseconds), $c);
    if (!(Event.counter_(event_handle, $c, [new move_to_ts_2.SimpleStructTag(NewBlockEvent)])).eq(($.copy(new_block_event.height)))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ENUM_NEW_BLOCK_EVENTS_DOES_NOT_MATCH_BLOCK_HEIGHT), $c));
    }
    Event.emit_event_(event_handle, new_block_event, $c, [new move_to_ts_2.SimpleStructTag(NewBlockEvent)]);
    return;
}
exports.emit_new_block_event_ = emit_new_block_event_;
function emit_writeset_block_event_(vm_signer, fake_block_hash, $c) {
    let block_metadata_ref;
    System_addresses.assert_vm_(vm_signer, $c);
    block_metadata_ref = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(BlockResource), new aptos_1.HexString("0x1"));
    block_metadata_ref.height = Event.counter_(block_metadata_ref.new_block_events, $c, [new move_to_ts_2.SimpleStructTag(NewBlockEvent)]);
    Event.emit_event_(block_metadata_ref.new_block_events, new NewBlockEvent({ hash: $.copy(fake_block_hash), epoch: Reconfiguration.current_epoch_($c), round: $.copy(exports.MAX_U64), height: $.copy(block_metadata_ref.height), previous_block_votes_bitvec: Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U8]), proposer: new aptos_1.HexString("0x0"), failed_proposer_indices: Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.U64]), time_microseconds: Timestamp.now_microseconds_($c) }, new move_to_ts_2.SimpleStructTag(NewBlockEvent)), $c, [new move_to_ts_2.SimpleStructTag(NewBlockEvent)]);
    return;
}
exports.emit_writeset_block_event_ = emit_writeset_block_event_;
function get_current_block_height_($c) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(BlockResource), new aptos_1.HexString("0x1")).height);
}
exports.get_current_block_height_ = get_current_block_height_;
function get_epoch_interval_secs_($c) {
    return ($.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(BlockResource), new aptos_1.HexString("0x1")).epoch_interval)).div((0, move_to_ts_1.u64)("1000000"));
}
exports.get_epoch_interval_secs_ = get_epoch_interval_secs_;
function initialize_(aptos_framework, epoch_interval_microsecs, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (!($.copy(epoch_interval_microsecs)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EZERO_EPOCH_INTERVAL), $c));
    }
    $c.move_to(new move_to_ts_2.SimpleStructTag(BlockResource), aptos_framework, new BlockResource({ height: (0, move_to_ts_1.u64)("0"), epoch_interval: $.copy(epoch_interval_microsecs), new_block_events: Account.new_event_handle_(aptos_framework, $c, [new move_to_ts_2.SimpleStructTag(NewBlockEvent)]), update_epoch_interval_events: Account.new_event_handle_(aptos_framework, $c, [new move_to_ts_2.SimpleStructTag(UpdateEpochIntervalEvent)]) }, new move_to_ts_2.SimpleStructTag(BlockResource)));
    return;
}
exports.initialize_ = initialize_;
function update_epoch_interval_microsecs_(aptos_framework, new_epoch_interval, $c) {
    let block_resource, old_epoch_interval;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (!($.copy(new_epoch_interval)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EZERO_EPOCH_INTERVAL), $c));
    }
    block_resource = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(BlockResource), new aptos_1.HexString("0x1"));
    old_epoch_interval = $.copy(block_resource.epoch_interval);
    block_resource.epoch_interval = $.copy(new_epoch_interval);
    Event.emit_event_(block_resource.update_epoch_interval_events, new UpdateEpochIntervalEvent({ old_epoch_interval: $.copy(old_epoch_interval), new_epoch_interval: $.copy(new_epoch_interval) }, new move_to_ts_2.SimpleStructTag(UpdateEpochIntervalEvent)), $c, [new move_to_ts_2.SimpleStructTag(UpdateEpochIntervalEvent)]);
    return;
}
exports.update_epoch_interval_microsecs_ = update_epoch_interval_microsecs_;
function loadParsers(repo) {
    repo.addParser("0x1::block::BlockResource", BlockResource.BlockResourceParser);
    repo.addParser("0x1::block::NewBlockEvent", NewBlockEvent.NewBlockEventParser);
    repo.addParser("0x1::block::UpdateEpochIntervalEvent", UpdateEpochIntervalEvent.UpdateEpochIntervalEventParser);
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
    get BlockResource() { return BlockResource; }
    loadBlockResource(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield BlockResource.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get NewBlockEvent() { return NewBlockEvent; }
    get UpdateEpochIntervalEvent() { return UpdateEpochIntervalEvent; }
}
exports.App = App;
//# sourceMappingURL=block.js.map