import { inOrderTraversal, preOrderTraversal, postOrderTraversal, addStrings } from "./meta";
import { BinaryTreeNode } from "./classes";
import { trap } from "./trapWater";
import { combinationSum } from "./combinationSum";
import { twitterThread } from "./twitterThreads";
import { generateParenthesis } from "./parenthesis";
import { levelOrder } from "./levelOrderTraversal";

class App {
    public static start() {
        [3,9,20,null,null,15,7]
        let b1: BinaryTreeNode = new BinaryTreeNode(3)
        let b2: BinaryTreeNode = new BinaryTreeNode(9)
        let b3: BinaryTreeNode = new BinaryTreeNode(20)
        let b4: BinaryTreeNode = new BinaryTreeNode(15)
        let b5: BinaryTreeNode = new BinaryTreeNode(7)
        b1.leftChild = b2;
        b1.rightChild = b3;
        b3.leftChild = b4;
        b3.rightChild = b5;

        let x: number[][] = levelOrder(b1);

        for(let i = 0; i < x.length; i++) {
            console.log(x[i].toString());
        }
    }
}

App.start();