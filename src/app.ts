import { jump } from "./toJFK";

class App {
    public static start() {
        console.log(jump([2, 3, 1, 1, 4]));
    }
}

App.start();