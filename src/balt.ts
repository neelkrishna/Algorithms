export function reverseStringInAugust(s: string): string {
    let lo: number = 0;
    let hi: number = s.length - 1;
    while(lo < hi) {
        s = s.substring(0, lo) + s.charAt(hi) + s.substring(lo + 1, hi) + s.charAt(lo) + s.substring(hi + 1, s.length - 1);
        lo++;
        hi--;
    }
    return s;
}

export function reverseStringInAugustRecursively(s: string, lo: number, hi: number): string {
    if(lo < hi) {
        s = s.substring(0, lo) + s.charAt(hi) + s.substring(lo + 1, hi) + s.charAt(lo) + s.substring(hi + 1, s.length - 1);
        return reverseStringInAugustRecursively(s, ++lo, --hi);
    } else {
        return s;
    }
}

export function isPal(s: string): boolean {
    for(let i = 0; i < (s.length/2); i++) {
        if(s.charAt(i) !== s.charAt(s.length - i - 1)) return false;
    }
    return true;
}

export function twoSum(nums: number[], target: number): number[] {
    let map: Map<number, number> = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(i), i];
        } 
        map.set(nums[i], i);
    }
};