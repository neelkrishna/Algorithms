"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bfPrint = exports.dfPrint = void 0;
function dfPrint(graph, source) {
    var stack = [source];
    while (stack.length > 0) {
        var currentNode = stack.pop();
        console.log(currentNode);
        for (var i = 0; i < graph.get(currentNode).length; i++) {
            stack.push(graph.get(currentNode)[i]);
        }
    }
}
exports.dfPrint = dfPrint;
function bfPrint(graph, source) {
    var queue = [source];
    while (queue.length > 0) {
        var currentNode = queue.shift();
        console.log(currentNode);
        for (var i = 0; i < graph.get(currentNode).length; i++) {
            queue.push(graph.get(currentNode)[i]);
        }
    }
}
exports.bfPrint = bfPrint;
//# sourceMappingURL=graphs.js.map