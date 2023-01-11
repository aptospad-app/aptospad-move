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
exports.App = exports.loadParsers = exports.retrieveResourceSignerCap_ = exports.buildPayload_initializeWithResourceAccount = exports.initializeWithResourceAccount_ = exports.BootResourceSignerStore = exports.ERR_PERMISSIONS = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Stdlib = __importStar(require("../stdlib"));
exports.packageName = "AptosPadCoinBoot";
exports.moduleAddress = new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0");
exports.moduleName = "aptospad_coin_boot";
exports.ERR_PERMISSIONS = (0, move_to_ts_1.u64)("403");
class BootResourceSignerStore {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.resource_signer_cap = proto['resource_signer_cap'];
    }
    static BootResourceSignerStoreParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, BootResourceSignerStore);
        return new BootResourceSignerStore(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, BootResourceSignerStore, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, BootResourceSignerStore, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "BootResourceSignerStore", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.resource_signer_cap.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.BootResourceSignerStore = BootResourceSignerStore;
BootResourceSignerStore.moduleAddress = exports.moduleAddress;
BootResourceSignerStore.moduleName = exports.moduleName;
BootResourceSignerStore.structName = "BootResourceSignerStore";
BootResourceSignerStore.typeParameters = [];
BootResourceSignerStore.fields = [
    { name: "resource_signer_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", []) }
];
function initializeWithResourceAccount_(aptospadAdmin, metadata, byteCode, $c) {
    let resourceSigner, resourceSignerCap;
    if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
        throw $.abortCode($.copy(exports.ERR_PERMISSIONS));
    }
    [resourceSigner, resourceSignerCap] = Stdlib.Account.create_resource_account_(aptospadAdmin, [(0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("110"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("100")], $c);
    Stdlib.Code.publish_package_txn_(resourceSigner, $.copy(metadata), [$.copy(byteCode)], $c);
    $c.move_to(new move_to_ts_2.SimpleStructTag(BootResourceSignerStore), aptospadAdmin, new BootResourceSignerStore({ resource_signer_cap: resourceSignerCap }, new move_to_ts_2.SimpleStructTag(BootResourceSignerStore)));
    return;
}
exports.initializeWithResourceAccount_ = initializeWithResourceAccount_;
function buildPayload_initializeWithResourceAccount(metadata, byteCode, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0"), "aptospad_coin_boot", "initializeWithResourceAccount", typeParamStrings, [
        metadata,
        byteCode,
    ], isJSON);
}
exports.buildPayload_initializeWithResourceAccount = buildPayload_initializeWithResourceAccount;
function retrieveResourceSignerCap_(aptospadAdmin, $c) {
    if (!((Stdlib.Signer.address_of_(aptospadAdmin, $c)).hex() === (new aptos_1.HexString("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0")).hex())) {
        throw $.abortCode($.copy(exports.ERR_PERMISSIONS));
    }
    let { resource_signer_cap: resource_signer_cap } = $c.move_from(new move_to_ts_2.SimpleStructTag(BootResourceSignerStore), Stdlib.Signer.address_of_(aptospadAdmin, $c));
    return resource_signer_cap;
}
exports.retrieveResourceSignerCap_ = retrieveResourceSignerCap_;
function loadParsers(repo) {
    repo.addParser("0x66399f077b2ad75c583d0d093a46276ed58632a22c9541de6351d2cff254c0f0::aptospad_coin_boot::BootResourceSignerStore", BootResourceSignerStore.BootResourceSignerStoreParser);
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
    get BootResourceSignerStore() { return BootResourceSignerStore; }
    loadBootResourceSignerStore(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield BootResourceSignerStore.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    payload_initializeWithResourceAccount(metadata, byteCode, isJSON = false) {
        return buildPayload_initializeWithResourceAccount(metadata, byteCode, isJSON);
    }
    initializeWithResourceAccount(_account, metadata, byteCode, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_initializeWithResourceAccount(metadata, byteCode, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=aptospad_coin_boot.js.map