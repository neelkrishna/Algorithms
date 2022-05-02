"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateParenthesis = void 0;
function generateParenthesis(n) {
    var result = [];
    if (n === 0)
        return result;
    function backtrack(open, close, max, cur) {
        if (close === max)
            result.push(cur);
        if (open < max)
            backtrack(open + 1, close, max, cur + "(");
        if (close < open)
            backtrack(open, close + 1, max, cur + ")");
    }
    backtrack(0, 0, n, "");
    return result;
}
exports.generateParenthesis = generateParenthesis;
;
//# sourceMappingURL=parenthesis.js.map