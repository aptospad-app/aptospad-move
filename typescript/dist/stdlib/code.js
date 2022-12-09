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
exports.App = exports.loadParsers = exports.upgrade_policy_immutable_ = exports.upgrade_policy_compat_ = exports.upgrade_policy_arbitrary_ = exports.request_publish_with_allowed_deps_ = exports.request_publish_ = exports.buildPayload_publish_package_txn = exports.publish_package_txn_ = exports.publish_package_ = exports.is_policy_exempted_address_ = exports.initialize_ = exports.get_module_names_ = exports.check_upgradability_ = exports.check_dependencies_ = exports.check_coexistence_ = exports.can_change_upgrade_policy_to_ = exports.UpgradePolicy = exports.PackageRegistry = exports.PackageMetadata = exports.PackageDep = exports.ModuleMetadata = exports.AllowedDep = exports.EUPGRADE_WEAKER_POLICY = exports.EUPGRADE_IMMUTABLE = exports.EPACKAGE_DEP_MISSING = exports.EMODULE_NAME_CLASH = exports.EMODULE_MISSING = exports.EINCOMPATIBLE_POLICY_DISABLED = exports.EDEP_WEAKER_POLICY = exports.EDEP_ARBITRARY_NOT_SAME_ADDRESS = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Features = __importStar(require("./features"));
const Signer = __importStar(require("./signer"));
const String = __importStar(require("./string"));
const System_addresses = __importStar(require("./system_addresses"));
const Util = __importStar(require("./util"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "code";
exports.EDEP_ARBITRARY_NOT_SAME_ADDRESS = (0, move_to_ts_1.u64)("7");
exports.EDEP_WEAKER_POLICY = (0, move_to_ts_1.u64)("6");
exports.EINCOMPATIBLE_POLICY_DISABLED = (0, move_to_ts_1.u64)("8");
exports.EMODULE_MISSING = (0, move_to_ts_1.u64)("4");
exports.EMODULE_NAME_CLASH = (0, move_to_ts_1.u64)("1");
exports.EPACKAGE_DEP_MISSING = (0, move_to_ts_1.u64)("5");
exports.EUPGRADE_IMMUTABLE = (0, move_to_ts_1.u64)("2");
exports.EUPGRADE_WEAKER_POLICY = (0, move_to_ts_1.u64)("3");
class AllowedDep {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.account = proto['account'];
        this.module_name = proto['module_name'];
    }
    static AllowedDepParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, AllowedDep);
        return new AllowedDep(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "AllowedDep", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.module_name.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.AllowedDep = AllowedDep;
AllowedDep.moduleAddress = exports.moduleAddress;
AllowedDep.moduleName = exports.moduleName;
AllowedDep.structName = "AllowedDep";
AllowedDep.typeParameters = [];
AllowedDep.fields = [
    { name: "account", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "module_name", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) }
];
class ModuleMetadata {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.name = proto['name'];
        this.source = proto['source'];
        this.source_map = proto['source_map'];
        this.extension = proto['extension'];
    }
    static ModuleMetadataParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, ModuleMetadata);
        return new ModuleMetadata(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "ModuleMetadata", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.name.loadFullState(app);
            yield this.extension.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.ModuleMetadata = ModuleMetadata;
ModuleMetadata.moduleAddress = exports.moduleAddress;
ModuleMetadata.moduleName = exports.moduleName;
ModuleMetadata.structName = "ModuleMetadata";
ModuleMetadata.typeParameters = [];
ModuleMetadata.fields = [
    { name: "name", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "source", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "source_map", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "extension", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "copyable_any", "Any", [])]) }
];
class PackageDep {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.account = proto['account'];
        this.package_name = proto['package_name'];
    }
    static PackageDepParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, PackageDep);
        return new PackageDep(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "PackageDep", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.package_name.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.PackageDep = PackageDep;
PackageDep.moduleAddress = exports.moduleAddress;
PackageDep.moduleName = exports.moduleName;
PackageDep.structName = "PackageDep";
PackageDep.typeParameters = [];
PackageDep.fields = [
    { name: "account", typeTag: move_to_ts_2.AtomicTypeTag.Address },
    { name: "package_name", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) }
];
class PackageMetadata {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.name = proto['name'];
        this.upgrade_policy = proto['upgrade_policy'];
        this.upgrade_number = proto['upgrade_number'];
        this.source_digest = proto['source_digest'];
        this.manifest = proto['manifest'];
        this.modules = proto['modules'];
        this.deps = proto['deps'];
        this.extension = proto['extension'];
    }
    static PackageMetadataParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, PackageMetadata);
        return new PackageMetadata(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "PackageMetadata", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.name.loadFullState(app);
            yield this.upgrade_policy.loadFullState(app);
            yield this.source_digest.loadFullState(app);
            yield this.extension.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.PackageMetadata = PackageMetadata;
PackageMetadata.moduleAddress = exports.moduleAddress;
PackageMetadata.moduleName = exports.moduleName;
PackageMetadata.structName = "PackageMetadata";
PackageMetadata.typeParameters = [];
PackageMetadata.fields = [
    { name: "name", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "upgrade_policy", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "code", "UpgradePolicy", []) },
    { name: "upgrade_number", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "source_digest", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", []) },
    { name: "manifest", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) },
    { name: "modules", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "code", "ModuleMetadata", [])) },
    { name: "deps", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "code", "PackageDep", [])) },
    { name: "extension", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "option", "Option", [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "copyable_any", "Any", [])]) }
];
class PackageRegistry {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.packages = proto['packages'];
    }
    static PackageRegistryParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, PackageRegistry);
        return new PackageRegistry(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, PackageRegistry, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, PackageRegistry, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "PackageRegistry", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.PackageRegistry = PackageRegistry;
PackageRegistry.moduleAddress = exports.moduleAddress;
PackageRegistry.moduleName = exports.moduleName;
PackageRegistry.structName = "PackageRegistry";
PackageRegistry.typeParameters = [];
PackageRegistry.fields = [
    { name: "packages", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "code", "PackageMetadata", [])) }
];
class UpgradePolicy {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.policy = proto['policy'];
    }
    static UpgradePolicyParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, UpgradePolicy);
        return new UpgradePolicy(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "UpgradePolicy", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.UpgradePolicy = UpgradePolicy;
UpgradePolicy.moduleAddress = exports.moduleAddress;
UpgradePolicy.moduleName = exports.moduleName;
UpgradePolicy.structName = "UpgradePolicy";
UpgradePolicy.typeParameters = [];
UpgradePolicy.fields = [
    { name: "policy", typeTag: move_to_ts_2.AtomicTypeTag.U8 }
];
function can_change_upgrade_policy_to_(from, to, $c) {
    return ($.copy(from.policy)).le($.copy(to.policy));
}
exports.can_change_upgrade_policy_to_ = can_change_upgrade_policy_to_;
function check_coexistence_(old_pack, new_modules, $c) {
    let i, j, name, old_mod;
    i = (0, move_to_ts_1.u64)("0");
    while (($.copy(i)).lt(Vector.length_(old_pack.modules, $c, [new move_to_ts_2.SimpleStructTag(ModuleMetadata)]))) {
        {
            old_mod = Vector.borrow_(old_pack.modules, $.copy(i), $c, [new move_to_ts_2.SimpleStructTag(ModuleMetadata)]);
            j = (0, move_to_ts_1.u64)("0");
            while (($.copy(j)).lt(Vector.length_(new_modules, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]))) {
                {
                    name = Vector.borrow_(new_modules, $.copy(j), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]);
                    if (!!$.deep_eq(old_mod.name, name)) {
                        throw $.abortCode(Error.already_exists_($.copy(exports.EMODULE_NAME_CLASH), $c));
                    }
                    j = ($.copy(j)).add((0, move_to_ts_1.u64)("1"));
                }
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.check_coexistence_ = check_coexistence_;
function check_dependencies_(publish_address, pack, $c) {
    let account, account__1, allowed_module_deps, dep, dep_pack, deps, found, i, j, k, m, module_name, module_name__2, n, r, registry;
    allowed_module_deps = Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(AllowedDep)]);
    deps = pack.deps;
    i = (0, move_to_ts_1.u64)("0");
    n = Vector.length_(deps, $c, [new move_to_ts_2.SimpleStructTag(PackageDep)]);
    while (($.copy(i)).lt($.copy(n))) {
        {
            dep = Vector.borrow_(deps, $.copy(i), $c, [new move_to_ts_2.SimpleStructTag(PackageDep)]);
            if (!$c.exists(new move_to_ts_2.SimpleStructTag(PackageRegistry), $.copy(dep.account))) {
                throw $.abortCode(Error.not_found_($.copy(exports.EPACKAGE_DEP_MISSING), $c));
            }
            if (is_policy_exempted_address_($.copy(dep.account), $c)) {
                account = $.copy(dep.account);
                module_name = String.utf8_([], $c);
                Vector.push_back_(allowed_module_deps, new AllowedDep({ account: $.copy(account), module_name: $.copy(module_name) }, new move_to_ts_2.SimpleStructTag(AllowedDep)), $c, [new move_to_ts_2.SimpleStructTag(AllowedDep)]);
                i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
                continue;
            }
            else {
            }
            registry = $c.borrow_global(new move_to_ts_2.SimpleStructTag(PackageRegistry), $.copy(dep.account));
            j = (0, move_to_ts_1.u64)("0");
            m = Vector.length_(registry.packages, $c, [new move_to_ts_2.SimpleStructTag(PackageMetadata)]);
            found = false;
            while (($.copy(j)).lt($.copy(m))) {
                {
                    dep_pack = Vector.borrow_(registry.packages, $.copy(j), $c, [new move_to_ts_2.SimpleStructTag(PackageMetadata)]);
                    if ($.deep_eq($.copy(dep_pack.name), $.copy(dep.package_name))) {
                        found = true;
                        if (!($.copy(dep_pack.upgrade_policy.policy)).ge($.copy(pack.upgrade_policy.policy))) {
                            throw $.abortCode(Error.invalid_argument_($.copy(exports.EDEP_WEAKER_POLICY), $c));
                        }
                        if ($.deep_eq($.copy(dep_pack.upgrade_policy), upgrade_policy_arbitrary_($c))) {
                            if (!(($.copy(dep.account)).hex() === ($.copy(publish_address)).hex())) {
                                throw $.abortCode(Error.invalid_argument_($.copy(exports.EDEP_ARBITRARY_NOT_SAME_ADDRESS), $c));
                            }
                        }
                        else {
                        }
                        k = (0, move_to_ts_1.u64)("0");
                        r = Vector.length_(dep_pack.modules, $c, [new move_to_ts_2.SimpleStructTag(ModuleMetadata)]);
                        while (($.copy(k)).lt($.copy(r))) {
                            {
                                account__1 = $.copy(dep.account);
                                module_name__2 = $.copy(Vector.borrow_(dep_pack.modules, $.copy(k), $c, [new move_to_ts_2.SimpleStructTag(ModuleMetadata)]).name);
                                Vector.push_back_(allowed_module_deps, new AllowedDep({ account: $.copy(account__1), module_name: $.copy(module_name__2) }, new move_to_ts_2.SimpleStructTag(AllowedDep)), $c, [new move_to_ts_2.SimpleStructTag(AllowedDep)]);
                                k = ($.copy(k)).add((0, move_to_ts_1.u64)("1"));
                            }
                        }
                        break;
                    }
                    else {
                    }
                    j = ($.copy(j)).add((0, move_to_ts_1.u64)("1"));
                }
            }
            if (!found) {
                throw $.abortCode(Error.not_found_($.copy(exports.EPACKAGE_DEP_MISSING), $c));
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return allowed_module_deps;
}
exports.check_dependencies_ = check_dependencies_;
function check_upgradability_(old_pack, new_pack, new_modules, $c) {
    let temp$1, i, old_modules;
    temp$1 = upgrade_policy_immutable_($c);
    if (!($.copy(old_pack.upgrade_policy.policy)).lt($.copy(temp$1.policy))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EUPGRADE_IMMUTABLE), $c));
    }
    if (!can_change_upgrade_policy_to_($.copy(old_pack.upgrade_policy), $.copy(new_pack.upgrade_policy), $c)) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EUPGRADE_WEAKER_POLICY), $c));
    }
    old_modules = get_module_names_(old_pack, $c);
    i = (0, move_to_ts_1.u64)("0");
    while (($.copy(i)).lt(Vector.length_(old_modules, $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]))) {
        {
            if (!Vector.contains_(new_modules, Vector.borrow_(old_modules, $.copy(i), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])])) {
                throw $.abortCode($.copy(exports.EMODULE_MISSING));
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.check_upgradability_ = check_upgradability_;
function get_module_names_(pack, $c) {
    let i, module_names;
    module_names = Vector.empty_($c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]);
    i = (0, move_to_ts_1.u64)("0");
    while (($.copy(i)).lt(Vector.length_(pack.modules, $c, [new move_to_ts_2.SimpleStructTag(ModuleMetadata)]))) {
        {
            Vector.push_back_(module_names, $.copy(Vector.borrow_(pack.modules, $.copy(i), $c, [new move_to_ts_2.SimpleStructTag(ModuleMetadata)]).name), $c, [new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "string", "String", [])]);
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return $.copy(module_names);
}
exports.get_module_names_ = get_module_names_;
function initialize_(aptos_framework, package_owner, metadata, $c) {
    let addr;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    addr = Signer.address_of_(package_owner, $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(PackageRegistry), $.copy(addr))) {
        $c.move_to(new move_to_ts_2.SimpleStructTag(PackageRegistry), package_owner, new PackageRegistry({ packages: [metadata] }, new move_to_ts_2.SimpleStructTag(PackageRegistry)));
    }
    else {
        Vector.push_back_($c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(PackageRegistry), $.copy(addr)).packages, metadata, $c, [new move_to_ts_2.SimpleStructTag(PackageMetadata)]);
    }
    return;
}
exports.initialize_ = initialize_;
function is_policy_exempted_address_(addr, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9;
    if ((($.copy(addr)).hex() === (new aptos_1.HexString("0x1")).hex())) {
        temp$1 = true;
    }
    else {
        temp$1 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x2")).hex());
    }
    if (temp$1) {
        temp$2 = true;
    }
    else {
        temp$2 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x3")).hex());
    }
    if (temp$2) {
        temp$3 = true;
    }
    else {
        temp$3 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x4")).hex());
    }
    if (temp$3) {
        temp$4 = true;
    }
    else {
        temp$4 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x5")).hex());
    }
    if (temp$4) {
        temp$5 = true;
    }
    else {
        temp$5 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x6")).hex());
    }
    if (temp$5) {
        temp$6 = true;
    }
    else {
        temp$6 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x7")).hex());
    }
    if (temp$6) {
        temp$7 = true;
    }
    else {
        temp$7 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x8")).hex());
    }
    if (temp$7) {
        temp$8 = true;
    }
    else {
        temp$8 = (($.copy(addr)).hex() === (new aptos_1.HexString("0x9")).hex());
    }
    if (temp$8) {
        temp$9 = true;
    }
    else {
        temp$9 = (($.copy(addr)).hex() === (new aptos_1.HexString("0xa")).hex());
    }
    return temp$9;
}
exports.is_policy_exempted_address_ = is_policy_exempted_address_;
function publish_package_(owner, pack, code, $c) {
    let temp$1, temp$2, temp$3, addr, allowed_deps, i, index, len, module_names, old, packages, policy, upgrade_number;
    temp$1 = upgrade_policy_arbitrary_($c);
    if (!($.copy(pack.upgrade_policy.policy)).gt($.copy(temp$1.policy))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINCOMPATIBLE_POLICY_DISABLED), $c));
    }
    addr = Signer.address_of_(owner, $c);
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(PackageRegistry), $.copy(addr))) {
        $c.move_to(new move_to_ts_2.SimpleStructTag(PackageRegistry), owner, new PackageRegistry({ packages: Vector.empty_($c, [new move_to_ts_2.SimpleStructTag(PackageMetadata)]) }, new move_to_ts_2.SimpleStructTag(PackageRegistry)));
    }
    else {
    }
    allowed_deps = check_dependencies_($.copy(addr), pack, $c);
    module_names = get_module_names_(pack, $c);
    packages = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(PackageRegistry), $.copy(addr)).packages;
    len = Vector.length_(packages, $c, [new move_to_ts_2.SimpleStructTag(PackageMetadata)]);
    index = $.copy(len);
    i = (0, move_to_ts_1.u64)("0");
    upgrade_number = (0, move_to_ts_1.u64)("0");
    while (($.copy(i)).lt($.copy(len))) {
        {
            [temp$2, temp$3] = [packages, $.copy(i)];
            old = Vector.borrow_(temp$2, temp$3, $c, [new move_to_ts_2.SimpleStructTag(PackageMetadata)]);
            if ($.deep_eq($.copy(old.name), $.copy(pack.name))) {
                upgrade_number = ($.copy(old.upgrade_number)).add((0, move_to_ts_1.u64)("1"));
                check_upgradability_(old, pack, module_names, $c);
                index = $.copy(i);
            }
            else {
                check_coexistence_(old, module_names, $c);
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    pack.upgrade_number = $.copy(upgrade_number);
    policy = $.copy(pack.upgrade_policy);
    if (($.copy(index)).lt($.copy(len))) {
        $.set(Vector.borrow_mut_(packages, $.copy(index), $c, [new move_to_ts_2.SimpleStructTag(PackageMetadata)]), pack);
    }
    else {
        Vector.push_back_(packages, pack, $c, [new move_to_ts_2.SimpleStructTag(PackageMetadata)]);
    }
    if (Features.code_dependency_check_enabled_($c)) {
        request_publish_with_allowed_deps_($.copy(addr), $.copy(module_names), allowed_deps, $.copy(code), $.copy(policy.policy), $c);
    }
    else {
        request_publish_($.copy(addr), $.copy(module_names), $.copy(code), $.copy(policy.policy), $c);
    }
    return;
}
exports.publish_package_ = publish_package_;
function publish_package_txn_(owner, metadata_serialized, code, $c) {
    return publish_package_(owner, Util.from_bytes_($.copy(metadata_serialized), $c, [new move_to_ts_2.SimpleStructTag(PackageMetadata)]), $.copy(code), $c);
}
exports.publish_package_txn_ = publish_package_txn_;
function buildPayload_publish_package_txn(metadata_serialized, code, isJSON = false) {
    const typeParamStrings = [];
    return $.buildPayload(new aptos_1.HexString("0x1"), "code", "publish_package_txn", typeParamStrings, [
        metadata_serialized,
        code,
    ], isJSON);
}
exports.buildPayload_publish_package_txn = buildPayload_publish_package_txn;
function request_publish_(owner, expected_modules, bundle, policy, $c) {
    return $.aptos_framework_code_request_publish(owner, expected_modules, bundle, policy, $c);
}
exports.request_publish_ = request_publish_;
function request_publish_with_allowed_deps_(owner, expected_modules, allowed_deps, bundle, policy, $c) {
    return $.aptos_framework_code_request_publish_with_allowed_deps(owner, expected_modules, allowed_deps, bundle, policy, $c);
}
exports.request_publish_with_allowed_deps_ = request_publish_with_allowed_deps_;
function upgrade_policy_arbitrary_($c) {
    return new UpgradePolicy({ policy: (0, move_to_ts_1.u8)("0") }, new move_to_ts_2.SimpleStructTag(UpgradePolicy));
}
exports.upgrade_policy_arbitrary_ = upgrade_policy_arbitrary_;
function upgrade_policy_compat_($c) {
    return new UpgradePolicy({ policy: (0, move_to_ts_1.u8)("1") }, new move_to_ts_2.SimpleStructTag(UpgradePolicy));
}
exports.upgrade_policy_compat_ = upgrade_policy_compat_;
function upgrade_policy_immutable_($c) {
    return new UpgradePolicy({ policy: (0, move_to_ts_1.u8)("2") }, new move_to_ts_2.SimpleStructTag(UpgradePolicy));
}
exports.upgrade_policy_immutable_ = upgrade_policy_immutable_;
function loadParsers(repo) {
    repo.addParser("0x1::code::AllowedDep", AllowedDep.AllowedDepParser);
    repo.addParser("0x1::code::ModuleMetadata", ModuleMetadata.ModuleMetadataParser);
    repo.addParser("0x1::code::PackageDep", PackageDep.PackageDepParser);
    repo.addParser("0x1::code::PackageMetadata", PackageMetadata.PackageMetadataParser);
    repo.addParser("0x1::code::PackageRegistry", PackageRegistry.PackageRegistryParser);
    repo.addParser("0x1::code::UpgradePolicy", UpgradePolicy.UpgradePolicyParser);
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
    get AllowedDep() { return AllowedDep; }
    get ModuleMetadata() { return ModuleMetadata; }
    get PackageDep() { return PackageDep; }
    get PackageMetadata() { return PackageMetadata; }
    get PackageRegistry() { return PackageRegistry; }
    loadPackageRegistry(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield PackageRegistry.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get UpgradePolicy() { return UpgradePolicy; }
    payload_publish_package_txn(metadata_serialized, code, isJSON = false) {
        return buildPayload_publish_package_txn(metadata_serialized, code, isJSON);
    }
    publish_package_txn(_account, metadata_serialized, code, option, _isJSON = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload__ = buildPayload_publish_package_txn(metadata_serialized, code, _isJSON);
            return $.sendPayloadTx(this.client, _account, payload__, option);
        });
    }
}
exports.App = App;
//# sourceMappingURL=code.js.map