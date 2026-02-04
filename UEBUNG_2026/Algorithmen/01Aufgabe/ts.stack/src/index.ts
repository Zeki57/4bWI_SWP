let stack: number[] = [];


function push(value: number) {
    stack.push(value);
    console.log("Hinzugefügt:", value);
}


function pop() {
    const removed = stack.pop();
    console.log("Entfernt:", removed);
}


function showStack() {
    console.log("Stack:", stack);
}


push(5);
push(10);
push(15);

showStack();

pop();

showStack();  
