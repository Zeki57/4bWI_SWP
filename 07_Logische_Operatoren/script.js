// Erstelle zwei Zufallszahl zwischen 0 und 100 
// Speichere diese jeweils in einer Variable 

randomNumber = Math.random() * 100;
random = Math.floor(randomNumber);
console.log(random);

randomNumber1 = Math.random() * 100;
random = Math.floor(randomNumber1);
console.log(random);


// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50 
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini" 

if ((randomNumber < randomNumber1) && (randomNumber < 50)) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}


// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30 
// dann gib aus "Eine der beiden ist kleiner als 30" 

if ((randomNumber < 30) || (randomNumber1 < 30)) {
    console.log("Eine der beiden ist kleiner als 30")
}


// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger" 

if ((randomNumber < 50) && (randomNumber1 != 50)) {
    console.log("Erste Zahl klein, zweite kein 50iger")
}