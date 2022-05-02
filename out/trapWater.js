"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trap = void 0;
function trap(height) {
    var solution = 0;
    for (var i = 0; i < height.length; i++) {
        var tempHeight = __spreadArray([], __read(height), false);
        tempHeight.length = i >= 0 ? i : 0;
        tempHeight.sort(function (a, b) { return a - b; });
        var currentMaxLeft = tempHeight[tempHeight.length - 1] || 0;
        tempHeight = __spreadArray([], __read(height), false);
        for (var j = 0; j <= i; j++)
            tempHeight.shift();
        tempHeight.sort(function (a, b) { return a - b; });
        var currentMaxRight = tempHeight[tempHeight.length - 1];
        if (Math.min(currentMaxLeft, currentMaxRight) - height[i] > 0) {
            solution += Math.min(currentMaxLeft, currentMaxRight) - height[i];
        }
    }
    return solution;
}
exports.trap = trap;
;
//# sourceMappingURL=trapWater.js.map