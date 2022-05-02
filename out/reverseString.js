"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = void 0;
function reverseString(s) {
    reverse(s, 0, s.length - 1);
    for (var i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
}
exports.reverseString = reverseString;
;
function reverse(s, left, right) {
    if (left < right) {
        var temp = s[left];
        s[left++] = s[right];
        s[right--] = temp;
        reverse(s, left, right);
    }
}
//# sourceMappingURL=reverseString.js.map