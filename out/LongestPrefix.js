"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestCommonPrefix = void 0;
function longestCommonPrefix(strs) {
    var currentPrefix = "";
    if (strs.length > 0) {
        currentPrefix = strs[0];
    }
    else {
        return currentPrefix;
    }
    for (var i = 0; i < strs.length; i++) {
        var tempPrefix = "";
        for (var j = 0; j < strs[i].length; j++) {
            if (currentPrefix.charAt(j) == strs[i].charAt(j)) {
                tempPrefix = strs[i].substring(0, j + 1);
            }
            else
                break;
        }
        currentPrefix = tempPrefix;
    }
    return currentPrefix;
}
exports.longestCommonPrefix = longestCommonPrefix;
//# sourceMappingURL=LongestPrefix.js.map