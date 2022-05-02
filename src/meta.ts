import { BinaryTreeNode } from './classes';

export function inOrderTraversal(node: BinaryTreeNode) {
    if(node) {
        inOrderTraversal(node.leftChild);
        console.log(node.val);
        inOrderTraversal(node.rightChild);
    }
}

export function preOrderTraversal(node: BinaryTreeNode) {
    if(node) {
        console.log(node.val);
        preOrderTraversal(node.leftChild);
        preOrderTraversal(node.rightChild);
    }
}

export function postOrderTraversal(node: BinaryTreeNode) {
    if(node) {
        postOrderTraversal(node.leftChild);
        postOrderTraversal(node.rightChild);
        console.log(node.val);
    }
}

export function addStrings(num1: string, num2: string): string {
    let result: number[] = [], carry: number = 0, len1: number = num1.length - 1, len2: number = num2.length - 1;

    while(len1 >= 0 || len2 >= 0) {
        let value: number = ((len1 >= 0 ? +num1.charAt(len1) : 0) + (len2 >= 0 ? +num2.charAt(len2) : 0) + carry) % 10;
        carry = Math.floor(((len1 >= 0 ? +num1.charAt(len1) : 0) + (len2 >= 0 ? +num2.charAt(len2) : 0) + carry) / 10);
        result.unshift(value);
        len1--;
        len2--;
    }
    if(carry > 0) result.unshift(carry);
    return result.join("");
}