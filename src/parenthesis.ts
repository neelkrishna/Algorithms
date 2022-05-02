export function generateParenthesis(n: number): string[] {
    let result = [];
	   if(n === 0) return result;
    
    function backtrack(open: number, close: number, max: number, cur: string) {
       if(close === max) result.push(cur);
       if(open < max) backtrack(open + 1, close, max, cur + "(");
       if(close < open) backtrack(open, close + 1, max, cur + ")");
    } 
    
    backtrack(0, 0, n, ""); 
    return result;
};