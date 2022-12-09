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
exports.App = exports.loadParsers = exports.store_aptos_coin_burn_cap_ = exports.burn_fee_ = exports.AptosCoinCapabilities = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Coin = __importStar(require("./coin"));
const System_addresses = __importStar(require("./system_addresses"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "transaction_fee";
class AptosCoinCapabilities {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.burn_cap = proto['burn_cap'];
    }
    static AptosCoinCapabilitiesParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AptosCoinCapabilities);
        return new AptosCoinCapabilities(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, AptosCoinCapabilities, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, AptosCoinCapabilities, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_1.StructTag(exports.moduleAddress, exports.moduleName, "AptosCoinCapabilities", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.burn_cap.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.AptosCoinCapabilities = AptosCoinCapabilities;
AptosCoinCapabilities.moduleAddress = exports.moduleAddress;
AptosCoinCapabilities.moduleName = exports.moduleName;
AptosCoinCapabilities.structName = "AptosCoinCapabilities";
AptosCoinCapabilities.typeParameters = [];
AptosCoinCapabilities.fields = [
    { name: "burn_cap", typeTag: new move_to_ts_1.StructTag(new aptos_1.HexString("0x1"), "coin", "BurnCapability", [new move_to_ts_1.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]) }
];
function burn_fee_(account, fee, $c) {
    Coin.burn_from_($.copy(account), $.copy(fee), $c.borrow_global(new move_to_ts_1.SimpleStructTag(AptosCoinCapabilities), new aptos_1.HexString("0x1")).burn_cap, $c, [new move_to_ts_1.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    return;
}
exports.burn_fee_ = burn_fee_;
function store_aptos_coin_burn_cap_(aptos_framework, burn_cap, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    return $c.move_to(new move_to_ts_1.SimpleStructTag(AptosCoinCapabilities), aptos_framework, new AptosCoinCapabilities({ burn_cap: $.copy(burn_cap) }, new move_to_ts_1.SimpleStructTag(AptosCoinCapabilities)));
}
exports.store_aptos_coin_burn_cap_ = store_aptos_coin_burn_cap_;
function loadParsers(repo) {
    repo.addParser("0x1::transaction_fee::AptosCoinCapabilities", AptosCoinCapabilities.AptosCoinCapabilitiesParser);
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
    get AptosCoinCapabilities() { return AptosCoinCapabilities; }
    loadAptosCoinCapabilities(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield AptosCoinCapabilities.load(this.repo, this.client, owner, []);
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
//# sourceMappingURL=transaction_fee.js.map