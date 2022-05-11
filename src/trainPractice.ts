import { BinaryTreeNode } from "./classes";

export function addStrings(s1: string, s2: string): string {
    let results: number[] = [];
    let p1: number = s1.length-1, p2: number = s2.length-1, carry: number = 0;
    while(Math.min(p1, p2) >= 0) {
        results.unshift((+s1.charAt(p1) + +s2.charAt(p2) + carry) % 10);
        carry = Math.floor((+s1.charAt(p1) + +s2.charAt(p2)) / 10);
        p1--;
        p2--;
    }
    if(p1 >= 0) {
        while(p1 >= 0) {
            results.unshift((+s1.charAt(p1) + carry) % 10);
            carry = Math.floor((+s1.charAt(p1)) / 10);
            p1--;
        }
    } else if(p2 >= 0) {
        while(p2 >= 0) {
            results.unshift((+s2.charAt(p2) + carry) % 10);
            carry = Math.floor((+s2.charAt(p2)) / 10);
            p2--;
        }
    }
    return results.join("");
}

export function preOrderTraversal(node: BinaryTreeNode): void {
    if(!node) return;
    console.log(node.val);
    preOrderTraversal(node.leftChild);
    preOrderTraversal(node.rightChild);
}

export function combinationSum(candidates: number[], target: number): number[][] {
    let results: number[][] = [];
    if(!candidates.length) return results;

    function backtrack(mTarget: number) {

    }
}

export function levelOrderTraversalBinaryTree(node: BinaryTreeNode): void {
    let q: BinaryTreeNode[] = [node];
    while(q) {
        let cur: BinaryTreeNode = q.pop()
        console.log(cur.val);
        q.unshift(cur.leftChild);
        q.unshift(cur.rightChild);
    }
}