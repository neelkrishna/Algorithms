import { inOrderTraversal, preOrderTraversal, postOrderTraversal, addStrings } from "./meta";
import { BinaryTreeNode } from "./classes";
import { trap } from "./trapWater";
import { combinationSum } from "./combinationSum";
import { twitterThread } from "./twitterThreads";
import { generateParenthesis } from "./parenthesis";

class App {
    public static start() {
        // let x: number[][] = combinationSum([2,3,6,7], 7);
        // for(let i = 0; i < x.length; i++) {
        //     for(let j = 0; j < x[i].length; j++) {
        //         console.log(x[i][j]);
        //     }
        // }
        let x: string[] = generateParenthesis(3);
        for(let i of x) {
            console.log(i);
        }
    }
}

App.start();