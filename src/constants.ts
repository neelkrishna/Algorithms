import { ListNode, TreeNode } from "./classes";

export const graph: Map<string, string[]> = new Map<string, string[]>();
graph.set("a", ["b", "c"]);
graph.set("b", ["d"]);
graph.set("c", ["e"]);
graph.set("d", ["f"]);
graph.set("e", []);
graph.set("f", []);

export const morseMap: Map<string, string> = new Map<string, string>([
    [".", "E"],
    ["..", "I"],
    ["...", "S"]
]);

let t3: TreeNode = {
    val: 3,
    children: []
};
let t4: TreeNode = {
    val: 4,
    children: []
};
let t5: TreeNode = {
    val: 5,
    children: []
};
let t2: TreeNode = {
    val: 2,
    children: [t4, t5]
};
let t1: TreeNode = {
    val: 1,
    children: [t2, t3]
};

export const treeNodeHead: TreeNode = t1;

let l1: ListNode = {
    val: 3,
    next: null
}
let l2: ListNode = {
    val: 4,
    next: l1
}
let l3: ListNode = {
    val: 2,
    next: l2
}

let l4: ListNode = {
    val: 4,
    next: null
}
let l5: ListNode = {
    val: 6,
    next: l4
}
let l6: ListNode = {
    val: 5,
    next: l5
}
let l7: ListNode = {
    val: 5,
    next: l6
}

export const listNode1: ListNode = l3;
export const listNode2: ListNode = l7;