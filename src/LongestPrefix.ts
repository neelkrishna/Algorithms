export function longestCommonPrefix(strs: string[]): string {
    let currentPrefix: string = "";
    if(strs.length > 0) {
        currentPrefix = strs[0];
    } else {
        return currentPrefix;
    }
    for(let i = 0; i < strs.length; i++) {
        let tempPrefix: string = "";
        for(let j = 0; j < strs[i].length; j++) {
            if(currentPrefix.charAt(j) == strs[i].charAt(j)) {
                tempPrefix = strs[i].substring(0, j+1);
            } else break;
        }
        currentPrefix = tempPrefix;
    }
    return currentPrefix;
}