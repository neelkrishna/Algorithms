import { BinaryTreeNode, DFSGraph, TreeNode } from './classes';
import { BFSGraph } from './classes';

export function dfs(G: DFSGraph, startVert: number) {
    let visited: boolean[] = Array<boolean>();
    // Pre-populate array:
    for(let i = 0; i < G.size; i++) {
        visited.push(false);
    }

    let s: number[] = new Array();

    visited[startVert] = true;

    s.push(startVert);

    while(s.length > 0) {
        const v = s.pop();
        for(let adjV of G.adj[v])
        {
            if(!visited[adjV])
            {
                visited[adjV] = true;
                s.push(adjV);
            }
        }
    }
}

export function dfsRecursive(G: DFSGraph, startVert: number) {
    let visited: boolean[] = Array<boolean>();
    // Pre-populate array:
    for(let i = 0; i < G.size; i++)
    {
        visited.push(false);
    }
    this.dfsAux(G, startVert, visited);
}

export function dfsAux(G: DFSGraph, v: number, visited: boolean[]) {
    visited[v] = true;
    for(let adjV of G.adj[v])
    {
        if(!visited[adjV])
        {
            // this.foo(); // Something can happen before the visit.
            this.dfsAux(G, adjV, visited);
            // this.bar(); // Something can happen after the visit.
        }
    }
}

export function bfs(G: BFSGraph, startVert: number) {
    let visited: boolean[] = Array<boolean>();
    // Pre-populate array:
    for(let i = 0; i < G.size; i++) {
        visited.push(false);
    }

    // Use an array as our queue representation:
    let q: number[] = new Array<number>();
    visited[startVert] = true;
    q.push(startVert);

    while(q.length > 0) {
        const v = q.shift();
        for(let adjV of G.adj[v]) {
            if(!visited[adjV]) {
                visited[adjV] = true;
                q.push(adjV);
            }
        }
    }
}

export function neelBFS(node: TreeNode): void {
    let visited: Set<TreeNode> = new Set<TreeNode>();
    let queue: TreeNode[] = [node];

    while(queue.length > 0) {
        visited.add(node);
        console.log(node.val);
        for(let child of node.children) {
            if(!visited.has(child)) {
                queue.push(child);
            }
        }
        node = queue.shift();
    }
}

export function neelDFS(node: TreeNode): void {
    let visited: Set<TreeNode> = new Set<TreeNode>();
    let stack: TreeNode[] = [node];

    while(stack.length > 0) {
        visited.add(node);
        console.log(node.val);
        for(let child of node.children) {
            if(!visited.has(child)) {
                stack.push(child);
            }
        }
        node = stack.pop();
    }
}

export function preOrderTraversal(node: BinaryTreeNode): void {
    if(node == null) return;
    console.log(node.val);
    preOrderTraversal(node.leftChild);
    preOrderTraversal(node.rightChild);
}

export function inOrderTraversal(node: BinaryTreeNode): void {
    if(node == null) return;
    preOrderTraversal(node.leftChild);
    console.log(node.val);
    preOrderTraversal(node.rightChild);
}

export function postOrderTraversal(node: BinaryTreeNode): void {
    if(node == null) return;
    preOrderTraversal(node.leftChild);
    preOrderTraversal(node.rightChild);
    console.log(node.val);
}

export function binarySearch(nums: number[], target: number, low: number, high: number): boolean {
    if(low > high) return false;
    nums.sort((a, b) => a - b);
    let mid: number = Math.floor((high + low)/2);
    if(target == nums[mid]) return true;
    if(target < mid) return binarySearch(nums, target, low, mid - 1);
    if(target > mid) return binarySearch(nums, target, mid + 1, high);
}