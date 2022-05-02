"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knapsack = void 0;
function knapsack(objects, capacity) {
    var objectEfficiency = [];
    for (var i = 0; i < objects.length; i++) {
        objectEfficiency.push(objects[i].profit / objects[i].weight);
    }
    //sorted in descending order
    objectEfficiency.sort(function (a, b) { return b - a; });
    while (capacity > 0) {
        if (objectEfficiency[0] < capacity) {
        }
    }
    return;
}
exports.knapsack = knapsack;
//# sourceMappingURL=knapsack.js.map