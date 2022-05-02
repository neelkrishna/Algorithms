export function dfPrint(graph: Map<string, string[]>, source: string): void {
    let stack: string[] = [source];
    while(stack.length > 0) {
        let currentNode: string = stack.pop();
        console.log(currentNode);
        for(let i = 0; i < graph.get(currentNode).length; i++) {
            stack.push(graph.get(currentNode)[i]);
        }
    }
}

export function bfPrint(graph: Map<string, string[]>, source: string): void {
    let queue: string[] = [source];
    while(queue.length > 0) {
        let currentNode: string = queue.shift();
        console.log(currentNode);
        for(let i = 0; i < graph.get(currentNode).length; i++) {
            queue.push(graph.get(currentNode)[i]);
        }
    }
}