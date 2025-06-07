const number = [3, 4, 6, 8, 9];

for (let i = 0; i < number.length; i++) {
    let gerade = number[i];

    if (gerade % 2 == 0) {
        console.log(gerade);
    }
}
