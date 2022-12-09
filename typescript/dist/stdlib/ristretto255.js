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
exports.new_scalar_from_u128_ = exports.new_scalar_from_sha512_ = exports.new_scalar_from_bytes_ = exports.new_point_from_sha512_internal_ = exports.new_point_from_sha512_ = exports.new_point_from_bytes_ = exports.new_point_from_64_uniform_bytes_internal_ = exports.new_point_from_64_uniform_bytes_ = exports.new_compressed_point_from_bytes_ = exports.multi_scalar_mul_internal_ = exports.multi_scalar_mul_ = exports.basepoint_mul_internal_ = exports.basepoint_mul_ = exports.basepoint_double_mul_internal_ = exports.basepoint_double_mul_ = exports.basepoint_compressed_ = exports.basepoint_ = exports.Scalar = exports.RistrettoPoint = exports.CompressedRistretto = exports.Y_SCALAR = exports.X_TIMES_Y_SCALAR = exports.X_SCALAR = exports.X_INV_SCALAR = exports.TWO_SCALAR = exports.REDUCED_X_PLUS_2_TO_256_TIMES_X_SCALAR = exports.REDUCED_2_256_MINUS_1_SCALAR = exports.ORDER_ELL = exports.NON_CANONICAL_ALL_ONES = exports.MAX_SCALAR_NUM_BYTES = exports.MAX_SCALAR_NUM_BITS = exports.MAX_POINT_NUM_BYTES = exports.L_PLUS_TWO = exports.L_PLUS_ONE = exports.L_MINUS_ONE = exports.E_ZERO_SCALARS = exports.E_ZERO_POINTS = exports.E_DIFFERENT_NUM_POINTS_AND_SCALARS = exports.B_SCALAR = exports.B_POINT = exports.BASE_POINT = exports.A_TIMES_B_SCALAR = exports.A_TIMES_BASE_POINT = exports.A_SCALAR = exports.A_POINT = exports.A_PLUS_B_SCALAR = exports.A_PLUS_B_POINT = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
exports.scalar_to_bytes_ = exports.scalar_sub_internal_ = exports.scalar_sub_assign_ = exports.scalar_sub_ = exports.scalar_reduced_from_32_bytes_internal_ = exports.scalar_one_ = exports.scalar_neg_internal_ = exports.scalar_neg_assign_ = exports.scalar_neg_ = exports.scalar_mul_internal_ = exports.scalar_mul_assign_ = exports.scalar_mul_ = exports.scalar_is_zero_ = exports.scalar_is_one_ = exports.scalar_is_canonical_internal_ = exports.scalar_invert_internal_ = exports.scalar_invert_ = exports.scalar_from_u64_internal_ = exports.scalar_from_u128_internal_ = exports.scalar_from_sha512_internal_ = exports.scalar_equals_ = exports.scalar_add_internal_ = exports.scalar_add_assign_ = exports.scalar_add_ = exports.point_to_bytes_ = exports.point_sub_internal_ = exports.point_sub_assign_ = exports.point_sub_ = exports.point_neg_internal_ = exports.point_neg_assign_ = exports.point_neg_ = exports.point_mul_internal_ = exports.point_mul_assign_ = exports.point_mul_ = exports.point_is_canonical_internal_ = exports.point_identity_internal_ = exports.point_identity_compressed_ = exports.point_identity_ = exports.point_equals_ = exports.point_decompress_internal_ = exports.point_decompress_ = exports.point_compress_internal_ = exports.point_compress_ = exports.point_add_internal_ = exports.point_add_assign_ = exports.point_add_ = exports.new_scalar_uniform_from_64_bytes_ = exports.new_scalar_reduced_from_32_bytes_ = exports.new_scalar_from_u8_ = exports.new_scalar_from_u64_ = void 0;
exports.App = exports.loadParsers = exports.scalar_zero_ = exports.scalar_uniform_from_64_bytes_internal_ = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Error = __importStar(require("./error"));
const Option = __importStar(require("./option"));
const Vector = __importStar(require("./vector"));
exports.packageName = "AptosStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "ristretto255";
exports.A_PLUS_B_POINT = [(0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("207"), (0, move_to_ts_1.u8)("55"), (0, move_to_ts_1.u8)("83"), (0, move_to_ts_1.u8)("71"), (0, move_to_ts_1.u8)("91"), (0, move_to_ts_1.u8)("159"), (0, move_to_ts_1.u8)("243"), (0, move_to_ts_1.u8)("62"), (0, move_to_ts_1.u8)("47"), (0, move_to_ts_1.u8)("132"), (0, move_to_ts_1.u8)("65"), (0, move_to_ts_1.u8)("62"), (0, move_to_ts_1.u8)("214"), (0, move_to_ts_1.u8)("181"), (0, move_to_ts_1.u8)("5"), (0, move_to_ts_1.u8)("32"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("188"), (0, move_to_ts_1.u8)("204"), (0, move_to_ts_1.u8)("10"), (0, move_to_ts_1.u8)("10"), (0, move_to_ts_1.u8)("129"), (0, move_to_ts_1.u8)("120"), (0, move_to_ts_1.u8)("157"), (0, move_to_ts_1.u8)("62"), (0, move_to_ts_1.u8)("86"), (0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("220"), (0, move_to_ts_1.u8)("37"), (0, move_to_ts_1.u8)("128"), (0, move_to_ts_1.u8)("86")];
exports.A_PLUS_B_SCALAR = [(0, move_to_ts_1.u8)("8"), (0, move_to_ts_1.u8)("56"), (0, move_to_ts_1.u8)("57"), (0, move_to_ts_1.u8)("221"), (0, move_to_ts_1.u8)("73"), (0, move_to_ts_1.u8)("30"), (0, move_to_ts_1.u8)("87"), (0, move_to_ts_1.u8)("197"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("55"), (0, move_to_ts_1.u8)("16"), (0, move_to_ts_1.u8)("195"), (0, move_to_ts_1.u8)("154"), (0, move_to_ts_1.u8)("145"), (0, move_to_ts_1.u8)("214"), (0, move_to_ts_1.u8)("229"), (0, move_to_ts_1.u8)("2"), (0, move_to_ts_1.u8)("202"), (0, move_to_ts_1.u8)("179"), (0, move_to_ts_1.u8)("207"), (0, move_to_ts_1.u8)("14"), (0, move_to_ts_1.u8)("39"), (0, move_to_ts_1.u8)("154"), (0, move_to_ts_1.u8)("228"), (0, move_to_ts_1.u8)("23"), (0, move_to_ts_1.u8)("217"), (0, move_to_ts_1.u8)("31"), (0, move_to_ts_1.u8)("242"), (0, move_to_ts_1.u8)("203"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("62"), (0, move_to_ts_1.u8)("7")];
exports.A_POINT = [(0, move_to_ts_1.u8)("232"), (0, move_to_ts_1.u8)("127"), (0, move_to_ts_1.u8)("237"), (0, move_to_ts_1.u8)("161"), (0, move_to_ts_1.u8)("153"), (0, move_to_ts_1.u8)("215"), (0, move_to_ts_1.u8)("43"), (0, move_to_ts_1.u8)("131"), (0, move_to_ts_1.u8)("222"), (0, move_to_ts_1.u8)("79"), (0, move_to_ts_1.u8)("91"), (0, move_to_ts_1.u8)("45"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("211"), (0, move_to_ts_1.u8)("72"), (0, move_to_ts_1.u8)("5"), (0, move_to_ts_1.u8)("197"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("25"), (0, move_to_ts_1.u8)("198"), (0, move_to_ts_1.u8)("197"), (0, move_to_ts_1.u8)("156"), (0, move_to_ts_1.u8)("66"), (0, move_to_ts_1.u8)("203"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("238"), (0, move_to_ts_1.u8)("61"), (0, move_to_ts_1.u8)("25"), (0, move_to_ts_1.u8)("170"), (0, move_to_ts_1.u8)("153"), (0, move_to_ts_1.u8)("111"), (0, move_to_ts_1.u8)("117")];
exports.A_SCALAR = [(0, move_to_ts_1.u8)("26"), (0, move_to_ts_1.u8)("14"), (0, move_to_ts_1.u8)("151"), (0, move_to_ts_1.u8)("138"), (0, move_to_ts_1.u8)("144"), (0, move_to_ts_1.u8)("246"), (0, move_to_ts_1.u8)("98"), (0, move_to_ts_1.u8)("45"), (0, move_to_ts_1.u8)("55"), (0, move_to_ts_1.u8)("71"), (0, move_to_ts_1.u8)("2"), (0, move_to_ts_1.u8)("63"), (0, move_to_ts_1.u8)("138"), (0, move_to_ts_1.u8)("216"), (0, move_to_ts_1.u8)("38"), (0, move_to_ts_1.u8)("77"), (0, move_to_ts_1.u8)("167"), (0, move_to_ts_1.u8)("88"), (0, move_to_ts_1.u8)("170"), (0, move_to_ts_1.u8)("27"), (0, move_to_ts_1.u8)("136"), (0, move_to_ts_1.u8)("224"), (0, move_to_ts_1.u8)("64"), (0, move_to_ts_1.u8)("209"), (0, move_to_ts_1.u8)("88"), (0, move_to_ts_1.u8)("158"), (0, move_to_ts_1.u8)("123"), (0, move_to_ts_1.u8)("127"), (0, move_to_ts_1.u8)("35"), (0, move_to_ts_1.u8)("118"), (0, move_to_ts_1.u8)("239"), (0, move_to_ts_1.u8)("9")];
exports.A_TIMES_BASE_POINT = [(0, move_to_ts_1.u8)("150"), (0, move_to_ts_1.u8)("213"), (0, move_to_ts_1.u8)("45"), (0, move_to_ts_1.u8)("146"), (0, move_to_ts_1.u8)("98"), (0, move_to_ts_1.u8)("238"), (0, move_to_ts_1.u8)("30"), (0, move_to_ts_1.u8)("26"), (0, move_to_ts_1.u8)("174"), (0, move_to_ts_1.u8)("121"), (0, move_to_ts_1.u8)("251"), (0, move_to_ts_1.u8)("174"), (0, move_to_ts_1.u8)("232"), (0, move_to_ts_1.u8)("193"), (0, move_to_ts_1.u8)("217"), (0, move_to_ts_1.u8)("6"), (0, move_to_ts_1.u8)("139"), (0, move_to_ts_1.u8)("13"), (0, move_to_ts_1.u8)("1"), (0, move_to_ts_1.u8)("191"), (0, move_to_ts_1.u8)("154"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("121"), (0, move_to_ts_1.u8)("230"), (0, move_to_ts_1.u8)("24"), (0, move_to_ts_1.u8)("9"), (0, move_to_ts_1.u8)("12"), (0, move_to_ts_1.u8)("61"), (0, move_to_ts_1.u8)("16"), (0, move_to_ts_1.u8)("136"), (0, move_to_ts_1.u8)("174"), (0, move_to_ts_1.u8)("16")];
exports.A_TIMES_B_SCALAR = [(0, move_to_ts_1.u8)("42"), (0, move_to_ts_1.u8)("181"), (0, move_to_ts_1.u8)("14"), (0, move_to_ts_1.u8)("56"), (0, move_to_ts_1.u8)("61"), (0, move_to_ts_1.u8)("124"), (0, move_to_ts_1.u8)("33"), (0, move_to_ts_1.u8)("15"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("213"), (0, move_to_ts_1.u8)("56"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("48"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("24"), (0, move_to_ts_1.u8)("49"), (0, move_to_ts_1.u8)("81"), (0, move_to_ts_1.u8)("18"), (0, move_to_ts_1.u8)("209"), (0, move_to_ts_1.u8)("13"), (0, move_to_ts_1.u8)("251"), (0, move_to_ts_1.u8)("152"), (0, move_to_ts_1.u8)("252"), (0, move_to_ts_1.u8)("206"), (0, move_to_ts_1.u8)("30"), (0, move_to_ts_1.u8)("38"), (0, move_to_ts_1.u8)("32"), (0, move_to_ts_1.u8)("192"), (0, move_to_ts_1.u8)("192"), (0, move_to_ts_1.u8)("20"), (0, move_to_ts_1.u8)("2")];
exports.BASE_POINT = [(0, move_to_ts_1.u8)("226"), (0, move_to_ts_1.u8)("242"), (0, move_to_ts_1.u8)("174"), (0, move_to_ts_1.u8)("10"), (0, move_to_ts_1.u8)("106"), (0, move_to_ts_1.u8)("188"), (0, move_to_ts_1.u8)("78"), (0, move_to_ts_1.u8)("113"), (0, move_to_ts_1.u8)("168"), (0, move_to_ts_1.u8)("132"), (0, move_to_ts_1.u8)("169"), (0, move_to_ts_1.u8)("97"), (0, move_to_ts_1.u8)("197"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("81"), (0, move_to_ts_1.u8)("95"), (0, move_to_ts_1.u8)("88"), (0, move_to_ts_1.u8)("227"), (0, move_to_ts_1.u8)("11"), (0, move_to_ts_1.u8)("106"), (0, move_to_ts_1.u8)("165"), (0, move_to_ts_1.u8)("130"), (0, move_to_ts_1.u8)("221"), (0, move_to_ts_1.u8)("141"), (0, move_to_ts_1.u8)("182"), (0, move_to_ts_1.u8)("166"), (0, move_to_ts_1.u8)("89"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("224"), (0, move_to_ts_1.u8)("141"), (0, move_to_ts_1.u8)("45"), (0, move_to_ts_1.u8)("118")];
exports.B_POINT = [(0, move_to_ts_1.u8)("250"), (0, move_to_ts_1.u8)("11"), (0, move_to_ts_1.u8)("54"), (0, move_to_ts_1.u8)("36"), (0, move_to_ts_1.u8)("176"), (0, move_to_ts_1.u8)("129"), (0, move_to_ts_1.u8)("198"), (0, move_to_ts_1.u8)("47"), (0, move_to_ts_1.u8)("54"), (0, move_to_ts_1.u8)("77"), (0, move_to_ts_1.u8)("11"), (0, move_to_ts_1.u8)("40"), (0, move_to_ts_1.u8)("57"), (0, move_to_ts_1.u8)("220"), (0, move_to_ts_1.u8)("199"), (0, move_to_ts_1.u8)("109"), (0, move_to_ts_1.u8)("124"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("176"), (0, move_to_ts_1.u8)("226"), (0, move_to_ts_1.u8)("126"), (0, move_to_ts_1.u8)("49"), (0, move_to_ts_1.u8)("190"), (0, move_to_ts_1.u8)("178"), (0, move_to_ts_1.u8)("185"), (0, move_to_ts_1.u8)("237"), (0, move_to_ts_1.u8)("118"), (0, move_to_ts_1.u8)("101"), (0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("242"), (0, move_to_ts_1.u8)("142"), (0, move_to_ts_1.u8)("118")];
exports.B_SCALAR = [(0, move_to_ts_1.u8)("219"), (0, move_to_ts_1.u8)("253"), (0, move_to_ts_1.u8)("151"), (0, move_to_ts_1.u8)("175"), (0, move_to_ts_1.u8)("211"), (0, move_to_ts_1.u8)("138"), (0, move_to_ts_1.u8)("6"), (0, move_to_ts_1.u8)("240"), (0, move_to_ts_1.u8)("19"), (0, move_to_ts_1.u8)("141"), (0, move_to_ts_1.u8)("5"), (0, move_to_ts_1.u8)("39"), (0, move_to_ts_1.u8)("239"), (0, move_to_ts_1.u8)("178"), (0, move_to_ts_1.u8)("142"), (0, move_to_ts_1.u8)("173"), (0, move_to_ts_1.u8)("91"), (0, move_to_ts_1.u8)("113"), (0, move_to_ts_1.u8)("9"), (0, move_to_ts_1.u8)("180"), (0, move_to_ts_1.u8)("134"), (0, move_to_ts_1.u8)("70"), (0, move_to_ts_1.u8)("89"), (0, move_to_ts_1.u8)("19"), (0, move_to_ts_1.u8)("191"), (0, move_to_ts_1.u8)("58"), (0, move_to_ts_1.u8)("164"), (0, move_to_ts_1.u8)("114"), (0, move_to_ts_1.u8)("168"), (0, move_to_ts_1.u8)("237"), (0, move_to_ts_1.u8)("78"), (0, move_to_ts_1.u8)("13")];
exports.E_DIFFERENT_NUM_POINTS_AND_SCALARS = (0, move_to_ts_1.u64)("1");
exports.E_ZERO_POINTS = (0, move_to_ts_1.u64)("2");
exports.E_ZERO_SCALARS = (0, move_to_ts_1.u64)("3");
exports.L_MINUS_ONE = [(0, move_to_ts_1.u8)("236"), (0, move_to_ts_1.u8)("211"), (0, move_to_ts_1.u8)("245"), (0, move_to_ts_1.u8)("92"), (0, move_to_ts_1.u8)("26"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("18"), (0, move_to_ts_1.u8)("88"), (0, move_to_ts_1.u8)("214"), (0, move_to_ts_1.u8)("156"), (0, move_to_ts_1.u8)("247"), (0, move_to_ts_1.u8)("162"), (0, move_to_ts_1.u8)("222"), (0, move_to_ts_1.u8)("249"), (0, move_to_ts_1.u8)("222"), (0, move_to_ts_1.u8)("20"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("16")];
exports.L_PLUS_ONE = [(0, move_to_ts_1.u8)("238"), (0, move_to_ts_1.u8)("211"), (0, move_to_ts_1.u8)("245"), (0, move_to_ts_1.u8)("92"), (0, move_to_ts_1.u8)("26"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("18"), (0, move_to_ts_1.u8)("88"), (0, move_to_ts_1.u8)("214"), (0, move_to_ts_1.u8)("156"), (0, move_to_ts_1.u8)("247"), (0, move_to_ts_1.u8)("162"), (0, move_to_ts_1.u8)("222"), (0, move_to_ts_1.u8)("249"), (0, move_to_ts_1.u8)("222"), (0, move_to_ts_1.u8)("20"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("16")];
exports.L_PLUS_TWO = [(0, move_to_ts_1.u8)("239"), (0, move_to_ts_1.u8)("211"), (0, move_to_ts_1.u8)("245"), (0, move_to_ts_1.u8)("92"), (0, move_to_ts_1.u8)("26"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("18"), (0, move_to_ts_1.u8)("88"), (0, move_to_ts_1.u8)("214"), (0, move_to_ts_1.u8)("156"), (0, move_to_ts_1.u8)("247"), (0, move_to_ts_1.u8)("162"), (0, move_to_ts_1.u8)("222"), (0, move_to_ts_1.u8)("249"), (0, move_to_ts_1.u8)("222"), (0, move_to_ts_1.u8)("20"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("16")];
exports.MAX_POINT_NUM_BYTES = (0, move_to_ts_1.u64)("32");
exports.MAX_SCALAR_NUM_BITS = (0, move_to_ts_1.u64)("256");
exports.MAX_SCALAR_NUM_BYTES = (0, move_to_ts_1.u64)("32");
exports.NON_CANONICAL_ALL_ONES = [(0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255")];
exports.ORDER_ELL = [(0, move_to_ts_1.u8)("237"), (0, move_to_ts_1.u8)("211"), (0, move_to_ts_1.u8)("245"), (0, move_to_ts_1.u8)("92"), (0, move_to_ts_1.u8)("26"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("18"), (0, move_to_ts_1.u8)("88"), (0, move_to_ts_1.u8)("214"), (0, move_to_ts_1.u8)("156"), (0, move_to_ts_1.u8)("247"), (0, move_to_ts_1.u8)("162"), (0, move_to_ts_1.u8)("222"), (0, move_to_ts_1.u8)("249"), (0, move_to_ts_1.u8)("222"), (0, move_to_ts_1.u8)("20"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("16")];
exports.REDUCED_2_256_MINUS_1_SCALAR = [(0, move_to_ts_1.u8)("28"), (0, move_to_ts_1.u8)("149"), (0, move_to_ts_1.u8)("152"), (0, move_to_ts_1.u8)("141"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("49"), (0, move_to_ts_1.u8)("236"), (0, move_to_ts_1.u8)("214"), (0, move_to_ts_1.u8)("112"), (0, move_to_ts_1.u8)("207"), (0, move_to_ts_1.u8)("125"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("244"), (0, move_to_ts_1.u8)("91"), (0, move_to_ts_1.u8)("239"), (0, move_to_ts_1.u8)("198"), (0, move_to_ts_1.u8)("254"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("255"), (0, move_to_ts_1.u8)("15")];
exports.REDUCED_X_PLUS_2_TO_256_TIMES_X_SCALAR = [(0, move_to_ts_1.u8)("216"), (0, move_to_ts_1.u8)("154"), (0, move_to_ts_1.u8)("179"), (0, move_to_ts_1.u8)("139"), (0, move_to_ts_1.u8)("210"), (0, move_to_ts_1.u8)("121"), (0, move_to_ts_1.u8)("2"), (0, move_to_ts_1.u8)("71"), (0, move_to_ts_1.u8)("69"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("158"), (0, move_to_ts_1.u8)("216"), (0, move_to_ts_1.u8)("23"), (0, move_to_ts_1.u8)("173"), (0, move_to_ts_1.u8)("63"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("204"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("91"), (0, move_to_ts_1.u8)("50"), (0, move_to_ts_1.u8)("219"), (0, move_to_ts_1.u8)("153"), (0, move_to_ts_1.u8)("57"), (0, move_to_ts_1.u8)("249"), (0, move_to_ts_1.u8)("28"), (0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("31"), (0, move_to_ts_1.u8)("197"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("165"), (0, move_to_ts_1.u8)("192"), (0, move_to_ts_1.u8)("8")];
exports.TWO_SCALAR = [(0, move_to_ts_1.u8)("2"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0")];
exports.X_INV_SCALAR = [(0, move_to_ts_1.u8)("28"), (0, move_to_ts_1.u8)("220"), (0, move_to_ts_1.u8)("23"), (0, move_to_ts_1.u8)("252"), (0, move_to_ts_1.u8)("224"), (0, move_to_ts_1.u8)("233"), (0, move_to_ts_1.u8)("165"), (0, move_to_ts_1.u8)("187"), (0, move_to_ts_1.u8)("217"), (0, move_to_ts_1.u8)("36"), (0, move_to_ts_1.u8)("126"), (0, move_to_ts_1.u8)("86"), (0, move_to_ts_1.u8)("187"), (0, move_to_ts_1.u8)("1"), (0, move_to_ts_1.u8)("99"), (0, move_to_ts_1.u8)("71"), (0, move_to_ts_1.u8)("187"), (0, move_to_ts_1.u8)("186"), (0, move_to_ts_1.u8)("49"), (0, move_to_ts_1.u8)("237"), (0, move_to_ts_1.u8)("213"), (0, move_to_ts_1.u8)("169"), (0, move_to_ts_1.u8)("187"), (0, move_to_ts_1.u8)("150"), (0, move_to_ts_1.u8)("213"), (0, move_to_ts_1.u8)("11"), (0, move_to_ts_1.u8)("205"), (0, move_to_ts_1.u8)("122"), (0, move_to_ts_1.u8)("63"), (0, move_to_ts_1.u8)("150"), (0, move_to_ts_1.u8)("42"), (0, move_to_ts_1.u8)("15")];
exports.X_SCALAR = [(0, move_to_ts_1.u8)("78"), (0, move_to_ts_1.u8)("90"), (0, move_to_ts_1.u8)("180"), (0, move_to_ts_1.u8)("52"), (0, move_to_ts_1.u8)("93"), (0, move_to_ts_1.u8)("71"), (0, move_to_ts_1.u8)("8"), (0, move_to_ts_1.u8)("132"), (0, move_to_ts_1.u8)("89"), (0, move_to_ts_1.u8)("19"), (0, move_to_ts_1.u8)("180"), (0, move_to_ts_1.u8)("100"), (0, move_to_ts_1.u8)("27"), (0, move_to_ts_1.u8)("194"), (0, move_to_ts_1.u8)("125"), (0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("82"), (0, move_to_ts_1.u8)("165"), (0, move_to_ts_1.u8)("133"), (0, move_to_ts_1.u8)("16"), (0, move_to_ts_1.u8)("27"), (0, move_to_ts_1.u8)("204"), (0, move_to_ts_1.u8)("66"), (0, move_to_ts_1.u8)("68"), (0, move_to_ts_1.u8)("212"), (0, move_to_ts_1.u8)("73"), (0, move_to_ts_1.u8)("244"), (0, move_to_ts_1.u8)("168"), (0, move_to_ts_1.u8)("121"), (0, move_to_ts_1.u8)("217"), (0, move_to_ts_1.u8)("242"), (0, move_to_ts_1.u8)("4")];
exports.X_TIMES_Y_SCALAR = [(0, move_to_ts_1.u8)("108"), (0, move_to_ts_1.u8)("51"), (0, move_to_ts_1.u8)("116"), (0, move_to_ts_1.u8)("161"), (0, move_to_ts_1.u8)("137"), (0, move_to_ts_1.u8)("79"), (0, move_to_ts_1.u8)("98"), (0, move_to_ts_1.u8)("33"), (0, move_to_ts_1.u8)("10"), (0, move_to_ts_1.u8)("170"), (0, move_to_ts_1.u8)("47"), (0, move_to_ts_1.u8)("225"), (0, move_to_ts_1.u8)("134"), (0, move_to_ts_1.u8)("166"), (0, move_to_ts_1.u8)("249"), (0, move_to_ts_1.u8)("44"), (0, move_to_ts_1.u8)("224"), (0, move_to_ts_1.u8)("170"), (0, move_to_ts_1.u8)("117"), (0, move_to_ts_1.u8)("194"), (0, move_to_ts_1.u8)("119"), (0, move_to_ts_1.u8)("149"), (0, move_to_ts_1.u8)("129"), (0, move_to_ts_1.u8)("194"), (0, move_to_ts_1.u8)("149"), (0, move_to_ts_1.u8)("252"), (0, move_to_ts_1.u8)("8"), (0, move_to_ts_1.u8)("23"), (0, move_to_ts_1.u8)("154"), (0, move_to_ts_1.u8)("115"), (0, move_to_ts_1.u8)("148"), (0, move_to_ts_1.u8)("12")];
exports.Y_SCALAR = [(0, move_to_ts_1.u8)("144"), (0, move_to_ts_1.u8)("118"), (0, move_to_ts_1.u8)("51"), (0, move_to_ts_1.u8)("254"), (0, move_to_ts_1.u8)("28"), (0, move_to_ts_1.u8)("75"), (0, move_to_ts_1.u8)("102"), (0, move_to_ts_1.u8)("164"), (0, move_to_ts_1.u8)("162"), (0, move_to_ts_1.u8)("141"), (0, move_to_ts_1.u8)("45"), (0, move_to_ts_1.u8)("215"), (0, move_to_ts_1.u8)("103"), (0, move_to_ts_1.u8)("131"), (0, move_to_ts_1.u8)("134"), (0, move_to_ts_1.u8)("195"), (0, move_to_ts_1.u8)("83"), (0, move_to_ts_1.u8)("208"), (0, move_to_ts_1.u8)("222"), (0, move_to_ts_1.u8)("84"), (0, move_to_ts_1.u8)("85"), (0, move_to_ts_1.u8)("212"), (0, move_to_ts_1.u8)("252"), (0, move_to_ts_1.u8)("157"), (0, move_to_ts_1.u8)("232"), (0, move_to_ts_1.u8)("239"), (0, move_to_ts_1.u8)("122"), (0, move_to_ts_1.u8)("195"), (0, move_to_ts_1.u8)("31"), (0, move_to_ts_1.u8)("53"), (0, move_to_ts_1.u8)("187"), (0, move_to_ts_1.u8)("5")];
class CompressedRistretto {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.data = proto['data'];
    }
    static CompressedRistrettoParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, CompressedRistretto);
        return new CompressedRistretto(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "CompressedRistretto", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.CompressedRistretto = CompressedRistretto;
CompressedRistretto.moduleAddress = exports.moduleAddress;
CompressedRistretto.moduleName = exports.moduleName;
CompressedRistretto.structName = "CompressedRistretto";
CompressedRistretto.typeParameters = [];
CompressedRistretto.fields = [
    { name: "data", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
class RistrettoPoint {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.handle = proto['handle'];
    }
    static RistrettoPointParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, RistrettoPoint);
        return new RistrettoPoint(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "RistrettoPoint", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.RistrettoPoint = RistrettoPoint;
RistrettoPoint.moduleAddress = exports.moduleAddress;
RistrettoPoint.moduleName = exports.moduleName;
RistrettoPoint.structName = "RistrettoPoint";
RistrettoPoint.typeParameters = [];
RistrettoPoint.fields = [
    { name: "handle", typeTag: move_to_ts_2.AtomicTypeTag.U64 }
];
class Scalar {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.data = proto['data'];
    }
    static ScalarParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, Scalar);
        return new Scalar(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "Scalar", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.Scalar = Scalar;
Scalar.moduleAddress = exports.moduleAddress;
Scalar.moduleName = exports.moduleName;
Scalar.structName = "Scalar";
Scalar.typeParameters = [];
Scalar.fields = [
    { name: "data", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
function basepoint_($c) {
    let handle;
    [handle,] = point_decompress_internal_($.copy(exports.BASE_POINT), $c);
    return new RistrettoPoint({ handle: $.copy(handle) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint));
}
exports.basepoint_ = basepoint_;
function basepoint_compressed_($c) {
    return new CompressedRistretto({ data: $.copy(exports.BASE_POINT) }, new move_to_ts_2.SimpleStructTag(CompressedRistretto));
}
exports.basepoint_compressed_ = basepoint_compressed_;
function basepoint_double_mul_(a, some_point, b, $c) {
    return new RistrettoPoint({ handle: basepoint_double_mul_internal_($.copy(a.data), some_point, $.copy(b.data), $c) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint));
}
exports.basepoint_double_mul_ = basepoint_double_mul_;
function basepoint_double_mul_internal_(a, some_point, b, $c) {
    throw 'Not Implemented';
}
exports.basepoint_double_mul_internal_ = basepoint_double_mul_internal_;
function basepoint_mul_(a, $c) {
    return new RistrettoPoint({ handle: basepoint_mul_internal_($.copy(a.data), $c) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint));
}
exports.basepoint_mul_ = basepoint_mul_;
function basepoint_mul_internal_(a, $c) {
    throw 'Not Implemented';
}
exports.basepoint_mul_internal_ = basepoint_mul_internal_;
function multi_scalar_mul_(points, scalars, $c) {
    if (!!Vector.is_empty_(points, $c, [new move_to_ts_2.SimpleStructTag(RistrettoPoint)])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.E_ZERO_POINTS), $c));
    }
    if (!!Vector.is_empty_(scalars, $c, [new move_to_ts_2.SimpleStructTag(Scalar)])) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.E_ZERO_SCALARS), $c));
    }
    if (!(Vector.length_(points, $c, [new move_to_ts_2.SimpleStructTag(RistrettoPoint)])).eq((Vector.length_(scalars, $c, [new move_to_ts_2.SimpleStructTag(Scalar)])))) {
        throw $.abortCode(Error.invalid_argument_($.copy(exports.E_DIFFERENT_NUM_POINTS_AND_SCALARS), $c));
    }
    return new RistrettoPoint({ handle: multi_scalar_mul_internal_(points, scalars, $c, [new move_to_ts_2.SimpleStructTag(RistrettoPoint), new move_to_ts_2.SimpleStructTag(Scalar)]) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint));
}
exports.multi_scalar_mul_ = multi_scalar_mul_;
function multi_scalar_mul_internal_(points, scalars, $c, $p) {
    throw 'Not Implemented';
}
exports.multi_scalar_mul_internal_ = multi_scalar_mul_internal_;
function new_compressed_point_from_bytes_(bytes, $c) {
    let temp$1;
    if (point_is_canonical_internal_($.copy(bytes), $c)) {
        temp$1 = Option.some_(new CompressedRistretto({ data: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(CompressedRistretto)), $c, [new move_to_ts_2.SimpleStructTag(CompressedRistretto)]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(CompressedRistretto)]);
    }
    return temp$1;
}
exports.new_compressed_point_from_bytes_ = new_compressed_point_from_bytes_;
function new_point_from_64_uniform_bytes_(bytes, $c) {
    let temp$1;
    if ((Vector.length_(bytes, $c, [move_to_ts_2.AtomicTypeTag.U8])).eq(((0, move_to_ts_1.u64)("64")))) {
        temp$1 = Option.some_(new RistrettoPoint({ handle: new_point_from_64_uniform_bytes_internal_($.copy(bytes), $c) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint)), $c, [new move_to_ts_2.SimpleStructTag(RistrettoPoint)]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(RistrettoPoint)]);
    }
    return temp$1;
}
exports.new_point_from_64_uniform_bytes_ = new_point_from_64_uniform_bytes_;
function new_point_from_64_uniform_bytes_internal_(bytes, $c) {
    throw 'Not Implemented';
}
exports.new_point_from_64_uniform_bytes_internal_ = new_point_from_64_uniform_bytes_internal_;
function new_point_from_bytes_(bytes, $c) {
    let temp$1, handle, is_canonical;
    [handle, is_canonical] = point_decompress_internal_($.copy(bytes), $c);
    if (is_canonical) {
        temp$1 = Option.some_(new RistrettoPoint({ handle: $.copy(handle) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint)), $c, [new move_to_ts_2.SimpleStructTag(RistrettoPoint)]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(RistrettoPoint)]);
    }
    return temp$1;
}
exports.new_point_from_bytes_ = new_point_from_bytes_;
function new_point_from_sha512_(sha512, $c) {
    return new RistrettoPoint({ handle: new_point_from_sha512_internal_($.copy(sha512), $c) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint));
}
exports.new_point_from_sha512_ = new_point_from_sha512_;
function new_point_from_sha512_internal_(sha512, $c) {
    throw 'Not Implemented';
}
exports.new_point_from_sha512_internal_ = new_point_from_sha512_internal_;
function new_scalar_from_bytes_(bytes, $c) {
    let temp$1;
    if (scalar_is_canonical_internal_($.copy(bytes), $c)) {
        temp$1 = Option.some_(new Scalar({ data: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(Scalar)), $c, [new move_to_ts_2.SimpleStructTag(Scalar)]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(Scalar)]);
    }
    return temp$1;
}
exports.new_scalar_from_bytes_ = new_scalar_from_bytes_;
function new_scalar_from_sha512_(sha512_input, $c) {
    return new Scalar({ data: scalar_from_sha512_internal_($.copy(sha512_input), $c) }, new move_to_ts_2.SimpleStructTag(Scalar));
}
exports.new_scalar_from_sha512_ = new_scalar_from_sha512_;
function new_scalar_from_u128_(sixteen_bytes, $c) {
    return new Scalar({ data: scalar_from_u128_internal_($.copy(sixteen_bytes), $c) }, new move_to_ts_2.SimpleStructTag(Scalar));
}
exports.new_scalar_from_u128_ = new_scalar_from_u128_;
function new_scalar_from_u64_(eight_bytes, $c) {
    return new Scalar({ data: scalar_from_u64_internal_($.copy(eight_bytes), $c) }, new move_to_ts_2.SimpleStructTag(Scalar));
}
exports.new_scalar_from_u64_ = new_scalar_from_u64_;
function new_scalar_from_u8_(byte, $c) {
    let byte_zero, s;
    s = scalar_zero_($c);
    byte_zero = Vector.borrow_mut_(s.data, (0, move_to_ts_1.u64)("0"), $c, [move_to_ts_2.AtomicTypeTag.U8]);
    $.set(byte_zero, $.copy(byte));
    return $.copy(s);
}
exports.new_scalar_from_u8_ = new_scalar_from_u8_;
function new_scalar_reduced_from_32_bytes_(bytes, $c) {
    let temp$1;
    if ((Vector.length_(bytes, $c, [move_to_ts_2.AtomicTypeTag.U8])).eq(((0, move_to_ts_1.u64)("32")))) {
        temp$1 = Option.some_(new Scalar({ data: scalar_reduced_from_32_bytes_internal_($.copy(bytes), $c) }, new move_to_ts_2.SimpleStructTag(Scalar)), $c, [new move_to_ts_2.SimpleStructTag(Scalar)]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(Scalar)]);
    }
    return temp$1;
}
exports.new_scalar_reduced_from_32_bytes_ = new_scalar_reduced_from_32_bytes_;
function new_scalar_uniform_from_64_bytes_(bytes, $c) {
    let temp$1;
    if ((Vector.length_(bytes, $c, [move_to_ts_2.AtomicTypeTag.U8])).eq(((0, move_to_ts_1.u64)("64")))) {
        temp$1 = Option.some_(new Scalar({ data: scalar_uniform_from_64_bytes_internal_($.copy(bytes), $c) }, new move_to_ts_2.SimpleStructTag(Scalar)), $c, [new move_to_ts_2.SimpleStructTag(Scalar)]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(Scalar)]);
    }
    return temp$1;
}
exports.new_scalar_uniform_from_64_bytes_ = new_scalar_uniform_from_64_bytes_;
function point_add_(a, b, $c) {
    return new RistrettoPoint({ handle: point_add_internal_(a, b, false, $c) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint));
}
exports.point_add_ = point_add_;
function point_add_assign_(a, b, $c) {
    let temp$1, temp$2, temp$3;
    [temp$1, temp$2, temp$3] = [a, b, true];
    point_add_internal_(temp$1, temp$2, temp$3, $c);
    return a;
}
exports.point_add_assign_ = point_add_assign_;
function point_add_internal_(a, b, in_place, $c) {
    throw 'Not Implemented';
}
exports.point_add_internal_ = point_add_internal_;
function point_compress_(point, $c) {
    return new CompressedRistretto({ data: point_compress_internal_(point, $c) }, new move_to_ts_2.SimpleStructTag(CompressedRistretto));
}
exports.point_compress_ = point_compress_;
function point_compress_internal_(point, $c) {
    throw 'Not Implemented';
}
exports.point_compress_internal_ = point_compress_internal_;
function point_decompress_(point, $c) {
    let handle;
    [handle,] = point_decompress_internal_($.copy(point.data), $c);
    return new RistrettoPoint({ handle: $.copy(handle) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint));
}
exports.point_decompress_ = point_decompress_;
function point_decompress_internal_(maybe_non_canonical_bytes, $c) {
    throw 'Not Implemented';
}
exports.point_decompress_internal_ = point_decompress_internal_;
function point_equals_(g, h, $c) {
    throw 'Not Implemented';
}
exports.point_equals_ = point_equals_;
function point_identity_($c) {
    return new RistrettoPoint({ handle: point_identity_internal_($c) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint));
}
exports.point_identity_ = point_identity_;
function point_identity_compressed_($c) {
    return new CompressedRistretto({ data: [(0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0")] }, new move_to_ts_2.SimpleStructTag(CompressedRistretto));
}
exports.point_identity_compressed_ = point_identity_compressed_;
function point_identity_internal_($c) {
    throw 'Not Implemented';
}
exports.point_identity_internal_ = point_identity_internal_;
function point_is_canonical_internal_(bytes, $c) {
    throw 'Not Implemented';
}
exports.point_is_canonical_internal_ = point_is_canonical_internal_;
function point_mul_(point, a, $c) {
    return new RistrettoPoint({ handle: point_mul_internal_(point, $.copy(a.data), false, $c) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint));
}
exports.point_mul_ = point_mul_;
function point_mul_assign_(point, a, $c) {
    let temp$1, temp$2, temp$3;
    [temp$1, temp$2, temp$3] = [point, $.copy(a.data), true];
    point_mul_internal_(temp$1, temp$2, temp$3, $c);
    return point;
}
exports.point_mul_assign_ = point_mul_assign_;
function point_mul_internal_(point, a, in_place, $c) {
    throw 'Not Implemented';
}
exports.point_mul_internal_ = point_mul_internal_;
function point_neg_(a, $c) {
    return new RistrettoPoint({ handle: point_neg_internal_(a, false, $c) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint));
}
exports.point_neg_ = point_neg_;
function point_neg_assign_(a, $c) {
    let temp$1, temp$2;
    [temp$1, temp$2] = [a, true];
    point_neg_internal_(temp$1, temp$2, $c);
    return a;
}
exports.point_neg_assign_ = point_neg_assign_;
function point_neg_internal_(a, in_place, $c) {
    throw 'Not Implemented';
}
exports.point_neg_internal_ = point_neg_internal_;
function point_sub_(a, b, $c) {
    return new RistrettoPoint({ handle: point_sub_internal_(a, b, false, $c) }, new move_to_ts_2.SimpleStructTag(RistrettoPoint));
}
exports.point_sub_ = point_sub_;
function point_sub_assign_(a, b, $c) {
    let temp$1, temp$2, temp$3;
    [temp$1, temp$2, temp$3] = [a, b, true];
    point_sub_internal_(temp$1, temp$2, temp$3, $c);
    return a;
}
exports.point_sub_assign_ = point_sub_assign_;
function point_sub_internal_(a, b, in_place, $c) {
    throw 'Not Implemented';
}
exports.point_sub_internal_ = point_sub_internal_;
function point_to_bytes_(point, $c) {
    return $.copy(point.data);
}
exports.point_to_bytes_ = point_to_bytes_;
function scalar_add_(a, b, $c) {
    return new Scalar({ data: scalar_add_internal_($.copy(a.data), $.copy(b.data), $c) }, new move_to_ts_2.SimpleStructTag(Scalar));
}
exports.scalar_add_ = scalar_add_;
function scalar_add_assign_(a, b, $c) {
    let temp$1, temp$2, temp$3;
    [temp$1, temp$2] = [a, b];
    temp$3 = scalar_add_(temp$1, temp$2, $c);
    a.data = $.copy(temp$3.data);
    return a;
}
exports.scalar_add_assign_ = scalar_add_assign_;
function scalar_add_internal_(a_bytes, b_bytes, $c) {
    throw 'Not Implemented';
}
exports.scalar_add_internal_ = scalar_add_internal_;
function scalar_equals_(lhs, rhs, $c) {
    return $.veq($.copy(lhs.data), $.copy(rhs.data));
}
exports.scalar_equals_ = scalar_equals_;
function scalar_from_sha512_internal_(sha512_input, $c) {
    throw 'Not Implemented';
}
exports.scalar_from_sha512_internal_ = scalar_from_sha512_internal_;
function scalar_from_u128_internal_(num, $c) {
    throw 'Not Implemented';
}
exports.scalar_from_u128_internal_ = scalar_from_u128_internal_;
function scalar_from_u64_internal_(num, $c) {
    throw 'Not Implemented';
}
exports.scalar_from_u64_internal_ = scalar_from_u64_internal_;
function scalar_invert_(s, $c) {
    let temp$1;
    if (scalar_is_zero_(s, $c)) {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(Scalar)]);
    }
    else {
        temp$1 = Option.some_(new Scalar({ data: scalar_invert_internal_($.copy(s.data), $c) }, new move_to_ts_2.SimpleStructTag(Scalar)), $c, [new move_to_ts_2.SimpleStructTag(Scalar)]);
    }
    return temp$1;
}
exports.scalar_invert_ = scalar_invert_;
function scalar_invert_internal_(bytes, $c) {
    throw 'Not Implemented';
}
exports.scalar_invert_internal_ = scalar_invert_internal_;
function scalar_is_canonical_internal_(s, $c) {
    throw 'Not Implemented';
}
exports.scalar_is_canonical_internal_ = scalar_is_canonical_internal_;
function scalar_is_one_(s, $c) {
    return $.veq($.copy(s.data), [(0, move_to_ts_1.u8)("1"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0")]);
}
exports.scalar_is_one_ = scalar_is_one_;
function scalar_is_zero_(s, $c) {
    return $.veq($.copy(s.data), [(0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0")]);
}
exports.scalar_is_zero_ = scalar_is_zero_;
function scalar_mul_(a, b, $c) {
    return new Scalar({ data: scalar_mul_internal_($.copy(a.data), $.copy(b.data), $c) }, new move_to_ts_2.SimpleStructTag(Scalar));
}
exports.scalar_mul_ = scalar_mul_;
function scalar_mul_assign_(a, b, $c) {
    let temp$1, temp$2, temp$3;
    [temp$1, temp$2] = [a, b];
    temp$3 = scalar_mul_(temp$1, temp$2, $c);
    a.data = $.copy(temp$3.data);
    return a;
}
exports.scalar_mul_assign_ = scalar_mul_assign_;
function scalar_mul_internal_(a_bytes, b_bytes, $c) {
    throw 'Not Implemented';
}
exports.scalar_mul_internal_ = scalar_mul_internal_;
function scalar_neg_(a, $c) {
    return new Scalar({ data: scalar_neg_internal_($.copy(a.data), $c) }, new move_to_ts_2.SimpleStructTag(Scalar));
}
exports.scalar_neg_ = scalar_neg_;
function scalar_neg_assign_(a, $c) {
    let temp$1;
    temp$1 = scalar_neg_(a, $c);
    a.data = $.copy(temp$1.data);
    return a;
}
exports.scalar_neg_assign_ = scalar_neg_assign_;
function scalar_neg_internal_(a_bytes, $c) {
    throw 'Not Implemented';
}
exports.scalar_neg_internal_ = scalar_neg_internal_;
function scalar_one_($c) {
    return new Scalar({ data: [(0, move_to_ts_1.u8)("1"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0")] }, new move_to_ts_2.SimpleStructTag(Scalar));
}
exports.scalar_one_ = scalar_one_;
function scalar_reduced_from_32_bytes_internal_(bytes, $c) {
    throw 'Not Implemented';
}
exports.scalar_reduced_from_32_bytes_internal_ = scalar_reduced_from_32_bytes_internal_;
function scalar_sub_(a, b, $c) {
    return new Scalar({ data: scalar_sub_internal_($.copy(a.data), $.copy(b.data), $c) }, new move_to_ts_2.SimpleStructTag(Scalar));
}
exports.scalar_sub_ = scalar_sub_;
function scalar_sub_assign_(a, b, $c) {
    let temp$1, temp$2, temp$3;
    [temp$1, temp$2] = [a, b];
    temp$3 = scalar_sub_(temp$1, temp$2, $c);
    a.data = $.copy(temp$3.data);
    return a;
}
exports.scalar_sub_assign_ = scalar_sub_assign_;
function scalar_sub_internal_(a_bytes, b_bytes, $c) {
    throw 'Not Implemented';
}
exports.scalar_sub_internal_ = scalar_sub_internal_;
function scalar_to_bytes_(s, $c) {
    return $.copy(s.data);
}
exports.scalar_to_bytes_ = scalar_to_bytes_;
function scalar_uniform_from_64_bytes_internal_(bytes, $c) {
    throw 'Not Implemented';
}
exports.scalar_uniform_from_64_bytes_internal_ = scalar_uniform_from_64_bytes_internal_;
function scalar_zero_($c) {
    return new Scalar({ data: [(0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0"), (0, move_to_ts_1.u8)("0")] }, new move_to_ts_2.SimpleStructTag(Scalar));
}
exports.scalar_zero_ = scalar_zero_;
function loadParsers(repo) {
    repo.addParser("0x1::ristretto255::CompressedRistretto", CompressedRistretto.CompressedRistrettoParser);
    repo.addParser("0x1::ristretto255::RistrettoPoint", RistrettoPoint.RistrettoPointParser);
    repo.addParser("0x1::ristretto255::Scalar", Scalar.ScalarParser);
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
    get CompressedRistretto() { return CompressedRistretto; }
    get RistrettoPoint() { return RistrettoPoint; }
    get Scalar() { return Scalar; }
}
exports.App = App;
//# sourceMappingURL=ristretto255.js.map