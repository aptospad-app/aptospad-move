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
exports.App = exports.loadParsers = exports.validate_points_ = exports.set_config_ = exports.on_reconfig_ = exports.new_usage_gas_config_ = exports.new_storage_gas_config_ = exports.new_point_ = exports.new_gas_curve_ = exports.interpolate_ = exports.initialize_ = exports.calculate_write_gas_ = exports.calculate_read_gas_ = exports.calculate_gas_ = exports.calculate_create_gas_ = exports.base_8192_exponential_curve_ = exports.UsageGasConfig = exports.StorageGasConfig = exports.StorageGas = exports.Point = exports.GasCurve = exports.MAX_U64 = exports.EZERO_TARGET_USAGE = exports.ETARGET_USAGE_TOO_BIG = exports.ESTORAGE_GAS_CONFIG = exports.ESTORAGE_GAS = exports.EINVALID_POINT_RANGE = exports.EINVALID_MONOTONICALLY_NON_DECREASING_CURVE = exports.EINVALID_GAS_RANGE = exports.BASIS_POINT_DENOMINATION = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const State_storage = __importStar(require("./state_storage"));
const System_addresses = __importStar(require("./system_addresses"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosFramework";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "storage_gas";
exports.BASIS_POINT_DENOMINATION = (0, move_to_ts_1.u64)("10000");
exports.EINVALID_GAS_RANGE = (0, move_to_ts_1.u64)("2");
exports.EINVALID_MONOTONICALLY_NON_DECREASING_CURVE = (0, move_to_ts_1.u64)("5");
exports.EINVALID_POINT_RANGE = (0, move_to_ts_1.u64)("6");
exports.ESTORAGE_GAS = (0, move_to_ts_1.u64)("1");
exports.ESTORAGE_GAS_CONFIG = (0, move_to_ts_1.u64)("0");
exports.ETARGET_USAGE_TOO_BIG = (0, move_to_ts_1.u64)("4");
exports.EZERO_TARGET_USAGE = (0, move_to_ts_1.u64)("3");
exports.MAX_U64 = (0, move_to_ts_1.u64)("18446744073709551615");
class GasCurve {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.min_gas = proto['min_gas'];
        this.max_gas = proto['max_gas'];
        this.points = proto['points'];
    }
    static GasCurveParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, GasCurve);
        return new GasCurve(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "GasCurve", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.GasCurve = GasCurve;
GasCurve.moduleAddress = exports.moduleAddress;
GasCurve.moduleName = exports.moduleName;
GasCurve.structName = "GasCurve";
GasCurve.typeParameters = [];
GasCurve.fields = [
    { name: "min_gas", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "max_gas", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "points", typeTag: new move_to_ts_2.VectorTag(new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "storage_gas", "Point", [])) }
];
class Point {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.x = proto['x'];
        this.y = proto['y'];
    }
    static PointParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Point);
        return new Point(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Point", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Point = Point;
Point.moduleAddress = exports.moduleAddress;
Point.moduleName = exports.moduleName;
Point.structName = "Point";
Point.typeParameters = [];
Point.fields = [
    { name: "x", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "y", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class StorageGas {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.per_item_read = proto['per_item_read'];
        this.per_item_create = proto['per_item_create'];
        this.per_item_write = proto['per_item_write'];
        this.per_byte_read = proto['per_byte_read'];
        this.per_byte_create = proto['per_byte_create'];
        this.per_byte_write = proto['per_byte_write'];
    }
    static StorageGasParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, StorageGas);
        return new StorageGas(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, StorageGas, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, StorageGas, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "StorageGas", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.StorageGas = StorageGas;
StorageGas.moduleAddress = exports.moduleAddress;
StorageGas.moduleName = exports.moduleName;
StorageGas.structName = "StorageGas";
StorageGas.typeParameters = [];
StorageGas.fields = [
    { name: "per_item_read", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "per_item_create", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "per_item_write", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "per_byte_read", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "per_byte_create", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "per_byte_write", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class StorageGasConfig {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.item_config = proto['item_config'];
        this.byte_config = proto['byte_config'];
    }
    static StorageGasConfigParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, StorageGasConfig);
        return new StorageGasConfig(proto, typeTag);
    }
    static load(repo, client, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield repo.loadResource(client, address, StorageGasConfig, typeParams);
            return result;
        });
    }
    static loadByApp(app, address, typeParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield app.repo.loadResource(app.client, address, StorageGasConfig, typeParams);
            yield result.loadFullState(app);
            return result;
        });
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "StorageGasConfig", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.item_config.loadFullState(app);
            yield this.byte_config.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.StorageGasConfig = StorageGasConfig;
StorageGasConfig.moduleAddress = exports.moduleAddress;
StorageGasConfig.moduleName = exports.moduleName;
StorageGasConfig.structName = "StorageGasConfig";
StorageGasConfig.typeParameters = [];
StorageGasConfig.fields = [
    { name: "item_config", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "storage_gas", "UsageGasConfig", []) },
    { name: "byte_config", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "storage_gas", "UsageGasConfig", []) }
];
class UsageGasConfig {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.target_usage = proto['target_usage'];
        this.read_curve = proto['read_curve'];
        this.create_curve = proto['create_curve'];
        this.write_curve = proto['write_curve'];
    }
    static UsageGasConfigParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, UsageGasConfig);
        return new UsageGasConfig(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "UsageGasConfig", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.read_curve.loadFullState(app);
            yield this.create_curve.loadFullState(app);
            yield this.write_curve.loadFullState(app);
            this.__app = app;
        });
    }
}
exports.UsageGasConfig = UsageGasConfig;
UsageGasConfig.moduleAddress = exports.moduleAddress;
UsageGasConfig.moduleName = exports.moduleName;
UsageGasConfig.structName = "UsageGasConfig";
UsageGasConfig.typeParameters = [];
UsageGasConfig.fields = [
    { name: "target_usage", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "read_curve", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "storage_gas", "GasCurve", []) },
    { name: "create_curve", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "storage_gas", "GasCurve", []) },
    { name: "write_curve", typeTag: new move_to_ts_2.StructTag(new aptos_1.HexString("0x1"), "storage_gas", "GasCurve", []) }
];
function base_8192_exponential_curve_(min_gas, max_gas, $c) {
    return new_gas_curve_($.copy(min_gas), $.copy(max_gas), [new_point_((0, move_to_ts_1.u64)("1000"), (0, move_to_ts_1.u64)("2"), $c), new_point_((0, move_to_ts_1.u64)("2000"), (0, move_to_ts_1.u64)("6"), $c), new_point_((0, move_to_ts_1.u64)("3000"), (0, move_to_ts_1.u64)("17"), $c), new_point_((0, move_to_ts_1.u64)("4000"), (0, move_to_ts_1.u64)("44"), $c), new_point_((0, move_to_ts_1.u64)("5000"), (0, move_to_ts_1.u64)("109"), $c), new_point_((0, move_to_ts_1.u64)("6000"), (0, move_to_ts_1.u64)("271"), $c), new_point_((0, move_to_ts_1.u64)("7000"), (0, move_to_ts_1.u64)("669"), $c), new_point_((0, move_to_ts_1.u64)("8000"), (0, move_to_ts_1.u64)("1648"), $c), new_point_((0, move_to_ts_1.u64)("9000"), (0, move_to_ts_1.u64)("4061"), $c), new_point_((0, move_to_ts_1.u64)("9500"), (0, move_to_ts_1.u64)("6372"), $c), new_point_((0, move_to_ts_1.u64)("9900"), (0, move_to_ts_1.u64)("9138"), $c)], $c);
}
exports.base_8192_exponential_curve_ = base_8192_exponential_curve_;
function calculate_create_gas_(config, usage, $c) {
    return calculate_gas_($.copy(config.target_usage), $.copy(usage), config.create_curve, $c);
}
exports.calculate_create_gas_ = calculate_create_gas_;
function calculate_gas_(max_usage, current_usage, curve, $c) {
    let temp$1, temp$10, temp$11, temp$12, temp$13, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, temp$8, temp$9, capped_current_usage, current_usage_bps, i, j, left, mid, num_points, points, right, y_interpolated;
    if (($.copy(current_usage)).gt($.copy(max_usage))) {
        temp$1 = $.copy(max_usage);
    }
    else {
        temp$1 = $.copy(current_usage);
    }
    capped_current_usage = temp$1;
    points = curve.points;
    num_points = Vector.length_(points, $c, [new move_to_ts_2.SimpleStructTag(Point)]);
    current_usage_bps = (($.copy(capped_current_usage)).mul($.copy(exports.BASIS_POINT_DENOMINATION))).div($.copy(max_usage));
    if (($.copy(num_points)).eq(((0, move_to_ts_1.u64)("0")))) {
        temp$3 = new Point({ x: (0, move_to_ts_1.u64)("0"), y: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(Point));
        temp$4 = temp$3;
        temp$2 = new Point({ x: $.copy(exports.BASIS_POINT_DENOMINATION), y: $.copy(exports.BASIS_POINT_DENOMINATION) }, new move_to_ts_2.SimpleStructTag(Point));
        [temp$12, temp$13] = [temp$4, temp$2];
    }
    else {
        if (($.copy(current_usage_bps)).lt($.copy(Vector.borrow_(points, (0, move_to_ts_1.u64)("0"), $c, [new move_to_ts_2.SimpleStructTag(Point)]).x))) {
            temp$5 = new Point({ x: (0, move_to_ts_1.u64)("0"), y: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(Point));
            [temp$10, temp$11] = [temp$5, Vector.borrow_(points, (0, move_to_ts_1.u64)("0"), $c, [new move_to_ts_2.SimpleStructTag(Point)])];
        }
        else {
            if (($.copy(Vector.borrow_(points, ($.copy(num_points)).sub((0, move_to_ts_1.u64)("1")), $c, [new move_to_ts_2.SimpleStructTag(Point)]).x)).le($.copy(current_usage_bps))) {
                temp$7 = Vector.borrow_(points, ($.copy(num_points)).sub((0, move_to_ts_1.u64)("1")), $c, [new move_to_ts_2.SimpleStructTag(Point)]);
                temp$6 = new Point({ x: $.copy(exports.BASIS_POINT_DENOMINATION), y: $.copy(exports.BASIS_POINT_DENOMINATION) }, new move_to_ts_2.SimpleStructTag(Point));
                [temp$8, temp$9] = [temp$7, temp$6];
            }
            else {
                [i, j] = [(0, move_to_ts_1.u64)("0"), ($.copy(num_points)).sub((0, move_to_ts_1.u64)("2"))];
                while (true) {
                    {
                        ;
                    }
                    if (!(($.copy(i)).lt($.copy(j))))
                        break;
                    {
                        mid = ($.copy(j)).sub((($.copy(j)).sub($.copy(i))).div((0, move_to_ts_1.u64)("2")));
                        if (($.copy(current_usage_bps)).lt($.copy(Vector.borrow_(points, $.copy(mid), $c, [new move_to_ts_2.SimpleStructTag(Point)]).x))) {
                            ;
                            j = ($.copy(mid)).sub((0, move_to_ts_1.u64)("1"));
                        }
                        else {
                            ;
                            i = $.copy(mid);
                        }
                    }
                }
                [temp$8, temp$9] = [Vector.borrow_(points, $.copy(i), $c, [new move_to_ts_2.SimpleStructTag(Point)]), Vector.borrow_(points, ($.copy(i)).add((0, move_to_ts_1.u64)("1")), $c, [new move_to_ts_2.SimpleStructTag(Point)])];
            }
            [temp$10, temp$11] = [temp$8, temp$9];
        }
        [temp$12, temp$13] = [temp$10, temp$11];
    }
    [left, right] = [temp$12, temp$13];
    y_interpolated = interpolate_($.copy(left.x), $.copy(right.x), $.copy(left.y), $.copy(right.y), $.copy(current_usage_bps), $c);
    return interpolate_((0, move_to_ts_1.u64)("0"), $.copy(exports.BASIS_POINT_DENOMINATION), $.copy(curve.min_gas), $.copy(curve.max_gas), $.copy(y_interpolated), $c);
}
exports.calculate_gas_ = calculate_gas_;
function calculate_read_gas_(config, usage, $c) {
    return calculate_gas_($.copy(config.target_usage), $.copy(usage), config.read_curve, $c);
}
exports.calculate_read_gas_ = calculate_read_gas_;
function calculate_write_gas_(config, usage, $c) {
    return calculate_gas_($.copy(config.target_usage), $.copy(usage), config.write_curve, $c);
}
exports.calculate_write_gas_ = calculate_write_gas_;
function initialize_(aptos_framework, $c) {
    let byte_config, item_config, k, m;
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    if (!!$c.exists(new move_to_ts_2.SimpleStructTag(StorageGasConfig), new aptos_1.HexString("0x1"))) {
        throw $.abortCode(Error.already_exists_($.copy(exports.ESTORAGE_GAS_CONFIG), $c));
    }
    k = (0, move_to_ts_1.u64)("1000");
    m = ((0, move_to_ts_1.u64)("1000")).mul((0, move_to_ts_1.u64)("1000"));
    item_config = new UsageGasConfig({ target_usage: (((0, move_to_ts_1.u64)("2")).mul($.copy(k))).mul($.copy(m)), read_curve: base_8192_exponential_curve_(((0, move_to_ts_1.u64)("300")).mul($.copy(k)), (((0, move_to_ts_1.u64)("300")).mul($.copy(k))).mul((0, move_to_ts_1.u64)("100")), $c), create_curve: base_8192_exponential_curve_(((0, move_to_ts_1.u64)("5")).mul($.copy(m)), (((0, move_to_ts_1.u64)("5")).mul($.copy(m))).mul((0, move_to_ts_1.u64)("100")), $c), write_curve: base_8192_exponential_curve_(((0, move_to_ts_1.u64)("300")).mul($.copy(k)), (((0, move_to_ts_1.u64)("300")).mul($.copy(k))).mul((0, move_to_ts_1.u64)("100")), $c) }, new move_to_ts_2.SimpleStructTag(UsageGasConfig));
    byte_config = new UsageGasConfig({ target_usage: (((0, move_to_ts_1.u64)("1")).mul($.copy(m))).mul($.copy(m)), read_curve: base_8192_exponential_curve_((0, move_to_ts_1.u64)("300"), ((0, move_to_ts_1.u64)("300")).mul((0, move_to_ts_1.u64)("100")), $c), create_curve: base_8192_exponential_curve_(((0, move_to_ts_1.u64)("5")).mul($.copy(k)), (((0, move_to_ts_1.u64)("5")).mul($.copy(k))).mul((0, move_to_ts_1.u64)("100")), $c), write_curve: base_8192_exponential_curve_(((0, move_to_ts_1.u64)("5")).mul($.copy(k)), (((0, move_to_ts_1.u64)("5")).mul($.copy(k))).mul((0, move_to_ts_1.u64)("100")), $c) }, new move_to_ts_2.SimpleStructTag(UsageGasConfig));
    $c.move_to(new move_to_ts_2.SimpleStructTag(StorageGasConfig), aptos_framework, new StorageGasConfig({ item_config: $.copy(item_config), byte_config: $.copy(byte_config) }, new move_to_ts_2.SimpleStructTag(StorageGasConfig)));
    if (!!$c.exists(new move_to_ts_2.SimpleStructTag(StorageGas), new aptos_1.HexString("0x1"))) {
        throw $.abortCode(Error.already_exists_($.copy(exports.ESTORAGE_GAS), $c));
    }
    $c.move_to(new move_to_ts_2.SimpleStructTag(StorageGas), aptos_framework, new StorageGas({ per_item_read: ((0, move_to_ts_1.u64)("300")).mul($.copy(k)), per_item_create: ((0, move_to_ts_1.u64)("5")).mul($.copy(m)), per_item_write: ((0, move_to_ts_1.u64)("300")).mul($.copy(k)), per_byte_read: (0, move_to_ts_1.u64)("300"), per_byte_create: ((0, move_to_ts_1.u64)("5")).mul($.copy(k)), per_byte_write: ((0, move_to_ts_1.u64)("5")).mul($.copy(k)) }, new move_to_ts_2.SimpleStructTag(StorageGas)));
    return;
}
exports.initialize_ = initialize_;
function interpolate_(x0, x1, y0, y1, x, $c) {
    return ($.copy(y0)).add(((($.copy(x)).sub($.copy(x0))).mul(($.copy(y1)).sub($.copy(y0)))).div(($.copy(x1)).sub($.copy(x0))));
}
exports.interpolate_ = interpolate_;
function new_gas_curve_(min_gas, max_gas, points, $c) {
    if (!($.copy(max_gas)).ge($.copy(min_gas))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_GAS_RANGE), $c));
    }
    if (!($.copy(max_gas)).le(($.copy(exports.MAX_U64)).div($.copy(exports.BASIS_POINT_DENOMINATION)))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_GAS_RANGE), $c));
    }
    validate_points_(points, $c);
    return new GasCurve({ min_gas: $.copy(min_gas), max_gas: $.copy(max_gas), points: $.copy(points) }, new move_to_ts_2.SimpleStructTag(GasCurve));
}
exports.new_gas_curve_ = new_gas_curve_;
function new_point_(x, y, $c) {
    let temp$1;
    if (($.copy(x)).le($.copy(exports.BASIS_POINT_DENOMINATION))) {
        temp$1 = ($.copy(y)).le($.copy(exports.BASIS_POINT_DENOMINATION));
    }
    else {
        temp$1 = false;
    }
    if (!temp$1) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_POINT_RANGE), $c));
    }
    return new Point({ x: $.copy(x), y: $.copy(y) }, new move_to_ts_2.SimpleStructTag(Point));
}
exports.new_point_ = new_point_;
function new_storage_gas_config_(item_config, byte_config, $c) {
    return new StorageGasConfig({ item_config: $.copy(item_config), byte_config: $.copy(byte_config) }, new move_to_ts_2.SimpleStructTag(StorageGasConfig));
}
exports.new_storage_gas_config_ = new_storage_gas_config_;
function new_usage_gas_config_(target_usage, read_curve, create_curve, write_curve, $c) {
    if (!($.copy(target_usage)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.EZERO_TARGET_USAGE), $c));
    }
    if (!($.copy(target_usage)).le(($.copy(exports.MAX_U64)).div($.copy(exports.BASIS_POINT_DENOMINATION)))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.ETARGET_USAGE_TOO_BIG), $c));
    }
    return new UsageGasConfig({ target_usage: $.copy(target_usage), read_curve: $.copy(read_curve), create_curve: $.copy(create_curve), write_curve: $.copy(write_curve) }, new move_to_ts_2.SimpleStructTag(UsageGasConfig));
}
exports.new_usage_gas_config_ = new_usage_gas_config_;
function on_reconfig_($c) {
    let bytes, gas, gas_config, items;
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(StorageGasConfig), new aptos_1.HexString("0x1"))) {
        throw $.abortCode(Error.not_found_($.copy(exports.ESTORAGE_GAS_CONFIG), $c));
    }
    if (!$c.exists(new move_to_ts_2.SimpleStructTag(StorageGas), new aptos_1.HexString("0x1"))) {
        throw $.abortCode(Error.not_found_($.copy(exports.ESTORAGE_GAS), $c));
    }
    [items, bytes] = State_storage.current_items_and_bytes_($c);
    gas_config = $c.borrow_global(new move_to_ts_2.SimpleStructTag(StorageGasConfig), new aptos_1.HexString("0x1"));
    gas = $c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StorageGas), new aptos_1.HexString("0x1"));
    gas.per_item_read = calculate_read_gas_(gas_config.item_config, $.copy(items), $c);
    gas.per_item_create = calculate_create_gas_(gas_config.item_config, $.copy(items), $c);
    gas.per_item_write = calculate_write_gas_(gas_config.item_config, $.copy(items), $c);
    gas.per_byte_read = calculate_read_gas_(gas_config.byte_config, $.copy(bytes), $c);
    gas.per_byte_create = calculate_create_gas_(gas_config.byte_config, $.copy(bytes), $c);
    gas.per_byte_write = calculate_write_gas_(gas_config.byte_config, $.copy(bytes), $c);
    return;
}
exports.on_reconfig_ = on_reconfig_;
function set_config_(aptos_framework, config, $c) {
    System_addresses.assert_aptos_framework_(aptos_framework, $c);
    $.set($c.borrow_global_mut(new move_to_ts_2.SimpleStructTag(StorageGasConfig), new aptos_1.HexString("0x1")), $.copy(config));
    return;
}
exports.set_config_ = set_config_;
function validate_points_(points, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, cur, i, len, next;
    len = Vector.length_(points, $c, [new move_to_ts_2.SimpleStructTag(Point)]);
    ;
    i = (0, move_to_ts_1.u64)("0");
    while (true) {
        {
            ;
        }
        if (!(($.copy(i)).le($.copy(len))))
            break;
        {
            if (($.copy(i)).eq(((0, move_to_ts_1.u64)("0")))) {
                temp$1 = new Point({ x: (0, move_to_ts_1.u64)("0"), y: (0, move_to_ts_1.u64)("0") }, new move_to_ts_2.SimpleStructTag(Point));
                temp$2 = temp$1;
            }
            else {
                temp$2 = Vector.borrow_(points, ($.copy(i)).sub((0, move_to_ts_1.u64)("1")), $c, [new move_to_ts_2.SimpleStructTag(Point)]);
            }
            cur = temp$2;
            if (($.copy(i)).eq(($.copy(len)))) {
                temp$3 = new Point({ x: $.copy(exports.BASIS_POINT_DENOMINATION), y: $.copy(exports.BASIS_POINT_DENOMINATION) }, new move_to_ts_2.SimpleStructTag(Point));
                temp$4 = temp$3;
            }
            else {
                temp$4 = Vector.borrow_(points, $.copy(i), $c, [new move_to_ts_2.SimpleStructTag(Point)]);
            }
            next = temp$4;
            if (($.copy(cur.x)).lt($.copy(next.x))) {
                temp$5 = ($.copy(cur.y)).le($.copy(next.y));
            }
            else {
                temp$5 = false;
            }
            if (!temp$5) {
                throw $.abortCode(Error.invalid_argument_($.copy(exports.EINVALID_MONOTONICALLY_NON_DECREASING_CURVE), $c));
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.validate_points_ = validate_points_;
function loadParsers(repo) {
    repo.addParser("0x1::storage_gas::GasCurve", GasCurve.GasCurveParser);
    repo.addParser("0x1::storage_gas::Point", Point.PointParser);
    repo.addParser("0x1::storage_gas::StorageGas", StorageGas.StorageGasParser);
    repo.addParser("0x1::storage_gas::StorageGasConfig", StorageGasConfig.StorageGasConfigParser);
    repo.addParser("0x1::storage_gas::UsageGasConfig", UsageGasConfig.UsageGasConfigParser);
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
    get GasCurve() { return GasCurve; }
    get Point() { return Point; }
    get StorageGas() { return StorageGas; }
    loadStorageGas(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield StorageGas.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get StorageGasConfig() { return StorageGasConfig; }
    loadStorageGasConfig(owner, loadFull = true, fillCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield StorageGasConfig.load(this.repo, this.client, owner, []);
            if (loadFull) {
                yield val.loadFullState(this);
            }
            if (fillCache) {
                this.cache.set(val.typeTag, owner, val);
            }
            return val;
        });
    }
    get UsageGasConfig() { return UsageGasConfig; }
}
exports.App = App;
//# sourceMappingURL=storage_gas.js.map