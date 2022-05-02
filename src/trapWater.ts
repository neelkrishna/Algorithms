export function trap(height: number[]): number {
    let solution: number = 0;
    for(let i = 0; i < height.length; i++) {
        let tempHeight: number[] = [...height];
        tempHeight.length = i >= 0 ? i : 0;
        tempHeight.sort((a, b) => a - b);
        let currentMaxLeft: number = tempHeight[tempHeight.length - 1] || 0;
        tempHeight = [...height];
        for(let j = 0; j <= i; j++) tempHeight.shift();
        tempHeight.sort((a, b) => a - b);
        let currentMaxRight: number = tempHeight[tempHeight.length - 1];
        if(Math.min(currentMaxLeft, currentMaxRight) - height[i] > 0) {
            solution += Math.min(currentMaxLeft, currentMaxRight) - height[i];
        }
    }
    return solution;
};