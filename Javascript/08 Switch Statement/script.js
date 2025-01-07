// Erstelle eine Zufallszahl zwischen 5 und 10 

// Wenn der Wert 10 ist gib aus Ten 
// Wenn der Wert 9 ist gib aus Nine 
// Wenn der Wert 8 ist gib aus Eight 
// etc. 

randomNumber = Math.random() * 6 + 5;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

if (randomNumber == 10) {
    console.log("Ten");
} else if (randomNumber == 9) {
    console.log("Nine");
} else if (randomNumber == 8) {
    console.log("Eight");
} else if (randomNumber == 7) {
    console.log("seven");
} else if (randomNumber == 6) {
    console.log("six");
} else {
    console.log("Five");
}