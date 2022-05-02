"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial2 = exports.sortArray = exports.rvsStr = void 0;
function rvsStr(s) {
    return reverse(s, 0, s.length - 1);
}
exports.rvsStr = rvsStr;
function reverse(s, left, right) {
    if (left >= right)
        return s;
    var leftChar = s.charAt(left);
    var rightChar = s.charAt(right);
    s = s.substring(0, left) + rightChar + s.substring(left + 1, right) + leftChar + s.substring(right + 1, s.length - 1);
    return reverse(s, left + 1, right - 1);
}
function sortArray(a) {
    return a.sort(function (a, b) { return a - b; });
}
exports.sortArray = sortArray;
function factorial2(a) {
    if (a == 1)
        return 1;
    return factorial2(a - 1) * a;
}
exports.factorial2 = factorial2;
//# sourceMappingURL=stripePrep.js.map