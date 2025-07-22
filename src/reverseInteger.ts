export function reverseInteger(x: number): number {
    const INT_MAX = 2147483647; // 2^31 - 1
    const INT_MIN = -2147483648; // -2^31
    let result = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = (x / 10) | 0; // truncate toward zero
        if (result > INT_MAX / 10 || (result === INT_MAX / 10 && digit > 7)) return 0;
        if (result < INT_MIN / 10 || (result === INT_MIN / 10 && digit < -8)) return 0;
        result = result * 10 + digit;
    }
    return result;
}

