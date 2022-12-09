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
exports.App = exports.loadParsers = exports.validate_acquire_ = exports.root_addr_ = exports.revoke_ = exports.remove_element_ = exports.linear_root_addr_ = exports.delegate_ = exports.create_ = exports.add_element_ = exports.acquire_linear_ = exports.acquire_ = exports.LinearCap = exports.CapState = exports.CapDelegateState = exports.Cap = exports.EDELEGATE = exports.ECAPABILITY_NOT_FOUND = exports.ECAPABILITY_ALREADY_EXISTS = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Signer = __importStar(require("./signer"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "capability";
exports.ECAPABILITY_ALREADY_EXISTS = (0, move_to_ts_1.u64)("1");
exports.ECAPABILITY_NOT_FOUND = (0, move_to_ts_1.u64)("2");
exports.EDELEGATE = (0, move_to_ts_1.u64)("3");
class Cap {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.root = proto['root'];
    }
    static CapParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Cap);
        return new Cap(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Cap", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Cap = Cap;
Cap.moduleAddress = exports.moduleAddress;
Cap.moduleName = exports.moduleName;
Cap.structName = "Cap";
Cap.typeParameters = [
    { name: "Feature", isPhantom: true }
];
Cap.fields = [
    { name: "root", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class CapDelegateState {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.root = proto['root'];
    }
    static CapDelegateStateParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CapDelegateState);
        return new CapDelegateState(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, CapDelegateState, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, CapDelegateState, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CapDelegateState", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.CapDelegateState = CapDelegateState;
CapDelegateState.moduleAddress = exports.moduleAddress;
CapDelegateState.moduleName = exports.moduleName;
CapDelegateState.structName = "CapDelegateState";
CapDelegateState.typeParameters = [
    { name: "Feature", isPhantom: true }
];
CapDelegateState.fields = [
    { name: "root", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
class CapState {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.delegates = proto['delegates'];
    }
    static CapStateParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CapState);
        return new CapState(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, CapState, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, CapState, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CapState", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.CapState = CapState;
CapState.moduleAddress = exports.moduleAddress;
CapState.moduleName = exports.moduleName;
CapState.structName = "CapState";
CapState.typeParameters = [
    { name: "Feature", isPhantom: true }
];
CapState.fields = [
    { name: "delegates", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.Address) }
];
class LinearCap {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.root = proto['root'];
    }
    static LinearCapParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, LinearCap);
        return new LinearCap(proto, typeTag);
    }
    static makeTag($p) {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "LinearCap", $p);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.LinearCap = LinearCap;
LinearCap.moduleAddress = exports.moduleAddress;
LinearCap.moduleName = exports.moduleName;
LinearCap.structName = "LinearCap";
LinearCap.typeParameters = [
    { name: "Feature", isPhantom: true }
];
LinearCap.fields = [
    { name: "root", typeTag: move_to_ts_2.AtomicTypeTag.Address }
];
function acquire_(requester, _feature_witness, $c, $p) {
    return new Cap({ root: validate_acquire_(requester, $c, [$p[0]]) }, new move_to_ts_2.SimpleStructTag(Cap, [$p[0]]));
}
exports.acquire_ = acquire_;
function acquire_linear_(requester, _feature_witness, $c, $p) {
    return new LinearCap({ root: validate_acquire_(requester, $c, [$p[0]]) }, new move_to_ts_2.SimpleStructTag(LinearCap, [$p[0]]));
}
exports.acquire_linear_ = acquire_linear_;
function add_element_(v, x, $c, $p) {
    let temp$1, temp$2;
    [temp$1, temp$2] = [v, x];
    if (!Vector.contains_(temp$1, temp$2, $c, [$p[0]])) {
        Vector.push_back_(v, x, $c, [$p[0]]);
    }
    else {
    }
    return;
}
exports.add_element_ = add_element_;
function create_(owner, _feature_witness, $c, $p) {
    let addr;
    addr = Signer.address_of_(owner, $c);
    if (!!$c.exists(new move_to_ts_2.SimpleStructTag(CapState, [$p[0]]), $.copy(addr))) {
        throw $.abortCode(Error.already_exists_($.copy(exports.ECAPABILITY_ALREADY_EXISTS), $c));
    }
    $c.move_to(new move_to_ts_2.SimpleStructTag(CapState, [$p[0]]), owner, new CapState({ delegates: Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Address]) }, new move_to_ts_2.SimpleStructTag(CapState, [$p[0]])));
    return;
}
exports.create_ = create_;
function delegate_(cap, _feature_witness, to, $c, $p) {
    let addr;
    addr = Signer.address_of_(to, $c);
    if ($c.exists(new move_to_ts_2.SimpleStructTag(CapDelegateState, [$p[0]]), $.copy(addr))) {
        return;
    }
    else {
    }
    $c.move_to(new move_to_ts_2.SimpleStructTag(CapDelegateState, [$p[0]]), to, new CapDelegateState({ root: $.copy(cap.root) }, new move_to_ts_2.SimpleStructTag(CapDelegateState, [$p[0]])));
    add_element_($c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(CapState, [$p[0]]), $.copy(cap.root)).delegates, $.copy(addr), $c, [move_to_ts_2.AtomicTypeTag.Address]);
    return;
}
exports.delegate_ = delegate_;
function linear_root_addr_(cap, _feature_witness, $c, $p) {
    return $.copy(cap.root);
}
exports.linear_root_addr_ = linear_root_addr_;
function remove_element_(v, x, $c, $p) {
    let temp$1, temp$2, found, index;
    [temp$1, temp$2] = [v, x];
    [found, index] = Vector.index_of_(temp$1, temp$2, $c, [$p[0]]);
    if (found) {
        Vector.remove_(v, $.copy(index), $c, [$p[0]]);
    }
    else {
    }
    return;
}
exports.remove_element_ = remove_element_;
function revoke_(cap, _feature_witness, from, $c, $p) {
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(CapDelegateState, [$p[0]]), $.copy(from))) {
        return;
    }
    else {
    }
    let { root: _root } = $c.move_from(new move_to_ts_2.SimpleStructTag(CapDelegateState, [$p[0]]), $.copy(from));
    remove_element_($c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(CapState, [$p[0]]), $.copy(cap.root)).delegates, from, $c, [move_to_ts_2.AtomicTypeTag.Address]);
    return;
}
exports.revoke_ = revoke_;
function root_addr_(cap, _feature_witness, $c, $p) {
    return $.copy(cap.root);
}
exports.root_addr_ = root_addr_;
function validate_acquire_(requester, $c, $p) {
    let temp$1, addr, root_addr;
    addr = Signer.address_of_(requester, $c);
    if ($c.exists(new move_to_ts_2.SimpleStructTag(CapDelegateState, [$p[0]]), $.copy(addr))) {
        root_addr = $.copy($c.borrow_global(new move_to_ts_2.SimpleStructTag(CapDelegateState, [$p[0]]), $.copy(addr)).root);
        if (!$c.exists(new move_to_ts_2.SimpleStructTag(CapState, [$p[0]]), $.copy(root_addr))) {
            throw $.abortCode(Error.invalid_state_($.copy(exports.EDELEGATE), $c));
        }
        if (!Vector.contains_($c.borrow_global(new move_to_ts_2.SimpleStructTag(CapState, [$p[0]]), $.copy(root_addr)).delegates, addr, $c, [move_to_ts_2.AtomicTypeTag.Address])) {
            throw $.abortCode(Error.invalid_state_($.copy(exports.EDELEGATE), $c));
        }
        temp$1 = $.copy(root_addr);
    }
    else {
        if (!$c.exists(new move_to_ts_2.SimpleStructTag(CapState, [$p[0]]), $.copy(addr))) {
            throw $.abortCode(Error.not_found_($.copy(exports.ECAPABILITY_NOT_FOUND), $c));
        }
        temp$1 = $.copy(addr);
    }
    return temp$1;
}
exports.validate_acquire_ = validate_acquire_;
function loadParsers(repo) {
    repo.addParser("0x1::capability::Cap", Cap.CapParser);
    repo.addParser("0x1::capability::CapDelegateState", CapDelegateState.CapDelegateStateParser);
    repo.addParser("0x1::capability::CapState", CapState.CapStateParser);
    repo.addParser("0x1::capability::LinearCap", LinearCap.LinearCapParser);
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
    get Cap() { return Cap; }
    get CapDelegateState() { return CapDelegateState; }
    loadCapDelegateState(owner, $p, /* <Feature> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield CapDelegateState.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get CapState() { return CapState; }
    loadCapState(owner, $p, /* <Feature> */ loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield CapState.load(this.repo, this.client, owner, $p);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get LinearCap() { return LinearCap; }
}
exports.App = App;
//# sourceMappingURL=capability.js.map