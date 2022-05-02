"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnapsackObj = exports.TreeNode = exports.BinaryTreeNode = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode(val, leftChild, rightChild) {
        this.leftVisited = false;
        this.rightVisited = false;
        this.val = val;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
    return BinaryTreeNode;
}());
exports.BinaryTreeNode = BinaryTreeNode;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, children) {
        this.visited = false;
        this.val = val;
        this.children = children;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var KnapsackObj = /** @class */ (function () {
    function KnapsackObj() {
    }
    return KnapsackObj;
}());
exports.KnapsackObj = KnapsackObj;
//# sourceMappingURL=classes.js.map