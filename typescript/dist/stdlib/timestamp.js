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
exports.App = exports.loadParsers = exports.update_global_time_ = exports.set_time_has_started_ = exports.now_seconds_ = exports.now_microseconds_ = exports.CurrentTimeMicroseconds = exports.MICRO_CONVERSION_FACTOR = exports.ENOT_OPERATING = exports.EINVALID_TIMESTAMP = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const System_addresses = __importStar(require("./system_addresses"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "timestamp";
exports.EINVALID_TIMESTAMP = (0, move_to_ts_1.u64)("2");
exports.ENOT_OPERATING = (0, move_to_ts_1.u64)("1");
exports.MICRO_CONVERSION_FACTOR = (0, move_to_ts_1.u64)("1000000");
class CurrentTimeMicroseconds {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.microseconds = proto['microseconds'];
    }
    static CurrentTimeMicrosecondsParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CurrentTimeMicroseconds);
        return new CurrentTimeMicroseconds(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, CurrentTimeMicroseconds, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, CurrentTimeMicroseconds, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CurrentTimeMicroseconds", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.CurrentTimeMicroseconds = CurrentTimeMicroseconds;
CurrentTimeMicroseconds.moduleAddress = exports.moduleAddress;
CurrentTimeMicroseconds.moduleName = exports.moduleName;
CurrentTimeMicroseconds.structName = "CurrentTimeMicroseconds";
CurrentTimeMicroseconds.typeParameters = [];
CurrentTimeMicroseconds.fields = [
    { name: "microseconds", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function now_microseconds_($c) {
    return $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(CurrentTimeMicroseconds), new aptos_1.HexString("0x1")).microseconds);
}
exports.now_microseconds_ = now_microseconds_;
function now_seconds_($c) {
    return (now_microseconds_($c)).div($.copy(exports.MICRO_CONVERSION_FACTOR));
}
exports.now_seconds_ = now_seconds_;
function set_time_has_started_(aptos_framework, $c) {
    let timer;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    timer = new CurrentTimeMicroseconds({ microseconds: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(CurrentTimeMicroseconds));
    $c.move_to(new move_to_ts_2.SimpleStructTag(CurrentTimeMicroseconds), aptos_framework, timer);
    return;
}
exports.set_time_has_started_ = set_time_has_started_;
function update_global_time_(account, proposer, timestamp, $c) {
    let global_timer, now;
    System_addresses.assert_vm_(account, $c);
    global_timer = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(CurrentTimeMicroseconds), new aptos_1.HexString("0x1"));
    now = $.copy(global_timer.microseconds);
    if ((($.copy(proposer)).hex() === (new aptos_1.HexString("0x0")).hex())) {
        if (!($.copy(now)).eq(($.copy(timestamp)))) {
            throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_TIMESTAMP), $c));
        }
    }
    else {
        if (!($.copy(now)).lt($.copy(timestamp))) {
            throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_TIMESTAMP), $c));
        }
        global_timer.microseconds = $.copy(timestamp);
    }
    return;
}
exports.update_global_time_ = update_global_time_;
function loadParsers(repo) {
    repo.addParser("0x1::timestamp::CurrentTimeMicroseconds", CurrentTimeMicroseconds.CurrentTimeMicrosecondsParser);
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
    get CurrentTimeMicroseconds() { return CurrentTimeMicroseconds; }
    loadCurrentTimeMicroseconds(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield CurrentTimeMicroseconds.load(this.repo, this.client, owner, []);
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
//# sourceMappingURL=timestamp.js.map