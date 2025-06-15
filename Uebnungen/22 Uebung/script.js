function zahl(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

zahl([26, 7, 9, 18, 24, 12]);
zahl([4, 5, 6, 17, 8, 9]); 