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
exports.App = exports.loadParsers = exports.treat_friend_as_private_ = exports.set_ = exports.is_enabled_ = exports.contains_ = exports.code_dependency_check_enabled_ = exports.change_feature_flags_ = exports.Features = exports.TREAT_FRIEND_AS_PRIVATE = exports.EFRAMEWORK_SIGNER_NEEDED = exports.CODE_DEPENDENCY_CHECK = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Signer = __importStar(require("./signer"));
const Vector = __importStar(require("./vector"));
exports.packageName = "MoveStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "features";
exports.CODE_DEPENDENCY_CHECK = (0, move_to_ts_1.u64)("1");
exports.EFRAMEWORK_SIGNER_NEEDED = (0, move_to_ts_1.u64)("1");
exports.TREAT_FRIEND_AS_PRIVATE = (0, move_to_ts_1.u64)("2");
class Features {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.features = proto['features'];
    }
    static FeaturesParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Features);
        return new Features(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, Features, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, Features, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Features", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Features = Features;
Features.moduleAddress = exports.moduleAddress;
Features.moduleName = exports.moduleName;
Features.structName = "Features";
Features.typeParameters = [];
Features.fields = [
    { name: "features", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
function change_feature_flags_(framework, enable, disable, $c) {
    let features, i, i__1, n, n__2;
    if (!((Signer.address_of_(framework, $c)).hex() === (new aptos_1.HexString("0x1")).hex())) {
        throw $.abortCode(Error.permission_denied_($.copy(exports.EFRAMEWORK_SIGNER_NEEDED), $c));
    }
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(Features), new aptos_1.HexString("0x1"))) {
        $c.move_to(new move_to_ts_2.SimpleStructTag(Features), framework, new Features({ features: [] }, new move_to_ts_2.SimpleStructTag(Features)));
    }
    else {
    }
    features = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(Features), new aptos_1.HexString("0x1")).features;
    i = (0, move_to_ts_1.u64)("0");
    n = Vector.length_(enable, $c, [move_to_ts_2.AtomicTypeTag.U64]);
    while (($.copy(i)).lt($.copy(n))) {
        {
            set_(features, $.copy(Vector.borrow_(enable, $.copy(i), $c, [move_to_ts_2.AtomicTypeTag.U64])), true, $c);
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    i__1 = (0, move_to_ts_1.u64)("0");
    n__2 = Vector.length_(disable, $c, [move_to_ts_2.AtomicTypeTag.U64]);
    while (($.copy(i__1)).lt($.copy(n__2))) {
        {
            set_(features, $.copy(Vector.borrow_(disable, $.copy(i__1), $c, [move_to_ts_2.AtomicTypeTag.U64])), false, $c);
            i__1 = ($.copy(i__1)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.change_feature_flags_ = change_feature_flags_;
function code_dependency_check_enabled_($c) {
    return is_enabled_($.copy(exports.CODE_DEPENDENCY_CHECK), $c);
}
exports.code_dependency_check_enabled_ = code_dependency_check_enabled_;
function contains_(features, feature, $c) {
    let temp$1, bit_mask, byte_index;
    byte_index = ($.copy(feature)).div((0, move_to_ts_1.u64)("8"));
    bit_mask = ((0, move_to_ts_1.u8)("1")).shl((0, move_to_ts_1.u8)(($.copy(feature)).mod((0, move_to_ts_1.u64)("8"))));
    if (($.copy(byte_index)).lt(Vector.length_(features, $c, [move_to_ts_2.AtomicTypeTag.U8]))) {
        temp$1 = (($.copy(Vector.borrow_(features, $.copy(byte_index), $c, [move_to_ts_2.AtomicTypeTag.U8]))).and($.copy(bit_mask))).neq((0, move_to_ts_1.u8)("0"));
    }
    else {
        temp$1 = false;
    }
    return temp$1;
}
exports.contains_ = contains_;
function is_enabled_(feature, $c) {
    let temp$1;
    if ($c.exists(new move_to_ts_2.SimpleStructTag(Features), new aptos_1.HexString("0x1"))) {
        temp$1 = contains_($c.borrow_global(new move_to_ts_2.SimpleStructTag(Features), new aptos_1.HexString("0x1")).features, $.copy(feature), $c);
    }
    else {
        temp$1 = false;
    }
    return temp$1;
}
exports.is_enabled_ = is_enabled_;
function set_(features, feature, include, $c) {
    let bit_mask, byte_index, entry;
    byte_index = ($.copy(feature)).div((0, move_to_ts_1.u64)("8"));
    bit_mask = ((0, move_to_ts_1.u8)("1")).shl((0, move_to_ts_1.u8)(($.copy(feature)).mod((0, move_to_ts_1.u64)("8"))));
    while ((Vector.length_(features, $c, [move_to_ts_2.AtomicTypeTag.U8])).le($.copy(byte_index))) {
        {
            Vector.push_back_(features, (0, move_to_ts_1.u8)("0"), $c, [move_to_ts_2.AtomicTypeTag.U8]);
        }
    }
    entry = Vector.borrow_mut_(features, $.copy(byte_index), $c, [move_to_ts_2.AtomicTypeTag.U8]);
    if (include) {
        $.set(entry, ($.copy(entry)).or($.copy(bit_mask)));
    }
    else {
        $.set(entry, ($.copy(entry)).and(((0, move_to_ts_1.u8)("255")).xor($.copy(bit_mask))));
    }
    return;
}
exports.set_ = set_;
function treat_friend_as_private_($c) {
    return is_enabled_($.copy(exports.TREAT_FRIEND_AS_PRIVATE), $c);
}
exports.treat_friend_as_private_ = treat_friend_as_private_;
function loadParsers(repo) {
    repo.addParser("0x1::features::Features", Features.FeaturesParser);
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
    get Features() { return Features; }
    loadFeatures(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield Features.load(this.repo, this.client, owner, []);
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
//# sourceMappingURL=features.js.map