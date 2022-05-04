export function combinationSumConfusing(candidates: number[], target: number): number[][] {
    let results: number[][] = [];
    
    function backtrack(movingTarget: number, solution: number[], index: number) {
        if(movingTarget === 0) results.push(solution);
        if(movingTarget < 0) return;

        for(let i = index; i < candidates.length; i++) {
            let newSolution: number[] = [...solution]; 
            newSolution.push(candidates[i]);
            backtrack((movingTarget - candidates[i]), newSolution, i);
        }
    }
    
    backtrack(target, [], 0);
    return results;
};

export function combinationSum(candidates: number[], target: number): number[][] {
    let results: number[][] = [];

    function backtrack(index: number, cur: number[], sum: number) {
        if(sum == target) results.push([...cur]);
        if(index > candidates.length || sum > target) return;

        cur.push(candidates[index]);
        backtrack(index, cur, sum + candidates[index]);

        cur.pop();
        backtrack(index + 1, cur, sum);
    }
    backtrack(0, [], 0);
    return results;
}