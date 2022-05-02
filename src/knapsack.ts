import { KnapsackObj } from "./classes";

export function knapsack(objects: KnapsackObj[], capacity: number): number {
    let objectEfficiency: number[] = [];
    for(let i = 0; i < objects.length; i++) {
        objectEfficiency.push(objects[i].profit/objects[i].weight);
    }
    //sorted in descending order
    objectEfficiency.sort((a, b) => b-a);
    while(capacity > 0) {
        if(objectEfficiency[0] < capacity) {
            
        }
    }
    return;
}