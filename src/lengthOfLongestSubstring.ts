export function lengthOfLongestSubstring(s: string): number {
    let set: Set<string> = new Set<string>();
    let traversed: number = 0;
    let curr: number = 0;
    for(let i = 0; i < s.length; i++) {
        if(set.has(s.charAt(i))) {
            curr = i - traversed > curr ? i - traversed : curr;
            traversed = i;
            set.clear();
        } else {
            set.add(s.charAt(i));   
        }
    }
    return curr;
};