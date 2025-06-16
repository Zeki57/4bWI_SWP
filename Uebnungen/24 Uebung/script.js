/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const s = "how are you today";
const wort = s.split(" ");
;
for (let i = 0; i < wort.length; i++) {
    if (i % 2 == 1) {
        wort[i] = wort[i].split("").reverse().join("");
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(wort.join(" "));
