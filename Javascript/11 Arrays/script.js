/*Aufgabe 1 

Erstelle ein Array mit folgenden Werten: 

4,1,2,3 

Füge die Werte 17 und 199 dazu 

Gib alle Werte in einer Schleife aus! 
Zähle alle Werte zusammen und gib das Ergebnis aus
Berechne den Mittelwert der Zahlen und gib das Ergebnis aus*/


let arr = [4, 1, 2, 3];

arr.push(17, 30);

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}


/*Aufgabe 2  

Erstelle ein Array mit folgenden Strings: 

"Susi", "Paula", "Hans" 

Gib folgenden Satz aus: 

"Meine Freunde sind Susi, Paula und Hans  

Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten: 

"Meine Freunde sind Susi, Paula, Hans und Sepp" */

let array = ["susi", "Paula", "Hans"];

array.push("Sepp");

console.log("Meine Freunde sind " + array[1] + " " + array[2] + " " + array[3] + " und " + array[0]);
