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
exports.App = exports.loadParsers = exports.set_genesis_end_ = exports.is_operating_ = exports.is_genesis_ = exports.assert_operating_ = exports.assert_genesis_ = exports.GenesisEndMarker = exports.ENOT_OPERATING = exports.ENOT_GENESIS = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const System_addresses = __importStar(require("./system_addresses"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "chain_status";
exports.ENOT_GENESIS = (0, move_to_ts_1.u64)("2");
exports.ENOT_OPERATING = (0, move_to_ts_1.u64)("1");
class GenesisEndMarker {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
    }
    static GenesisEndMarkerParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, GenesisEndMarker);
        return new GenesisEndMarker(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, GenesisEndMarker, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, GenesisEndMarker, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "GenesisEndMarker", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.GenesisEndMarker = GenesisEndMarker;
GenesisEndMarker.moduleAddress = exports.moduleAddress;
GenesisEndMarker.moduleName = exports.moduleName;
GenesisEndMarker.structName = "GenesisEndMarker";
GenesisEndMarker.typeParameters = [];
GenesisEndMarker.fields = [];
function assert_genesis_($c) {
    if (!is_genesis_($c)) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.ENOT_OPERATING), $c));
    }
    return;
}
exports.assert_genesis_ = assert_genesis_;
function assert_operating_($c) {
    if (!is_operating_($c)) {
        throw $.abortCode(Error.invalid_state_($.copy(exports.ENOT_OPERATING), $c));
    }
    return;
}
exports.assert_operating_ = assert_operating_;
function is_genesis_($c) {
    return !$c.exists(new move_to_ts_2.SimpleStructTag(GenesisEndMarker), new aptos_1.HexString("0x1"));
}
exports.is_genesis_ = is_genesis_;
function is_operating_($c) {
    return $c.exists(new move_to_ts_2.SimpleStructTag(GenesisEndMarker), new aptos_1.HexString("0x1"));
}
exports.is_operating_ = is_operating_;
function set_genesis_end_(aptos_framework, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    $c.move_to(new move_to_ts_2.SimpleStructTag(GenesisEndMarker), aptos_framework, new GenesisEndMarker({}, new move_to_ts_2.SimpleStructTag(GenesisEndMarker)));
    return;
}
exports.set_genesis_end_ = set_genesis_end_;
function loadParsers(repo) {
    repo.addParser("0x1::chain_status::GenesisEndMarker", GenesisEndMarker.GenesisEndMarkerParser);
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
    get GenesisEndMarker() { return GenesisEndMarker; }
    loadGenesisEndMarker(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield GenesisEndMarker.load(this.repo, this.client, owner, []);
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
//# sourceMappingURL=chain_status.js.map