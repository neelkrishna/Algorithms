"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMountainNumber = exports.findValueInTree = exports.mergeSortedLinkedLists = exports.reverseString = void 0;
function reverseString(s) {
    return reverse(s, 0, s.length - 1);
}
exports.reverseString = reverseString;
function reverse(s, left, right) {
    while (left < right) {
        s = s.substring(0, left) + s.charAt(right) + s.substring(left + 1, right) + s.charAt(left) + s.substring(right + 1, s.length);
        reverse(s, ++left, --right);
    }
    return s;
}
function mergeSortedLinkedLists(a, b) {
    if (a == null)
        return b;
    if (b == null)
        return a;
    while (a != null && b != null) {
        if (a.val < b.val) {
            a.next = mergeSortedLinkedLists(a.next, b);
            return a;
        }
        else {
            b.next = mergeSortedLinkedLists(a, b.next);
            return b;
        }
    }
}
exports.mergeSortedLinkedLists = mergeSortedLinkedLists;
function findValueInTree(t, n) {
    var set = new Set();
    return dfs(t, n, set);
}
exports.findValueInTree = findValueInTree;
function dfs(t, n, visited) {
    if (t == null)
        return null;
    if (t.val == n)
        return true;
    for (var i = 0; i < t.children.length; i++) {
        if (!t.children[i].visited) {
            visited.add(t.children[i]);
            return dfs(t.children[i], n, visited);
        }
    }
}
function bfs(t, n, visited) {
}
function isMountainNumber(n) {
    var stringNum = n + '';
    var nums = [];
    for (var i = 0; i < stringNum.length; i++) {
        nums.push(+stringNum.charAt(i));
    }
    var count = 0;
    while (count < nums.length - 1 && nums[count] < nums[count + 1]) {
        count++;
    }
    if (count == 0 || count == nums.length - 1) {
        return false;
    }
    while (count < nums.length - 1 && nums[count] > nums[count + 1]) {
        count++;
    }
    if (count == nums.length - 1)
        return true;
    else
        return false;
}
exports.isMountainNumber = isMountainNumber;
//# sourceMappingURL=flight-practice.js.map