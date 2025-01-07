let numbers = "1 2 3 4";
let sum = 0;

for (let n of numbers.split(" ")) {
    let num = parseInt(n);
    if (num % 2 == 0) {
        sum += num
    }
}

console.log(sum);