const breite = 5;
const hohe = 5;

for (let i = 1; i <= breite; i++) {
    let zahl = "";
    for (let down = 0; down <= hohe - i; down++) {
        zahl += down;
    }
    console.log(zahl);

}
