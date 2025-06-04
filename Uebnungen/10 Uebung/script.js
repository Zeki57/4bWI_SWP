const text = "Javascript ist eine großartige Sprache.";

let count = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() == "e") {
        count++;
    }
}

console.log(count)