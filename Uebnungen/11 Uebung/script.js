for (let zahl = 2; zahl <= 100; zahl++) {
    let istPrim = true;

    for (let teiler = 2; teiler <= Math.sqrt(zahl); teiler++) {
        if (zahl % teiler == 0) {
            istPrim = false;
            break;
        }
    }

    if (istPrim) {
        console.log(zahl);
    }

}