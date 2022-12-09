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
exports.App = exports.loadParsers = exports.unset_ = exports.shift_left_ = exports.set_ = exports.new___ = exports.longest_set_sequence_starting_at_ = exports.length_ = exports.is_index_set_ = exports.BitVector = exports.WORD_SIZE = exports.MAX_SIZE = exports.ELENGTH = exports.EINDEX = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const move_to_ts_2 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
const Vector = __importStar(require("./vector"));
exports.packageName = "MoveStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "bit_vector";
exports.EINDEX = (0, move_to_ts_1.u64)("131072");
exports.ELENGTH = (0, move_to_ts_1.u64)("131073");
exports.MAX_SIZE = (0, move_to_ts_1.u64)("1024");
exports.WORD_SIZE = (0, move_to_ts_1.u64)("1");
class BitVector {
    constructor(proto, typeTag) {
        this.typeTag = typeTag;
        this.__app = null;
        this.length = proto['length'];
        this.bit_field = proto['bit_field'];
    }
    static BitVectorParser(data, typeTag, repo) {
        const proto = $.parseStructProto(data, typeTag, repo, BitVector);
        return new BitVector(proto, typeTag);
    }
    static getTag() {
        return new move_to_ts_2.StructTag(exports.moduleAddress, exports.moduleName, "BitVector", []);
    }
    loadFullState(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.__app = app;
        });
    }
}
exports.BitVector = BitVector;
BitVector.moduleAddress = exports.moduleAddress;
BitVector.moduleName = exports.moduleName;
BitVector.structName = "BitVector";
BitVector.typeParameters = [];
BitVector.fields = [
    { name: "length", typeTag: move_to_ts_2.AtomicTypeTag.U64 },
    { name: "bit_field", typeTag: new move_to_ts_2.VectorTag(move_to_ts_2.AtomicTypeTag.Bool) }
];
function is_index_set_(bitvector, bit_index, $c) {
    if (!($.copy(bit_index)).lt(Vector.length_(bitvector.bit_field, $c, [move_to_ts_2.AtomicTypeTag.Bool]))) {
        throw $.abortCode($.copy(exports.EINDEX));
    }
    return $.copy(Vector.borrow_(bitvector.bit_field, $.copy(bit_index), $c, [move_to_ts_2.AtomicTypeTag.Bool]));
}
exports.is_index_set_ = is_index_set_;
function length_(bitvector, $c) {
    return Vector.length_(bitvector.bit_field, $c, [move_to_ts_2.AtomicTypeTag.Bool]);
}
exports.length_ = length_;
function longest_set_sequence_starting_at_(bitvector, start_index, $c) {
    let index;
    if (!($.copy(start_index)).lt($.copy(bitvector.length))) {
        throw $.abortCode($.copy(exports.EINDEX));
    }
    index = $.copy(start_index);
    while (($.copy(index)).lt($.copy(bitvector.length))) {
        {
            if (!is_index_set_(bitvector, $.copy(index), $c)) {
                break;
            }
            else {
            }
            index = ($.copy(index)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return ($.copy(index)).sub($.copy(start_index));
}
exports.longest_set_sequence_starting_at_ = longest_set_sequence_starting_at_;
function new___(length, $c) {
    let bit_field, counter;
    if (!($.copy(length)).gt((0, move_to_ts_1.u64)("0"))) {
        throw $.abortCode($.copy(exports.ELENGTH));
    }
    if (!($.copy(length)).lt($.copy(exports.MAX_SIZE))) {
        throw $.abortCode($.copy(exports.ELENGTH));
    }
    counter = (0, move_to_ts_1.u64)("0");
    bit_field = Vector.empty_($c, [move_to_ts_2.AtomicTypeTag.Bool]);
    while (true) {
        {
            ;
        }
        if (!(($.copy(counter)).lt($.copy(length))))
            break;
        {
            Vector.push_back_(bit_field, false, $c, [move_to_ts_2.AtomicTypeTag.Bool]);
            counter = ($.copy(counter)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    ;
    return new BitVector({ length: $.copy(length), bit_field: $.copy(bit_field) }, new move_to_ts_2.SimpleStructTag(BitVector));
}
exports.new___ = new___;
function set_(bitvector, bit_index, $c) {
    let x;
    if (!($.copy(bit_index)).lt(Vector.length_(bitvector.bit_field, $c, [move_to_ts_2.AtomicTypeTag.Bool]))) {
        throw $.abortCode($.copy(exports.EINDEX));
    }
    x = Vector.borrow_mut_(bitvector.bit_field, $.copy(bit_index), $c, [move_to_ts_2.AtomicTypeTag.Bool]);
    $.set(x, true);
    return;
}
exports.set_ = set_;
function shift_left_(bitvector, amount, $c) {
    let temp$2, temp$3, elem, i, i__1, len;
    if (($.copy(amount)).ge($.copy(bitvector.length))) {
        len = Vector.length_(bitvector.bit_field, $c, [move_to_ts_2.AtomicTypeTag.Bool]);
        i = (0, move_to_ts_1.u64)("0");
        while (($.copy(i)).lt($.copy(len))) {
            {
                elem = Vector.borrow_mut_(bitvector.bit_field, $.copy(i), $c, [move_to_ts_2.AtomicTypeTag.Bool]);
                $.set(elem, false);
                i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
            }
        }
    }
    else {
        i__1 = $.copy(amount);
        while (($.copy(i__1)).lt($.copy(bitvector.length))) {
            {
                [temp$2, temp$3] = [bitvector, $.copy(i__1)];
                if (is_index_set_(temp$2, temp$3, $c)) {
                    set_(bitvector, ($.copy(i__1)).sub($.copy(amount)), $c);
                }
                else {
                    unset_(bitvector, ($.copy(i__1)).sub($.copy(amount)), $c);
                }
                i__1 = ($.copy(i__1)).add((0, move_to_ts_1.u64)("1"));
            }
        }
        i__1 = ($.copy(bitvector.length)).sub($.copy(amount));
        while (($.copy(i__1)).lt($.copy(bitvector.length))) {
            {
                unset_(bitvector, $.copy(i__1), $c);
                i__1 = ($.copy(i__1)).add((0, move_to_ts_1.u64)("1"));
            }
        }
    }
    return;
}
exports.shift_left_ = shift_left_;
function unset_(bitvector, bit_index, $c) {
    let x;
    if (!($.copy(bit_index)).lt(Vector.length_(bitvector.bit_field, $c, [move_to_ts_2.AtomicTypeTag.Bool]))) {
        throw $.abortCode($.copy(exports.EINDEX));
    }
    x = Vector.borrow_mut_(bitvector.bit_field, $.copy(bit_index), $c, [move_to_ts_2.AtomicTypeTag.Bool]);
    $.set(x, false);
    return;
}
exports.unset_ = unset_;
function loadParsers(repo) {
    repo.addParser("0x1::bit_vector::BitVector", BitVector.BitVectorParser);
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
    get BitVector() { return BitVector; }
}
exports.App = App;
//# sourceMappingURL=bit_vector.js.map