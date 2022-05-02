import { ListNode } from './classes';

export function insertIntoLLWrong(head: ListNode, val: number, position: number): ListNode {
    let temp: ListNode = head;
    if(position == 0) {  
        head = new ListNode(val, temp);
    }
    for(let i = 0; i < position-1; i++) {
        head = head.next;
    }
    let temp2: ListNode = head;
    head = new ListNode(val, temp);
    return temp;
}

export function insert(head: ListNode, val: number, position: number) {
    let newNode: ListNode = new ListNode(val, null);
    for(let i = 0; i < position-1; i++) {
        head = head.next;
    }
    newNode.next = head.next;
    head.next = newNode;
}

export function printLinkedListRecursive(head: ListNode): void {
    if(!head) return;
    console.log(head.val);
    printLinkedListRecursive(head.next);
}

export function linkedListToArray(head: ListNode, array: number[]): number[] {
    if(head == null) return array;
    array.push(head.val);
    linkedListToArray(head.next, array);
}

export function sumLinkedList(head:ListNode): number {
    let sum: number = 0;
    while(head) {
        sum += head.val;
        head = head.next;
    }
    return sum;
}

export function sumLinkedListRecursive(head: ListNode): number {
    if(head == null) return 0;
    return head.val + sumLinkedListRecursive(head.next);
}

export function isFoundInLL(head: ListNode, val: number): boolean {
    if(head == null) return false;
    if(head.val == val) return true;
    return isFoundInLL(head.next, val);
}

export function reverseLinkedList(head: ListNode): ListNode {
    while(head) {
        let prev: ListNode = head;
        let temp = head.next
        
    }
    return;
}