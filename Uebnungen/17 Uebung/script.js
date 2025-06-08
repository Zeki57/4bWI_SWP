const array = "34689054";


for (let ziffer = 0; ziffer <= 9; ziffer++) {

    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == ziffer.toString()) {
            count++;
        }
    }
    console.log(`${ziffer}: ${count}-mal`);
}