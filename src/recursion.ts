import { BinaryTreeNode, TreeNode, ListNode } from "./classes";

export function factorial(n: number): number {
    if(n == 1) {
        return 1;
    } else {
        let x = n*factorial(n-1);
        return x;
    }
}

export function palindrome(s: string): boolean {
    return isPalindrome(s, 0, s.length -1);
}

function isPalindrome(s, left, right): boolean {
    if(left >= right) return true;
    if(s.charAt(right) != s.charAt(left)) return false;
    return isPalindrome(s, ++left, --right);
}

export function getLinkedListLength(head: ListNode): number {
    if(!head.next) return 1;
    return getLinkedListLength(head.next) + 1;
}


export function numberToBinary(n: number, s: string): string {
    return n == 0 ? s : numberToBinary(Math.floor(n/2), n % 2 + s);
}

export function sumOfIntegers(n: number): number {
    return n == 0 ? 0 : n + sumOfIntegers(n-1);
}

export function binarySearch(nums: number[], leftIndex: number, rightIndex: number, target: number): number {
    let middleIndex: number = Math.floor((rightIndex+leftIndex)/2);
    if(nums[middleIndex] == target) return middleIndex;
    return target < nums[middleIndex] ? binarySearch(nums, leftIndex, middleIndex-1, target) : binarySearch(nums, middleIndex+1, rightIndex, target);
}

export function fibonacci(n: number): number {
    return n == 0 || n == 1 ? n : fibonacci(n-1) + fibonacci(n-2);
}

export function fibOptimized(n: number, map: Map<number, number>): number {
    if(n == 0 || n == 1) {
        return n;
    }
    if(map.has(n)) return map.get(n);
    return fibOptimized(n-1, map) + fibOptimized(n-2, map);
}

export function mergeSort(nums: number[], low: number, high: number): number[] {
    if(low < high) {
        let mid: number = Math.floor((high+low)/2);
        mergeSort(nums, low, mid);
        mergeSort(nums, mid+1, high);
        return merge(nums, low, mid, high);
    }
}

function merge(nums: number[], low: number, mid: number, high: number): number[] {
    let temp: number[] = [];
    let i = low, j = mid+1;
    while(i <= mid && j <= high) {
        if(nums[i] < nums[j]) {
            temp.push(nums[i]);
            i++;
        }
        else {
            temp.push(nums[j]);
            j++;
        }
    }
    while(i <= mid) {
        temp.push(nums[i]);
        i++;
    }
    while(j <= high) {
        temp.push(nums[j]);
        j++;
    }

    for(let x = low; x <= high; x++) {
        nums[x] = temp[x - low];
    }
    return nums;
}

export function mergeSortedLinkedLists(a: ListNode, b: ListNode): ListNode {
    if(!a) return b;
    if(!b) return a;
    if(a.val < b.val) {
        a.next = mergeSortedLinkedLists(a.next, b);
        return a;
    } else {
        b.next = mergeSortedLinkedLists(a, b.next);
        return b;
    }
}

export function insertNodeBinaryTree(head: BinaryTreeNode, data: number): BinaryTreeNode {
    let p: BinaryTreeNode = head;
    while(true) {
        if(data < head.val) {
            if(head.leftChild) {
                head = head.leftChild;
            } else {
                head.leftChild = new BinaryTreeNode(data, null, null);
                break;
            }
        } else {
            if(head.rightChild) {
                head = head.rightChild;
            } else {
                head.rightChild = new BinaryTreeNode(data, null, null);
                break;
            }
        }
    }
    return p;
}

export function insertNodeBinaryTreeRecursive(head: BinaryTreeNode, data: number): BinaryTreeNode {
    if(!head) {
        head = new BinaryTreeNode(data, null, null);
    }
    if(head.val < data) {
        head.rightChild = insertNodeBinaryTreeRecursive(head.rightChild, data);
    } else {
        head.leftChild = insertNodeBinaryTreeRecursive(head.leftChild, data);
    }
    return head;
}

export function printAllLeafNodes(head: BinaryTreeNode): BinaryTreeNode {
    if(head == null) return head;
    if(head.leftChild == null && head.rightChild == null) console.log(head.val);
    
}

export function dfs(head: TreeNode, val: number, visited: Set<TreeNode>): boolean {
    if(head == null) return false;
    if(head.val = val) return true;
    for(let i = 0; i < head.children.length; i++) {
        if(visited.has(head)) continue;
        visited.add(head);
        let isFound: boolean = dfs(head.children[i], val, visited);
        if(isFound) return true;
    }
    return false;
}