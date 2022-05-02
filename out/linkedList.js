"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseLinkedList = exports.isFoundInLL = exports.sumLinkedListRecursive = exports.sumLinkedList = exports.linkedListToArray = exports.printLinkedListRecursive = exports.insert = exports.insertIntoLLWrong = void 0;
var classes_1 = require("./classes");
function insertIntoLLWrong(head, val, position) {
    var temp = head;
    if (position == 0) {
        head = new classes_1.ListNode(val, temp);
    }
    for (var i = 0; i < position - 1; i++) {
        head = head.next;
    }
    var temp2 = head;
    head = new classes_1.ListNode(val, temp);
    return temp;
}
exports.insertIntoLLWrong = insertIntoLLWrong;
function insert(head, val, position) {
    var newNode = new classes_1.ListNode(val, null);
    for (var i = 0; i < position - 1; i++) {
        head = head.next;
    }
    newNode.next = head.next;
    head.next = newNode;
}
exports.insert = insert;
function printLinkedListRecursive(head) {
    if (!head)
        return;
    console.log(head.val);
    printLinkedListRecursive(head.next);
}
exports.printLinkedListRecursive = printLinkedListRecursive;
function linkedListToArray(head, array) {
    if (head == null)
        return array;
    array.push(head.val);
    linkedListToArray(head.next, array);
}
exports.linkedListToArray = linkedListToArray;
function sumLinkedList(head) {
    var sum = 0;
    while (head) {
        sum += head.val;
        head = head.next;
    }
    return sum;
}
exports.sumLinkedList = sumLinkedList;
function sumLinkedListRecursive(head) {
    if (head == null)
        return 0;
    return head.val + sumLinkedListRecursive(head.next);
}
exports.sumLinkedListRecursive = sumLinkedListRecursive;
function isFoundInLL(head, val) {
    if (head == null)
        return false;
    if (head.val == val)
        return true;
    return isFoundInLL(head.next, val);
}
exports.isFoundInLL = isFoundInLL;
function reverseLinkedList(head) {
    while (head) {
        var prev = head;
        var temp = head.next;
    }
    return;
}
exports.reverseLinkedList = reverseLinkedList;
//# sourceMappingURL=linkedList.js.map