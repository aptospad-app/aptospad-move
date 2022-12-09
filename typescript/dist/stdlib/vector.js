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
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.loadParsers = exports.swap_remove_ = exports.swap_ = exports.singleton_ = exports.reverse_ = exports.remove_ = exports.push_back_ = exports.pop_back_ = exports.length_ = exports.is_empty_ = exports.index_of_ = exports.empty_ = exports.destroy_empty_ = exports.contains_ = exports.borrow_mut_ = exports.borrow_ = exports.append_ = exports.EINDEX_OUT_OF_BOUNDS = exports.moduleName = exports.moduleAddress = exports.packageName = void 0;
const $ = __importStar(require("@manahippo/move-to-ts"));
const move_to_ts_1 = require("@manahippo/move-to-ts");
const aptos_1 = require("aptos");
exports.packageName = "MoveStdlib";
exports.moduleAddress = new aptos_1.HexString("0x1");
exports.moduleName = "vector";
exports.EINDEX_OUT_OF_BOUNDS = (0, move_to_ts_1.u64)("131072");
function append_(lhs, other, $c, $p) {
    reverse_(other, $c, [$p[0]]);
    while (!is_empty_(other, $c, [$p[0]])) {
        {
            push_back_(lhs, pop_back_(other, $c, [$p[0]]), $c, [$p[0]]);
        }
    }
    destroy_empty_(other, $c, [$p[0]]);
    return;
}
exports.append_ = append_;
function borrow_(v, i, $c, $p) {
    return $.std_vector_borrow(v, i, $c, [$p[0]]);
}
exports.borrow_ = borrow_;
function borrow_mut_(v, i, $c, $p) {
    return $.std_vector_borrow_mut(v, i, $c, [$p[0]]);
}
exports.borrow_mut_ = borrow_mut_;
function contains_(v, e, $c, $p) {
    let i, len;
    i = (0, move_to_ts_1.u64)("0");
    len = length_(v, $c, [$p[0]]);
    while (($.copy(i)).lt($.copy(len))) {
        {
            if ($.dyn_eq($p[0], borrow_(v, $.copy(i), $c, [$p[0]]), e)) {
                return true;
            }
            else {
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return false;
}
exports.contains_ = contains_;
function destroy_empty_(v, $c, $p) {
    return $.std_vector_destroy_empty(v, $c, [$p[0]]);
}
exports.destroy_empty_ = destroy_empty_;
function empty_($c, $p) {
    return $.std_vector_empty($c, [$p[0]]);
}
exports.empty_ = empty_;
function index_of_(v, e, $c, $p) {
    let i, len;
    i = (0, move_to_ts_1.u64)("0");
    len = length_(v, $c, [$p[0]]);
    while (($.copy(i)).lt($.copy(len))) {
        {
            if ($.dyn_eq($p[0], borrow_(v, $.copy(i), $c, [$p[0]]), e)) {
                return [true, $.copy(i)];
            }
            else {
            }
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
        }
    }
    return [false, (0, move_to_ts_1.u64)("0")];
}
exports.index_of_ = index_of_;
function is_empty_(v, $c, $p) {
    return (length_(v, $c, [$p[0]])).eq(((0, move_to_ts_1.u64)("0")));
}
exports.is_empty_ = is_empty_;
function length_(v, $c, $p) {
    return $.std_vector_length(v, $c, [$p[0]]);
}
exports.length_ = length_;
function pop_back_(v, $c, $p) {
    return $.std_vector_pop_back(v, $c, [$p[0]]);
}
exports.pop_back_ = pop_back_;
function push_back_(v, e, $c, $p) {
    return $.std_vector_push_back(v, e, $c, [$p[0]]);
}
exports.push_back_ = push_back_;
function remove_(v, i, $c, $p) {
    let temp$1, temp$2, len;
    len = length_(v, $c, [$p[0]]);
    if (($.copy(i)).ge($.copy(len))) {
        throw $.abortCode($.copy(exports.EINDEX_OUT_OF_BOUNDS));
    }
    else {
    }
    len = ($.copy(len)).sub((0, move_to_ts_1.u64)("1"));
    while (($.copy(i)).lt($.copy(len))) {
        {
            temp$2 = v;
            temp$1 = $.copy(i);
            i = ($.copy(i)).add((0, move_to_ts_1.u64)("1"));
            swap_(temp$2, temp$1, $.copy(i), $c, [$p[0]]);
        }
    }
    return pop_back_(v, $c, [$p[0]]);
}
exports.remove_ = remove_;
function reverse_(v, $c, $p) {
    let back_index, front_index, len;
    len = length_(v, $c, [$p[0]]);
    if (($.copy(len)).eq(((0, move_to_ts_1.u64)("0")))) {
        return;
    }
    else {
    }
    front_index = (0, move_to_ts_1.u64)("0");
    back_index = ($.copy(len)).sub((0, move_to_ts_1.u64)("1"));
    while (($.copy(front_index)).lt($.copy(back_index))) {
        {
            swap_(v, $.copy(front_index), $.copy(back_index), $c, [$p[0]]);
            front_index = ($.copy(front_index)).add((0, move_to_ts_1.u64)("1"));
            back_index = ($.copy(back_index)).sub((0, move_to_ts_1.u64)("1"));
        }
    }
    return;
}
exports.reverse_ = reverse_;
function singleton_(e, $c, $p) {
    let v;
    v = empty_($c, [$p[0]]);
    push_back_(v, e, $c, [$p[0]]);
    return v;
}
exports.singleton_ = singleton_;
function swap_(v, i, j, $c, $p) {
    return $.std_vector_swap(v, i, j, $c, [$p[0]]);
}
exports.swap_ = swap_;
function swap_remove_(v, i, $c, $p) {
    let last_idx;
    if (!!is_empty_(v, $c, [$p[0]])) {
        throw $.abortCode($.copy(exports.EINDEX_OUT_OF_BOUNDS));
    }
    last_idx = (length_(v, $c, [$p[0]])).sub((0, move_to_ts_1.u64)("1"));
    swap_(v, $.copy(i), $.copy(last_idx), $c, [$p[0]]);
    return pop_back_(v, $c, [$p[0]]);
}
exports.swap_remove_ = swap_remove_;
function loadParsers(repo) {
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
}
exports.App = App;
//# sourceMappingURL=vector.js.map