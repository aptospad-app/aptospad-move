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
exports.App = exports.loadParsers = exports.buildPayload_register = exports.register_ = exports.buildPayload_mint = exports.mint_ = exports.buildPayload_initialize = exports.initialize_ = exports.buildPayload_burn = exports.burn_ = exports.Capabilities = exports.ENO_CAPABILITIES = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Coin = __importStar(require("./coin"));
const Error = __importStar(require("./error"));
const Signer = __importStar(require("./signer"));
const String = __importStar(require("./string"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "managed_coin";
exports.ENO_CAPABILITIES = (0, move_to_ts_1.u64)("1");
class Capabilities {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.burn_cap = proto['burn_cap'];
        this.freeze_cap = proto['freeze_cap'];
        this.mint_cap = proto['mint_cap'];
    }
    static CapabilitiesParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Capabilities);
        return new Capabilities(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Capabilities, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Capabilities, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Capabilities", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.burn_cap.loadFullState(app);
            yield this.freeze_cap.loadFullState(app);
            yield this.mint_cap.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Capabilities = Capabilities;
Capabilities.moduleAddress = exports.moduleAddress;
Capabilities.moduleName = exports.moduleName;
Capabilities.structName = "Capabilities";
Capabilities.typeParameters = [
    { name: "CoinType", isPhantom: true }
];
Capabilities.fields = [
    { name: "burn_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "BurnCapability", [new $.TypeParamIdx(0)]) },
    { name: "freeze_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "FreezeCapability", [new $.TypeParamIdx(0)]) },
    { name: "mint_cap", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "coin", "MintCapability", [new $.TypeParamIdx(0)]) }
];
function burn_(account, amount, $c, $p) {
    let account_addr, capabilities, to_burn;
    account_addr = Signer.address_of_(account, $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Capabilities, [$p[0]]), $.copy(account_addr))) {
        throw $.abortCode(Error.not_found_($.copy(exports.ENO_CAPABILITIES), $c));
    }
    capabilities = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Capabilities, [$p[0]]), $.copy(account_addr));
    to_burn = Coin.withdraw_(account, $.copy(amount), $c, [$p[0]]);
    Coin.burn_(to_burn, capabilities.burn_cap, $c, [$p[0]]);
    return;
}
exports.burn_ = burn_;
function buildPayload_burn(amount, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x1"), "managed_coin", "burn", typeParamStrings, [
        amount,
    ], isJSON);
}
exports.buildPayload_burn = buildPayload_burn;
function initialize_(account, name, symbol, decimals, monitor_supply, $c, $p) {
    let burn_cap, freeze_cap, mint_cap;
    [burn_cap, freeze_cap, mint_cap] = Coin.initialize_(account, String.utf8_($.copy(name), $c), String.utf8_($.copy(symbol), $c), $.copy(decimals), monitor_supply, $c, [$p[0]]);
    $c.move_to(new move_to_ts_2.SimpleStructTag(Capabilities, [$p[0]]), account, new Capabilities({ burn_cap: $.copy(burn_cap), freeze_cap: $.copy(freeze_cap), mint_cap: $.copy(mint_cap) }, new move_to_ts_2.SimpleStructTag(Capabilities, [$p[0]])));
    return;
}
exports.initialize_ = initialize_;
function buildPayload_initialize(name, symbol, decimals, monitor_supply, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x1"), "managed_coin", "initialize", typeParamStrings, [
        name,
        symbol,
        decimals,
        monitor_supply,
    ], isJSON);
}
exports.buildPayload_initialize = buildPayload_initialize;
function mint_(account, dst_addr, amount, $c, $p) {
    let account_addr, capabilities, coins_minted;
    account_addr = Signer.address_of_(account, $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Capabilities, [$p[0]]), $.copy(account_addr))) {
        throw $.abortCode(Error.not_found_($.copy(exports.ENO_CAPABILITIES), $c));
    }
    capabilities = $c.borrow_global(new move_to_ts_2.SimpleStructTag(Capabilities, [$p[0]]), $.copy(account_addr));
    coins_minted = Coin.mint_($.copy(amount), capabilities.mint_cap, $c, [$p[0]]);
    Coin.deposit_($.copy(dst_addr), coins_minted, $c, [$p[0]]);
    return;
}
exports.mint_ = mint_;
function buildPayload_mint(dst_addr, amount, $p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x1"), "managed_coin", "mint", typeParamStrings, [
        dst_addr,
        amount,
    ], isJSON);
}
exports.buildPayload_mint = buildPayload_mint;
function register_(account, $c, $p) {
    Coin.register_(account, $c, [$p[0]]);
    return;
}
exports.register_ = register_;
function buildPayload_register($p, /* <CoinType>*/ isJSON = false) {
    const typeParamStrings = $p.map(t => $.getTypeTagFullname(t));
    return $.buildPayload(new aptos_1.HexString("0x1"), "managed_coin", "register", typeParamStrings, [], isJSON);
}
exports.buildPayload_register = buildPayload_register;
function loadParsers(repo) {
    repo.addParser("0x1::managed_coin::Capabilities", Capabilities.CapabilitiesParser);
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
    get Capabilities() { return Capabilities; }
    loadCapabilities(owner, $p, /* <CoinType> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Capabilities.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    payload_burn(amount, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_burn(amount, $p, isJSON);
    }
    burn(_account, amount, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_burn(amount, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_initialize(name, symbol, decimals, monitor_supply, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_initialize(name, symbol, decimals, monitor_supply, $p, isJSON);
    }
    initialize(_account, name, symbol, decimals, monitor_supply, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_initialize(name, symbol, decimals, monitor_supply, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_mint(dst_addr, amount, $p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_mint(dst_addr, amount, $p, isJSON);
    }
    mint(_account, dst_addr, amount, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_mint(dst_addr, amount, $p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_register($p, /* <CoinType>*/ isJSON = false) {
        return buildPayload_register($p, isJSON);
    }
    register(_account, $p, /* <CoinType>*/ option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_register($p, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=managed_coin.js.map