"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var parenthesis_1 = require("./parenthesis");
var App = /** @class */ (function () {
    function App() {
    }
    App.start = function () {
        var e_1, _a;
        // let x: number[][] = combinationSum([2,3,6,7], 7);
        // for(let i = 0; i < x.length; i++) {
        //     for(let j = 0; j < x[i].length; j++) {
        //         console.log(x[i][j]);
        //     }
        // }
        var x = (0, parenthesis_1.generateParenthesis)(3);
        try {
            for (var x_1 = __values(x), x_1_1 = x_1.next(); !x_1_1.done; x_1_1 = x_1.next()) {
                var i = x_1_1.value;
                console.log(i);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (x_1_1 && !x_1_1.done && (_a = x_1.return)) _a.call(x_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return App;
}());
App.start();
//# sourceMappingURL=app.js.map