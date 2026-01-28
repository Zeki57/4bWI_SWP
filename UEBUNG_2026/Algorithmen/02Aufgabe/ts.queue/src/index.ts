// Unsere Queue (Warteschlange)
let queue: number[] = [];

// Element hinten hinzufügen
function enqueue(value: number) {
    queue.push(value);
    console.log("Added:", value);
}

// Erstes Element entfernen
function dequeue() {
    const removed = queue.shift();
    console.log("Removed:", removed);
}

// Queue anzeigen
function showQueue() {
    console.log("Queue:", queue);
}

// Programmstart
enqueue(5);
enqueue(10);
enqueue(15);

showQueue();   // [5, 10, 15]

dequeue();

showQueue();   // [10, 15]
