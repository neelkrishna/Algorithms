export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export class BinaryTreeNode {
    val: number;
    leftChild: BinaryTreeNode;
    rightChild: BinaryTreeNode;
    leftVisited: boolean = false;
    rightVisited: boolean = false;

    constructor(val?: number, leftChild?: BinaryTreeNode, rightChild?: BinaryTreeNode) {
        this.val = val; 
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}

export class TreeNode {
    val: number;
    children: TreeNode[]
    visited: boolean = false;

    constructor(val?: number, children?: TreeNode[]) {
        this.val = val; 
        this.children = children;
    }
}

export class KnapsackObj {
    id: number;
    weight: number;
    profit: number;
}

export class DFSGraph {
    public adj: number[][];
    public size: number;
}

export class BFSGraph {
    public adj: Array<number>[];
    public size: number;
}