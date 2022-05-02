import { BinaryTreeNode } from './classes';
export function insertNodeBinaryTree2(head: BinaryTreeNode, val: number): BinaryTreeNode {
    if(head == null) head = new BinaryTreeNode(val, null, null);
    if(val < head.val) head.leftChild = insertNodeBinaryTree2(head.leftChild, val);
    else head.rightChild = insertNodeBinaryTree2(head.rightChild, val);
    return head;
}
