import { morseMap } from "./constants";

export function morseToEng(str: string, start: number, end: number, output: string[]): string[] {
    if(start > end) return output;

    for(let i = start; i <= end; i++) {
        let substr: string = str.substring(start, i + 1);
        let finalI: number = i;
        if(morseMap.has(substr)) {
            output.push(morseMap.get(substr));
            morseToEng(str, finalI + 1, end, output);
        }
    }
    
    return output;
}