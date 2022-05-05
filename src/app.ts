import { inOrderTraversal, preOrderTraversal, postOrderTraversal, addStrings } from "./meta";
import { BinaryTreeNode } from "./classes";
import { trap } from "./trapWater";
import { combinationSum } from "./combinationSum";
import { twitterThread } from "./twitterThreads";
import { generateParenthesis } from "./parenthesis";
import { levelOrder } from "./levelOrderTraversal";
import { binarySearch } from "./search";
import { countToTen, secondGradeDivision } from "./swathi";

class App {
    public static start() {
        console.log(secondGradeDivision(9, 2));
    }
}

App.start();