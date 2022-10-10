import { BinaryTreeNode, ListNode, TreeNode } from "./classes";

// remove node from linked list, return nothing
export function removeMiddleNode(head: ListNode, node: ListNode): void {
    if(head.val == node.val) {
        let temp: ListNode = head.next;
        head = null;
        head = temp;
    }
    while(head.next) {
        if(head.next.val == node.val) {
            let temp: ListNode = head.next.next;
            head.next = temp;
        }
    }
}

export function dfsPrintTree(head: TreeNode): void {
    let s: TreeNode[] = [head];
    while(s.length) {
        let curr: TreeNode = s.pop();
        let tempS: TreeNode[] = [];
        for(let child of curr.children) {
            tempS.push(child);
        }
        //makes DFS read from left to right
        while(tempS.length) {
            s.push(tempS.pop());
        }
        console.log(curr.val)
    }
}

export function bfsPrintTree(head: TreeNode): void {
    let q: TreeNode[] = [head];
    while(q.length) {
        let curr: TreeNode = q.shift();
        for(let child of curr.children) {
            q.push(child);
        }
        console.log(curr.val);
    }
}

export function preOrderTravPrint(head: BinaryTreeNode): void {
    if(head) {
        console.log(head.val);
        preOrderTravPrint(head.leftChild);
        preOrderTravPrint(head.rightChild);
    }
}

export function addLLs(h1: ListNode, h2: ListNode): ListNode {
    let output: ListNode = new ListNode();
    let head: ListNode = output;
    let carry: number = 0;
    while(h1 && h2) {
        let curSum = h1.val + h2.val + carry;
        curSum > 9 ? carry = 1: carry = 0;
        output.next = new ListNode(curSum % 10);
        h1 = h1.next;
        h2 = h2.next;
        output = output.next;
    }
    while(h1) {
        output.next = new ListNode((h1.val + carry) % 10);
        carry = h1.val + carry > 9 ? 1 : 0;
        h1 = h1.next;
        output = output.next;
    }
    while(h2) {
        output.next = new ListNode((h2.val + carry) % 10);
        carry = h2.val + carry > 9 ? 1 : 0;
        h2 = h2.next;
        output = output.next;
    }
    if(carry > 0) {
        output.next = new ListNode(1);
    }
    return head.next;
}