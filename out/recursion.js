"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dfs = exports.printAllLeafNodes = exports.insertNodeBinaryTreeRecursive = exports.insertNodeBinaryTree = exports.mergeSortedLinkedLists = exports.mergeSort = exports.fibOptimized = exports.fibonacci = exports.binarySearch = exports.sumOfIntegers = exports.numberToBinary = exports.getLinkedListLength = exports.palindrome = exports.factorial = void 0;
var classes_1 = require("./classes");
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    else {
        var x = n * factorial(n - 1);
        return x;
    }
}
exports.factorial = factorial;
function palindrome(s) {
    return isPalindrome(s, 0, s.length - 1);
}
exports.palindrome = palindrome;
function isPalindrome(s, left, right) {
    if (left >= right)
        return true;
    if (s.charAt(right) != s.charAt(left))
        return false;
    return isPalindrome(s, ++left, --right);
}
function getLinkedListLength(head) {
    if (!head.next)
        return 1;
    return getLinkedListLength(head.next) + 1;
}
exports.getLinkedListLength = getLinkedListLength;
function numberToBinary(n, s) {
    return n == 0 ? s : numberToBinary(Math.floor(n / 2), n % 2 + s);
}
exports.numberToBinary = numberToBinary;
function sumOfIntegers(n) {
    return n == 0 ? 0 : n + sumOfIntegers(n - 1);
}
exports.sumOfIntegers = sumOfIntegers;
function binarySearch(nums, leftIndex, rightIndex, target) {
    var middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    if (nums[middleIndex] == target)
        return middleIndex;
    return target < nums[middleIndex] ? binarySearch(nums, leftIndex, middleIndex - 1, target) : binarySearch(nums, middleIndex + 1, rightIndex, target);
}
exports.binarySearch = binarySearch;
function fibonacci(n) {
    return n == 0 || n == 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
exports.fibonacci = fibonacci;
function fibOptimized(n, map) {
    if (n == 0 || n == 1) {
        return n;
    }
    if (map.has(n))
        return map.get(n);
    return fibOptimized(n - 1, map) + fibOptimized(n - 2, map);
}
exports.fibOptimized = fibOptimized;
function mergeSort(nums, low, high) {
    if (low < high) {
        var mid = Math.floor((high + low) / 2);
        mergeSort(nums, low, mid);
        mergeSort(nums, mid + 1, high);
        return merge(nums, low, mid, high);
    }
}
exports.mergeSort = mergeSort;
function merge(nums, low, mid, high) {
    var temp = [];
    var i = low, j = mid + 1;
    while (i <= mid && j <= high) {
        if (nums[i] < nums[j]) {
            temp.push(nums[i]);
            i++;
        }
        else {
            temp.push(nums[j]);
            j++;
        }
    }
    while (i <= mid) {
        temp.push(nums[i]);
        i++;
    }
    while (j <= high) {
        temp.push(nums[j]);
        j++;
    }
    for (var x = low; x <= high; x++) {
        nums[x] = temp[x - low];
    }
    return nums;
}
function mergeSortedLinkedLists(a, b) {
    if (!a)
        return b;
    if (!b)
        return a;
    if (a.val < b.val) {
        a.next = mergeSortedLinkedLists(a.next, b);
        return a;
    }
    else {
        b.next = mergeSortedLinkedLists(a, b.next);
        return b;
    }
}
exports.mergeSortedLinkedLists = mergeSortedLinkedLists;
function insertNodeBinaryTree(head, data) {
    var p = head;
    while (true) {
        if (data < head.val) {
            if (head.leftChild) {
                head = head.leftChild;
            }
            else {
                head.leftChild = new classes_1.BinaryTreeNode(data, null, null);
                break;
            }
        }
        else {
            if (head.rightChild) {
                head = head.rightChild;
            }
            else {
                head.rightChild = new classes_1.BinaryTreeNode(data, null, null);
                break;
            }
        }
    }
    return p;
}
exports.insertNodeBinaryTree = insertNodeBinaryTree;
function insertNodeBinaryTreeRecursive(head, data) {
    if (!head) {
        head = new classes_1.BinaryTreeNode(data, null, null);
    }
    if (head.val < data) {
        head.rightChild = insertNodeBinaryTreeRecursive(head.rightChild, data);
    }
    else {
        head.leftChild = insertNodeBinaryTreeRecursive(head.leftChild, data);
    }
    return head;
}
exports.insertNodeBinaryTreeRecursive = insertNodeBinaryTreeRecursive;
function printAllLeafNodes(head) {
    if (head == null)
        return head;
    if (head.leftChild == null && head.rightChild == null)
        console.log(head.val);
}
exports.printAllLeafNodes = printAllLeafNodes;
function dfs(head, val, visited) {
    if (head == null)
        return false;
    if (head.val = val)
        return true;
    for (var i = 0; i < head.children.length; i++) {
        if (visited.has(head))
            continue;
        visited.add(head);
        var isFound = dfs(head.children[i], val, visited);
        if (isFound)
            return true;
    }
    return false;
}
exports.dfs = dfs;
//# sourceMappingURL=recursion.js.map