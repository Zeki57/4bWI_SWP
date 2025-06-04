const number = [3, 12, 5, 23, 7, 19]

let count = 0;

for (let i = 0; i < number.length; i++) {
    if (number[i] > 10) {
        count++;
    }
}

console.log(count);