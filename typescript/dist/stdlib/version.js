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
exports.App = exports.loadParsers = exports.buildPayload_set_version = exports.set_version_ = exports.initialize_for_test_ = exports.initialize_ = exports.Version = exports.SetVersionCapability = exports.ENOT_AUTHORIZED = exports.EINVALID_MAJOR_VERSION_NUMBER = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Reconfiguration = __importStar(require("./reconfiguration"));
const Signer = __importStar(require("./signer"));
const System_addresses = __importStar(require("./system_addresses"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "version";
exports.EINVALID_MAJOR_VERSION_NUMBER = (0, move_to_ts_1.u64)("1");
exports.ENOT_AUTHORIZED = (0, move_to_ts_1.u64)("2");
class SetVersionCapability {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
    }
    static SetVersionCapabilityParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, SetVersionCapability);
        return new SetVersionCapability(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, SetVersionCapability, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, SetVersionCapability, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "SetVersionCapability", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.SetVersionCapability = SetVersionCapability;
SetVersionCapability.moduleAddress = exports.moduleAddress;
SetVersionCapability.moduleName = exports.moduleName;
SetVersionCapability.structName = "SetVersionCapability";
SetVersionCapability.typeParameters = [];
SetVersionCapability.fields = [];
class Version {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.major = proto['major'];
    }
    static VersionParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Version);
        return new Version(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Version, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Version, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Version", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Version = Version;
Version.moduleAddress = exports.moduleAddress;
Version.moduleName = exports.moduleName;
Version.structName = "Version";
Version.typeParameters = [];
Version.fields = [
    { name: "major", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
function initialize_(aptos_framework, initial_version, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    $c.move_to(new move_to_ts_2.SimpleStructTag(Version), aptos_framework, new Version({ major: $.copy(initial_version) }, new move_to_ts_2.SimpleStructTag(Version)));
    $c.move_to(new move_to_ts_2.SimpleStructTag(SetVersionCapability), aptos_framework, new SetVersionCapability({}, new move_to_ts_2.SimpleStructTag(SetVersionCapability)));
    return;
}
exports.initialize_ = initialize_;
function initialize_for_test_(core_resources, $c) {
    System_addresses.assert_core_resource_(core_resources, $c);
    $c.move_to(new move_to_ts_2.SimpleStructTag(SetVersionCapability), core_resources, new SetVersionCapability({}, new move_to_ts_2.SimpleStructTag(SetVersionCapability)));
    return;
}
exports.initialize_for_test_ = initialize_for_test_;
function set_version_(account, major, $c) {
    let config, old_major;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(SetVersionCapability), Signer.address_of_(account, $c))) {
        throw $.abortCode(Error.permission_denied_($.copy(exports.ENOT_AUTHORIZED), $c));
    }
    old_major = $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(Version), new aptos_1.HexString("0x1")).major);
    if (!($.copy(old_major)).lt($.copy(major))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_MAJOR_VERSION_NUMBER), $c));
    }
    config = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Version), new aptos_1.HexString("0x1"));
    config.major = $.copy(major);
    Reconfiguration.reconfigure_($c);
    return;
}
exports.set_version_ = set_version_;
function buildPayload_set_version(major, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "version", "set_version", typeParamStrings, [
        major,
    ], isJSON);
}
exports.buildPayload_set_version = buildPayload_set_version;
function loadParsers(repo) {
    repo.addParser("0x1::version::SetVersionCapability", SetVersionCapability.SetVersionCapabilityParser);
    repo.addParser("0x1::version::Version", Version.VersionParser);
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
    get SetVersionCapability() { return SetVersionCapability; }
    loadSetVersionCapability(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield SetVersionCapability.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get Version() { return Version; }
    loadVersion(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Version.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    payload_set_version(major, isJSON = false) {
        return buildPayload_set_version(major, isJSON);
    }
    set_version(_account, major, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_set_version(major, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=version.js.map