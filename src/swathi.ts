export function countToTen(): void {
    for(let i = 0; i < 10; i++) {
        console.log(i+1);
    }
}

export function secondGradeDivision(dividend: number, divisor: number): string {
    /**
     * if the dividend is 9 and the divisor is 2, the result should be "4 remainder 1"
     */
    
    //return Math.floor(dividend/divisor) + " remainder " + dividend % divisor;

    let count = 0;
    let div = 0;
    while(div < dividend) {
        if(div + divisor > dividend) break;
        div = div + divisor;
        count ++;
    }

    let remainder = dividend - div;

    return count + " remainder " + remainder;

}

export function teachingVijay() {
    // hello world
}

export function test() {
    
}