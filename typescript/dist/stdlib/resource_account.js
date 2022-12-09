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
exports.App = exports.loadParsers = exports.rotate_account_authentication_key_and_store_capability_ = exports.retrieve_resource_account_cap_ = exports.buildPayload_create_resource_account_and_publish_package = exports.create_resource_account_and_publish_package_ = exports.buildPayload_create_resource_account_and_fund = exports.create_resource_account_and_fund_ = exports.buildPayload_create_resource_account = exports.create_resource_account_ = exports.Container = exports.ZERO_AUTH_KEY = exports.ECONTAINER_NOT_PUBLISHED = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Account = __importStar(require("./account"));
const Code = __importStar(require("./code"));
const Coin = __importStar(require("./coin"));
const Error = __importStar(require("./error"));
const Signer = __importStar(require("./signer"));
const Simple_map = __importStar(require("./simple_map"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "resource_account";
exports.ECONTAINER_NOT_PUBLISHED = (0, move_to_ts_1.u64)("1");
exports.ZERO_AUTH_KEY = [(0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0")];
class Container {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.store = proto['store'];
    }
    static ContainerParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Container);
        return new Container(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Container, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Container, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Container", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.store.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.Container = Container;
Container.moduleAddress = exports.moduleAddress;
Container.moduleName = exports.moduleName;
Container.structName = "Container";
Container.typeParameters = [];
Container.fields = [
    { name: "store", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "simple_map", "SimpleMap", [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", [])]) }
];
function create_resource_account_(origin, seed, optional_auth_key, $c) {
    let resource, resource_signer_cap;
    [resource, resource_signer_cap] = Account.create_resource_account_(origin, $.copy(seed), $c);
    rotate_account_authentication_key_and_store_capability_(origin, resource, resource_signer_cap, $.copy(optional_auth_key), $c);
    return;
}
exports.create_resource_account_ = create_resource_account_;
function buildPayload_create_resource_account(seed, optional_auth_key, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "resource_account", "create_resource_account", typeParamStrings, [
        seed,
        optional_auth_key,
    ], isJSON);
}
exports.buildPayload_create_resource_account = buildPayload_create_resource_account;
function create_resource_account_and_fund_(origin, seed, optional_auth_key, fund_amount, $c) {
    let resource, resource_signer_cap;
    [resource, resource_signer_cap] = Account.create_resource_account_(origin, $.copy(seed), $c);
    Coin.register_(resource, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    Coin.transfer_(origin, Signer.address_of_(resource, $c), $.copy(fund_amount), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "aptos_coin", "AptosCoin", [])]);
    rotate_account_authentication_key_and_store_capability_(origin, resource, resource_signer_cap, $.copy(optional_auth_key), $c);
    return;
}
exports.create_resource_account_and_fund_ = create_resource_account_and_fund_;
function buildPayload_create_resource_account_and_fund(seed, optional_auth_key, fund_amount, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "resource_account", "create_resource_account_and_fund", typeParamStrings, [
        seed,
        optional_auth_key,
        fund_amount,
    ], isJSON);
}
exports.buildPayload_create_resource_account_and_fund = buildPayload_create_resource_account_and_fund;
function create_resource_account_and_publish_package_(origin, seed, metadata_serialized, code, $c) {
    let resource, resource_signer_cap;
    [resource, resource_signer_cap] = Account.create_resource_account_(origin, $.copy(seed), $c);
    Code.publish_package_txn_(resource, $.copy(metadata_serialized), $.copy(code), $c);
    rotate_account_authentication_key_and_store_capability_(origin, resource, resource_signer_cap, $.copy(exports.ZERO_AUTH_KEY), $c);
    return;
}
exports.create_resource_account_and_publish_package_ = create_resource_account_and_publish_package_;
function buildPayload_create_resource_account_and_publish_package(seed, metadata_serialized, code, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "resource_account", "create_resource_account_and_publish_package", typeParamStrings, [
        seed,
        metadata_serialized,
        code,
    ], isJSON);
}
exports.buildPayload_create_resource_account_and_publish_package = buildPayload_create_resource_account_and_publish_package;
function retrieve_resource_account_cap_(resource, source_addr, $c) {
    let _resource_addr, container, container__1, empty_container, resource__2, resource_addr, resource_signer_cap, signer_cap;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Container), $.copy(source_addr))) {
        throw $.abortCode(Error.not_found_($.copy(exports.ECONTAINER_NOT_PUBLISHED), $c));
    }
    resource_addr = Signer.address_of_(resource, $c);
    container = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Container), $.copy(source_addr));
    [_resource_addr, signer_cap] = Simple_map.remove_(container.store, resource_addr, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", [])]);
    [resource_signer_cap, empty_container] = [signer_cap, (Simple_map.length_(container.store, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", [])])).eq(((0, move_to_ts_1.u64)("0")))];
    if (empty_container) {
        container__1 = $c.move_from(new move_to_ts_2.SimpleStructTag(Container), $.copy(source_addr));
        let { store: store } = container__1;
        Simple_map.destroy_empty_(store, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", [])]);
    }
    else {
    }
    resource__2 = Account.create_signer_with_capability_(resource_signer_cap, $c);
    Account.rotate_authentication_key_internal_(resource__2, $.copy(exports.ZERO_AUTH_KEY), $c);
    return resource_signer_cap;
}
exports.retrieve_resource_account_cap_ = retrieve_resource_account_cap_;
function rotate_account_authentication_key_and_store_capability_(origin, resource, resource_signer_cap, optional_auth_key, $c) {
    let temp$1, auth_key, container, origin_addr, resource_addr;
    origin_addr = Signer.address_of_(origin, $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Container), $.copy(origin_addr))) {
        $c.move_to(new move_to_ts_2.SimpleStructTag(Container), origin, new Container({ store: Simple_map.create_($c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", [])]) }, new move_to_ts_2.SimpleStructTag(Container)));
    }
    else {
    }
    container = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Container), $.copy(origin_addr));
    resource_addr = Signer.address_of_(resource, $c);
    Simple_map.add_(container.store, $.copy(resource_addr), resource_signer_cap, $c, [move_to_ts_2.AtomicTypeTag.Address, new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "account", "SignerCapability", [])]);
    if (Vector.is_empty_(optional_auth_key, $c, [move_to_ts_2.AtomicTypeTag.U8])) {
        temp$1 = Account.get_authentication_key_($.copy(origin_addr), $c);
    }
    else {
        temp$1 = $.copy(optional_auth_key);
    }
    auth_key = temp$1;
    Account.rotate_authentication_key_internal_(resource, $.copy(auth_key), $c);
    return;
}
exports.rotate_account_authentication_key_and_store_capability_ = rotate_account_authentication_key_and_store_capability_;
function loadParsers(repo) {
    repo.addParser("0x1::resource_account::Container", Container.ContainerParser);
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
    get Container() { return Container; }
    loadContainer(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Container.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    payload_create_resource_account(seed, optional_auth_key, isJSON = false) {
        return buildPayload_create_resource_account(seed, optional_auth_key, isJSON);
    }
    create_resource_account(_account, seed, optional_auth_key, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_create_resource_account(seed, optional_auth_key, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_create_resource_account_and_fund(seed, optional_auth_key, fund_amount, isJSON = false) {
        return buildPayload_create_resource_account_and_fund(seed, optional_auth_key, fund_amount, isJSON);
    }
    create_resource_account_and_fund(_account, seed, optional_auth_key, fund_amount, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_create_resource_account_and_fund(seed, optional_auth_key, fund_amount, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
    payload_create_resource_account_and_publish_package(seed, metadata_serialized, code, isJSON = false) {
        return buildPayload_create_resource_account_and_publish_package(seed, metadata_serialized, code, isJSON);
    }
    create_resource_account_and_publish_package(_account, seed, metadata_serialized, code, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_create_resource_account_and_publish_package(seed, metadata_serialized, code, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=resource_account.js.map