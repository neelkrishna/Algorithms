"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solveHanoi = void 0;
function solveHanoi(count, from, to, other, move) {
    if (count > 0) {
        solveHanoi(count - 1, from, other, to, move);
        move(from, to);
        solveHanoi(count - 1, other, to, from, move);
    }
}
exports.solveHanoi = solveHanoi;
// Example: six discs
var moveCount = 0;
solveHanoi(6, "Left", "Right", "Middle", function (from, to) {
    ++moveCount;
    console.log(moveCount + ": Move from " + from + " to " + to + ".");
});
//# sourceMappingURL=solveHanoi.js.map