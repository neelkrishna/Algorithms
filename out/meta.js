"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStrings = exports.postOrderTraversal = exports.preOrderTraversal = exports.inOrderTraversal = void 0;
function inOrderTraversal(node) {
    if (node) {
        inOrderTraversal(node.leftChild);
        console.log(node.val);
        inOrderTraversal(node.rightChild);
    }
}
exports.inOrderTraversal = inOrderTraversal;
function preOrderTraversal(node) {
    if (node) {
        console.log(node.val);
        preOrderTraversal(node.leftChild);
        preOrderTraversal(node.rightChild);
    }
}
exports.preOrderTraversal = preOrderTraversal;
function postOrderTraversal(node) {
    if (node) {
        postOrderTraversal(node.leftChild);
        postOrderTraversal(node.rightChild);
        console.log(node.val);
    }
}
exports.postOrderTraversal = postOrderTraversal;
function addStrings(num1, num2) {
    var result = [], carry = 0, len1 = num1.length - 1, len2 = num2.length - 1;
    while (len1 >= 0 || len2 >= 0) {
        var value = ((len1 >= 0 ? +num1.charAt(len1) : 0) + (len2 >= 0 ? +num2.charAt(len2) : 0) + carry) % 10;
        carry = Math.floor(((len1 >= 0 ? +num1.charAt(len1) : 0) + (len2 >= 0 ? +num2.charAt(len2) : 0) + carry) / 10);
        result.unshift(value);
        len1--;
        len2--;
    }
    if (carry > 0)
        result.unshift(carry);
    return result.join("");
}
exports.addStrings = addStrings;
//# sourceMappingURL=meta.js.map