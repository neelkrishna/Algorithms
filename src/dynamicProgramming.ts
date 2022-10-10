export function fib(n: number): number {
    if(n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

export function fibOpti(n: number, map: Map<number, number> = new Map<number, number>()): number {
    if(n <= 2) return 1;
    if(!map.has(n)) map.set(n, fibOpti(n-1, map) + fibOpti(n-2, map));
    return(map.get(n));
}

export function gridTraveler(m: number, n: number): number {
    if((m == 1 && n == 1)) return 1;
    if(m == 0 || n == 0) return 0;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

export function gridTravelerOpti(m: number, n: number, map: Map<string, number> = new Map<string, number>()): number {
    if((m == 1 && n == 1)) return 1;
    if(m == 0 || n == 0) return 0;
    const key: string = m + "," + n;
    if(!map.has(key)) map.set(key, gridTravelerOpti(m - 1, n, map) + gridTravelerOpti(m, n - 1, map));
    return map.get(key);
}

export function canSum(targetSum: number, nums: number[], map: Map<number, boolean> = new Map<number, boolean>()): boolean {
    if(map.has(targetSum)) return map.get(targetSum);
    if(targetSum < 0) return false;
    if(targetSum == 0) return true;

    for(let i of nums) {
        if(canSum(targetSum - i, nums, map) == true) return true;
        else map.set(targetSum, false);
    }
    return false;
}

export function howSum(targetSum, nums: number[], map: Map<number, number[]> = new Map<number, number[]>()): number[] {
    if(targetSum < 0) return null;
    if(targetSum == 0) return [];
    if(map.has(targetSum)) return map.get(targetSum);
    for(let i of nums) {
        let result: number[] = howSum(targetSum - i, nums, map);
        if(result != null) return [...result, i];
        else map.set(targetSum, result);
    }
    return null;
}

export function bestSum(targetSum, nums: number[], map: Map<number, number[]> = new Map<number, number[]>()): number[] {
    if(targetSum < 0) return null;
    if(targetSum == 0) return [];
    if(map.has(targetSum)) return map.get(targetSum);
    let shortestCombination: number[] = null;
    for(let i of nums) {
        let result: number[] = bestSum(targetSum - i, nums, map);
        if(result != null) {
            let combination = [...result, i];
            if(!shortestCombination || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    map.set(targetSum, shortestCombination);
    return shortestCombination;
}