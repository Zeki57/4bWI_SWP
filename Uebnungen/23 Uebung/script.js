/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = 4;
const line = "abcd";
var inputs = [4, 3, 2, 1];

let result = "";
for (let i = 0; i < n; i++) {
    const index = parseInt(inputs[i]);

    result += line[index - 1];
}

console.log(result);
// Write an answer using console.log()
// To debug: console.error('Debug messages...');