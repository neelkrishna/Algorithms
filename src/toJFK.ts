export function jump(nums: number[]): number {
    if(nums.length == 1) return 0;
    return recurse(nums, 0);
    
};

function recurse(nums: number[], index: number, jumpCount: number = 0, 
    currentMin: number = Number.MAX_SAFE_INTEGER): number {
    if(nums.length - 1 == index) {
        currentMin = Math.min(currentMin, jumpCount);
    }
    if(nums.length - 1 < index) return null;
    let jumpsAvailable: number = nums[index];
    for(let i = 1; i <= jumpsAvailable; i++) {
        recurse(nums, index + i, ++jumpCount, currentMin);
    }
}