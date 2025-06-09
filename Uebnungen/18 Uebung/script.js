const breite = 6;
const hohe = 4;

for (let i = 0; i <= hohe; i++) {
    let zeile = "";

    for (let spalte = 0; spalte <= breite; i++) {
        zeile += "*";
    }

    console.log(zeile);
}
