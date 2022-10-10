export function reverse(x: number): number {
    let neg: boolean = x < 0 ? true : false;
    return neg ? +reverseString(Math.abs(x) + '', 0, (Math.abs(x) + '').length - 1) * -1 : +reverseString(Math.abs(x) + '', 0, (Math.abs(x) + '').length - 1);
};

function reverseString(s: string, lo: number, hi: number): string {
    if(hi <= lo) return s;
    s = s.substring(0, lo) + s.charAt(hi) + s.substring(lo+1, hi) + s.charAt(lo) + s.substring(hi+1, s.length);
    return reverseString(s, ++lo, --hi);
}