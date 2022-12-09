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
exports.App = exports.loadParsers = exports.set_ = exports.initialize_ = exports.ConsensusConfig = exports.EINVALID_CONFIG = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Reconfiguration = __importStar(require("./reconfiguration"));
const System_addresses = __importStar(require("./system_addresses"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "consensus_config";
exports.EINVALID_CONFIG = (0, move_to_ts_1.u64)("1");
class ConsensusConfig {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.config = proto['config'];
    }
    static ConsensusConfigParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ConsensusConfig);
        return new ConsensusConfig(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, ConsensusConfig, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, ConsensusConfig, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ConsensusConfig", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.ConsensusConfig = ConsensusConfig;
ConsensusConfig.moduleAddress = exports.moduleAddress;
ConsensusConfig.moduleName = exports.moduleName;
ConsensusConfig.structName = "ConsensusConfig";
ConsensusConfig.typeParameters = [];
ConsensusConfig.fields = [
    { name: "config", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
function initialize_(aptos_framework, config, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (!(Vector.length_(config, $c, [move_to_ts_2.AtomicTypeTag.U8])).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_CONFIG), $c));
    }
    $c.move_to(new move_to_ts_2.SimpleStructTag(ConsensusConfig), aptos_framework, new ConsensusConfig({ config: $.copy(config) }, new move_to_ts_2.SimpleStructTag(ConsensusConfig)));
    return;
}
exports.initialize_ = initialize_;
function set_(account, config, $c) {
    let config_ref;
    System_addresses.assert_aptos_framework_(account, $c);
    if (!(Vector.length_(config, $c, [move_to_ts_2.AtomicTypeTag.U8])).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_CONFIG), $c));
    }
    config_ref = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(ConsensusConfig), new aptos_1.HexString("0x1")).config;
    $.set(config_ref, $.copy(config));
    Reconfiguration.reconfigure_($c);
    return;
}
exports.set_ = set_;
function loadParsers(repo) {
    repo.addParser("0x1::consensus_config::ConsensusConfig", ConsensusConfig.ConsensusConfigParser);
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
    get ConsensusConfig() { return ConsensusConfig; }
    loadConsensusConfig(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield ConsensusConfig.load(this.repo, this.client, owner, []);
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
//# sourceMappingURL=consensus_config.js.map