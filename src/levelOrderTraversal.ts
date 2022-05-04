import { BinaryTreeNode } from "./classes";

export function levelOrder(root: BinaryTreeNode | null): number[][] {
    let result: number[][] = [];
    if(!root) return result;
    let queue: BinaryTreeNode[] = [root];
    
    while(queue.length > 0) {
        let curArray: number[] = [];
        let levelSize: number = queue.length;
        while(levelSize--) {
            let curNode: BinaryTreeNode = queue.shift();
            curArray.push(curNode.val);
            
            if(curNode.leftChild) queue.push(curNode.leftChild);
            if(curNode.rightChild) queue.push(curNode.rightChild);
        }
        result.push(curArray);
    }
    return result;
}

export function levelOrderRecursive(root: BinaryTreeNode | null): number[][] {
    let result: number[][] = [];
    if(!root) return result;
    
    function traverse(node: BinaryTreeNode, level: number): void {
        if(level == result.length) result.push([]);
        result[level].push(node.val);

        if(node.leftChild) traverse(node.leftChild, level + 1);
        if(node.rightChild) traverse(node.rightChild, level + 1);
    }
    
    traverse(root, 0);
    return result;
}