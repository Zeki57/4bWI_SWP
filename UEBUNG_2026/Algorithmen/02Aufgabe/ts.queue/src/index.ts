
let queue: number[] = [];


function enqueue(value: number) {
    queue.push(value);
    console.log("Added:", value);
}


function dequeue() {
    const removed = queue.shift();
    console.log("Removed:", removed);
}


function showQueue() {
    console.log("Queue:", queue);
}


enqueue(5);
enqueue(10);
enqueue(15);

showQueue();

dequeue();

showQueue();   
