export function rvsStr(s: string): string {
    return reverse(s, 0, s.length-1);
}

function reverse(s: string, left: number, right: number): string {
    if(left >= right) return s;
    
    let leftChar: string = s.charAt(left);
    let rightChar: string = s.charAt(right);
    s = s.substring(0, left) + rightChar + s.substring(left + 1, right) + leftChar + s.substring(right+1, s.length - 1);
    return reverse(s, left+1, right-1);
}

export function sortArray(a: number[]): number[] {
    return a.sort((a, b) => a - b);
}

export function factorial2(a: number): number {
    if(a == 1) return 1;
    return factorial2(a-1) * a;
}