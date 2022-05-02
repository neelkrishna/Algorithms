"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertNodeBinaryTree2 = void 0;
var classes_1 = require("./classes");
function insertNodeBinaryTree2(head, val) {
    if (head == null)
        head = new classes_1.BinaryTreeNode(val, null, null);
    if (val < head.val)
        head.leftChild = insertNodeBinaryTree2(head.leftChild, val);
    else
        head.rightChild = insertNodeBinaryTree2(head.rightChild, val);
    return head;
}
exports.insertNodeBinaryTree2 = insertNodeBinaryTree2;
//# sourceMappingURL=temp.js.map