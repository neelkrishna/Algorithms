export function combinationSum(candidates: number[], target: number): number[][] {
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