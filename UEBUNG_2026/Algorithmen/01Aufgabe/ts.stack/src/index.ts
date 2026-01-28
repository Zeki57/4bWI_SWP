// Unser Stack (eine Liste von Zahlen)
let stack: number[] = [];

// Element oben drauflegen
function push(value: number) {
    stack.push(value);
    console.log("Hinzugefügt:", value);
}

// Oberstes Element entfernen
function pop() {
    const removed = stack.pop();
    console.log("Entfernt:", removed);
}

// Stack anzeigen
function showStack() {
    console.log("Stack:", stack);
}

// Programmstart
push(5);
push(10);
push(15);

showStack();   // [5, 10, 15]

pop();

showStack();   // [5, 10]
