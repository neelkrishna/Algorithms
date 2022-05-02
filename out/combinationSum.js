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
exports.combinationSum = void 0;
function combinationSum(candidates, target) {
    var results = [];
    function backtrack(movingTarget, solution, index) {
        if (movingTarget === 0)
            results.push(solution);
        if (movingTarget < 0)
            return;
        for (var i = index; i < candidates.length; i++) {
            var newSolution = __spreadArray([], __read(solution), false);
            newSolution.push(candidates[i]);
            backtrack((movingTarget - candidates[i]), newSolution, i);
        }
    }
    backtrack(target, [], 0);
    return results;
}
exports.combinationSum = combinationSum;
;
//# sourceMappingURL=combinationSum.js.map