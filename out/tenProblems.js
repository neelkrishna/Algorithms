"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAllParentheses = exports.validParenthesis = exports.areTreesSymmetric = exports.kthLargestElement = exports.firstAndLastPosition = exports.isAnagram = void 0;
function isAnagram(s1, s2) {
    if (s1.length != s2.length)
        return false;
    var map = new Map();
    for (var i = 0; i < s1.length; i++) {
        if (map.has(s1.charAt(i))) {
            map.set(s1.charAt(i), map.get(s1.charAt(i)) + 1);
        }
        else {
            map.set(s1.charAt(i), 1);
        }
    }
    for (var i = 0; i < s2.length; i++) {
        if (!map.has(s2.charAt(i)))
            return false;
        if (map.get(s2.charAt(i)) == 1)
            map.delete(s2.charAt(i));
        else
            map.set(s2.charAt(i), map.get(s2.charAt(i)) - 1);
    }
    return map.size == 0 ? true : false;
}
exports.isAnagram = isAnagram;
function firstAndLastPosition(arr, target) {
    var solution = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            solution.push(i);
            break;
        }
    }
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == target) {
            solution.push(i);
            break;
        }
    }
    if (solution.length == 0) {
        solution.push(-1);
        solution.push(-1);
    }
    return solution;
}
exports.firstAndLastPosition = firstAndLastPosition;
function kthLargestElement(arr, k) {
    arr = arr.sort(function (a, b) { return a - b; });
    return arr[arr.length - k];
}
exports.kthLargestElement = kthLargestElement;
function areTreesSymmetric(root1, root2) {
    if (root1 != root2)
        return false;
    if (root1 == null && root2 == null)
        return true;
    var x = areTreesSymmetric(root1.leftChild, root2.rightChild);
    var y = areTreesSymmetric(root1.rightChild, root2.leftChild);
    return x && y;
}
exports.areTreesSymmetric = areTreesSymmetric;
function validParenthesis(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        switch (s.charAt(i)) {
            case ')': {
                if (stack.pop() != '(')
                    return false;
                break;
            }
            case ']': {
                if (stack.pop() != '[')
                    return false;
                break;
            }
            case '}': {
                if (stack.pop() != '{')
                    return false;
                break;
            }
            default: {
                stack.push(s.charAt(i));
                break;
            }
        }
    }
    return stack.length == 0 ? true : false;
}
exports.validParenthesis = validParenthesis;
function generateAllParentheses(n) {
    return;
}
exports.generateAllParentheses = generateAllParentheses;
//# sourceMappingURL=tenProblems.js.map