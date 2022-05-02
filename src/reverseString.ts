export function reverseString(s: string[]): void {
    reverse(s, 0, s.length-1);
    for(let i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
};

function reverse(s: string[], left: number, right: number) {
    if(left < right) {
        let temp: string = s[left];
        s[left++] = s[right];
        s[right--] = temp;
        reverse(s, left, right);
    }
}
