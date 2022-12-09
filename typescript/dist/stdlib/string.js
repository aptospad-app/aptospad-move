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
exports.App = exports.loadParsers = exports.utf8_ = exports.try_utf8_ = exports.sub_string_ = exports.length_ = exports.is_empty_ = exports.internal_sub_string_ = exports.internal_is_char_boundary_ = exports.internal_index_of_ = exports.internal_check_utf8_ = exports.insert_ = exports.index_of_ = exports.bytes_ = exports.append_utf8_ = exports.append_ = exports.String = exports.EINVALID_UTF8 = exports.EINVALID_INDEX = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Option = __importStar(require("./option"));
const Vector = __importStar(require("./vector"));
exports.packageName = "MoveStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "string";
exports.EINVALID_INDEX = (0, move_to_ts_1.u64)("2");
exports.EINVALID_UTF8 = (0, move_to_ts_1.u64)("1");
class String {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.bytes = proto['bytes'];
    }
    static StringParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, String);
        return new String(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "String", []);
    }
    str() { return $.u8str(this.bytes); }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.String = String;
String.moduleAddress = exports.moduleAddress;
String.moduleName = exports.moduleName;
String.structName = "String";
String.typeParameters = [];
String.fields = [
    { name: "bytes", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.U8) }
];
function append_(s, r, $c) {
    return Vector.append_(s.bytes, $.copy(r.bytes), $c, [move_to_ts_2.AtomicTypeTag.U8]);
}
exports.append_ = append_;
function append_utf8_(s, bytes, $c) {
    return append_(s, utf8_($.copy(bytes), $c), $c);
}
exports.append_utf8_ = append_utf8_;
function bytes_(s, $c) {
    return s.bytes;
}
exports.bytes_ = bytes_;
function index_of_(s, r, $c) {
    return internal_index_of_(s.bytes, r.bytes, $c);
}
exports.index_of_ = index_of_;
function insert_(s, at, o, $c) {
    let temp$1, temp$2, temp$3, temp$4, temp$5, temp$6, temp$7, bytes, end, front, l;
    bytes = s.bytes;
    if (($.copy(at)).le(Vector.length_(bytes, $c, [move_to_ts_2.AtomicTypeTag.U8]))) {
        temp$1 = internal_is_char_boundary_(bytes, $.copy(at), $c);
    }
    else {
        temp$1 = false;
    }
    if (!temp$1) {
        throw $.abortCode($.copy(exports.EINVALID_INDEX));
    }
    l = length_(s, $c);
    [temp$2, temp$3, temp$4] = [s, (0, move_to_ts_1.u64)("0"), $.copy(at)];
    front = sub_string_(temp$2, temp$3, temp$4, $c);
    [temp$5, temp$6, temp$7] = [s, $.copy(at), $.copy(l)];
    end = sub_string_(temp$5, temp$6, temp$7, $c);
    append_(front, $.copy(o), $c);
    append_(front, $.copy(end), $c);
    $.set(s, $.copy(front));
    return;
}
exports.insert_ = insert_;
function internal_check_utf8_(v, $c) {
    return $.std_string_internal_check_utf8(v, $c);
}
exports.internal_check_utf8_ = internal_check_utf8_;
function internal_index_of_(v, r, $c) {
    return $.std_string_internal_index_of(v, r, $c);
}
exports.internal_index_of_ = internal_index_of_;
function internal_is_char_boundary_(v, i, $c) {
    return $.std_string_internal_is_char_boundary(v, i, $c);
}
exports.internal_is_char_boundary_ = internal_is_char_boundary_;
function internal_sub_string_(v, i, j, $c) {
    return $.std_string_internal_sub_string(v, i, j, $c);
}
exports.internal_sub_string_ = internal_sub_string_;
function is_empty_(s, $c) {
    return Vector.is_empty_(s.bytes, $c, [move_to_ts_2.AtomicTypeTag.U8]);
}
exports.is_empty_ = is_empty_;
function length_(s, $c) {
    return Vector.length_(s.bytes, $c, [move_to_ts_2.AtomicTypeTag.U8]);
}
exports.length_ = length_;
function sub_string_(s, i, j, $c) {
    let temp$1, temp$2, temp$3, bytes, l;
    bytes = s.bytes;
    l = Vector.length_(bytes, $c, [move_to_ts_2.AtomicTypeTag.U8]);
    if (($.copy(j)).le($.copy(l))) {
        temp$1 = ($.copy(i)).le($.copy(j));
    }
    else {
        temp$1 = false;
    }
    if (temp$1) {
        temp$2 = internal_is_char_boundary_(bytes, $.copy(i), $c);
    }
    else {
        temp$2 = false;
    }
    if (temp$2) {
        temp$3 = internal_is_char_boundary_(bytes, $.copy(j), $c);
    }
    else {
        temp$3 = false;
    }
    if (!temp$3) {
        throw $.abortCode($.copy(exports.EINVALID_INDEX));
    }
    return new String({ bytes: internal_sub_string_(bytes, $.copy(i), $.copy(j), $c) }, new move_to_ts_2.SimpleStructTag(String));
}
exports.sub_string_ = sub_string_;
function try_utf8_(bytes, $c) {
    let temp$1;
    if (internal_check_utf8_(bytes, $c)) {
        temp$1 = Option.some_(new String({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(String)), $c, [new move_to_ts_2.SimpleStructTag(String)]);
    }
    else {
        temp$1 = Option.none_($c, [new move_to_ts_2.SimpleStructTag(String)]);
    }
    return temp$1;
}
exports.try_utf8_ = try_utf8_;
function utf8_(bytes, $c) {
    if (!internal_check_utf8_(bytes, $c)) {
        throw $.abortCode($.copy(exports.EINVALID_UTF8));
    }
    return new String({ bytes: $.copy(bytes) }, new move_to_ts_2.SimpleStructTag(String));
}
exports.utf8_ = utf8_;
function loadParsers(repo) {
    repo.addParser("0x1::string::String", String.StringParser);
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
    get String() { return String; }
}
exports.App = App;
//# sourceMappingURL=string.js.map