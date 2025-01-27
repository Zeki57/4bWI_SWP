import { log } from "console";
import { read } from "fs";
import { resolve } from "path";
import { createInterface } from "readline";
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});
const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);

        });
    });
};



function select() {
    console.log("Selektieren Sie die Gewünschte Funktion:");
    console.log(1 + " Einzahlen:");
    console.log(2 + " Abheben:");
    console.log(3 + " Kontostand:");
    console.log(4 + " Beende:");
}

function deposit(balance, value) {
    balance = balance + value;
    console.log("Sie haben " + balance + " Eingezahlt!");
    return balance;
}

function withdraw(balance, value) {
    balance = balance - value;
    console.log("Sie haben " + balance + " Ausgezahlt!");
    return balance;
}

function showBalance(balance) {
    console.log("Sie haben " + balance + " Auf Konto!");
}


select();

let selector = 0;
let balance = 0;

do {
    selector = parseInt(await readLineAsync(), 10);

    switch (selector) {
        case 1:
            console.log("Geben Sie ein wie viel sie einzahlen möchten!");
            balance = deposit(balance, parseInt(await readLineAsync(), 10));
            break;

        case 2:
            console.log("Geben Sie ein wie viel sie auszahlen möchten!");
            balance = withdraw(balance, parseInt(await readLineAsync(), 10));
            break;

        case 3:
            showBalance(balance);
            break;

        case 4:
            console.log("Programm wird beendet!");
            break;

        default:
            break;
    }
}
while (selector != 4)

readline.close();

