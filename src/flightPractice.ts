import { ListNode } from "./classes";
import { TreeNode } from "./classes";

export function reverseString(s: string): string {
    return reverse(s, 0, s.length-1);
}
function reverse(s: string, left: number, right: number): string {
    while(left < right) {
        s = s.substring(0, left) + s.charAt(right) + s.substring(left + 1, right) + s.charAt(left) + s.substring(right + 1, s.length);
        reverse(s, ++left, --right);
    }
    return s;
}

export function mergeSortedLinkedLists(a: ListNode, b: ListNode): ListNode {
    if(a == null) return b;
    if(b == null) return a;
    while(a != null && b != null) {
        if(a.val < b.val) {
            a.next = mergeSortedLinkedLists(a.next, b);
            return a;
        } else {
            b.next = mergeSortedLinkedLists(a, b.next);
            return b;
        }
    }
}

export function findValueInTree(t: TreeNode, n: number): boolean {
    let set: Set<TreeNode> = new Set<TreeNode>();
    return dfs(t, n, set);
}

function dfs(t: TreeNode, n: number, visited: Set<TreeNode>): boolean {
    if(t == null) return null;
    if(t.val == n) return true;
    for(let i = 0; i < t.children.length; i ++) {
        if(!t.children[i].visited) {
            visited.add(t.children[i]);
            return dfs(t.children[i], n, visited);
        }
    }
}

function bfs(t: TreeNode, n: number, visited: Set<TreeNode>) {
    
}

export function isMountainNumber(n: number): boolean {
    let stringNum: string = n + '';
    let nums: number[] = [];
    for(let i = 0; i < stringNum.length; i++) {
        nums.push(+stringNum.charAt(i));
    }
    let count: number = 0;
    while(count < nums.length - 1 && nums[count] < nums[count + 1]) {
        count ++;
    }
    if(count == 0 || count == nums.length - 1) {
        return false;
    }

    while(count < nums.length - 1 && nums[count] > nums[count + 1]) {
        count ++;
    }
    if(count == nums.length-1) return true;
    else return false;
    
}