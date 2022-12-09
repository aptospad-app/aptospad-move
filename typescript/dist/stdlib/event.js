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
exports.App = exports.loadParsers = exports.write_to_event_store_ = exports.new_event_handle_ = exports.guid_ = exports.emit_event_ = exports.destroy_handle_ = exports.counter_ = exports.EventHandle = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Bcs = __importStar(require("./bcs"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "event";
class EventHandle {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.counter = proto['counter'];
        this.guid = proto['guid'];
    }
    static EventHandleParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, EventHandle);
        return new EventHandle(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "EventHandle", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.guid.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.EventHandle = EventHandle;
EventHandle.moduleAddress = exports.moduleAddress;
EventHandle.moduleName = exports.moduleName;
EventHandle.structName = "EventHandle";
EventHandle.typeParameters = [
    { name: "T", isPhantom: true }
];
EventHandle.fields = [
    { name: "counter", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "guid", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "GUID", []) }
];
function counter_(handle_ref, $c, $p) {
    return $.copy(handle_ref.counter);
}
exports.counter_ = counter_;
function destroy_handle_(handle, $c, $p) {
    handle;
    return;
}
exports.destroy_handle_ = destroy_handle_;
function emit_event_(handle_ref, msg, $c, $p) {
    write_to_event_store_(Bcs.to_bytes_(handle_ref.guid, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "guid", "GUID", [])]), $.copy(handle_ref.counter), msg, $c, [$p[0]]);
    ;
    handle_ref.counter = ($.copy(handle_ref.counter)).add((0, move_to_ts_1.u64)("1"));
    return;
}
exports.emit_event_ = emit_event_;
function guid_(handle_ref, $c, $p) {
    return handle_ref.guid;
}
exports.guid_ = guid_;
function new_event_handle_(guid, $c, $p) {
    return new EventHandle({ counter: (0, move_to_ts_1.u64)("0"), guid: guid }, new move_to_ts_2.SimpleStructTag(EventHandle, [$p[0]]));
}
exports.new_event_handle_ = new_event_handle_;
function write_to_event_store_(guid, count, msg, $c, $p) {
    return $.aptos_framework_event_write_to_event_store(guid, count, msg, $c, [$p[0]]);
}
exports.write_to_event_store_ = write_to_event_store_;
function loadParsers(repo) {
    repo.addParser("0x1::event::EventHandle", EventHandle.EventHandleParser);
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
    get EventHandle() { return EventHandle; }
}
exports.App = App;
//# sourceMappingURL=event.js.map