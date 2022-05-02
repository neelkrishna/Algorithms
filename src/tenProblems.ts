import { BinaryTreeNode } from "./classes";

export function isAnagram(s1: string, s2: string): boolean {
    if(s1.length != s2.length) return false;

    let map: Map<string, number> = new Map<string, number>();
    for(let i = 0; i < s1.length; i++) {
        if(map.has(s1.charAt(i))) {
            map.set(s1.charAt(i), map.get(s1.charAt(i)) + 1);
        } else {
            map.set(s1.charAt(i), 1);
        }
    }
    for(let i = 0; i < s2.length; i++) {
        if(!map.has(s2.charAt(i))) return false;
        if(map.get(s2.charAt(i)) == 1) map.delete(s2.charAt(i));
        else map.set(s2.charAt(i), map.get(s2.charAt(i)) - 1);
    }
    return map.size == 0 ? true : false;
}

export function firstAndLastPosition(arr: number[], target: number): number[] {
    let solution: number[] = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == target) {
            solution.push(i);
            break;
        }
    }
    for(let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] == target) {
            solution.push(i);
            break;
        }
    }
    if(solution.length == 0) {
        solution.push(-1);
        solution.push(-1);
    }
    return solution;
}

export function kthLargestElement(arr: number[], k: number): number {
    arr = arr.sort((a, b) => a - b);
    return arr[arr.length - k];
}

export function areTreesSymmetric(root1: BinaryTreeNode, root2: BinaryTreeNode): boolean {
    if(root1 != root2) return false;
    if(root1 == null && root2 == null) return true;
    let x = areTreesSymmetric(root1.leftChild, root2.rightChild);
    let y = areTreesSymmetric(root1.rightChild, root2.leftChild);
    return x && y;
}

export function validParenthesis(s: string): boolean {
    let stack: string[] = []
    for(let i = 0; i < s.length; i++) {
        switch(s.charAt(i)) {
            case ')': {
                if(stack.pop() != '(') return false;
                break;
            }
            case ']': {
                if(stack.pop() != '[') return false;
                break;
            }
            case '}': {
                if(stack.pop() != '{') return false;
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

export function generateAllParentheses(n: number): string {
    
    return;
}