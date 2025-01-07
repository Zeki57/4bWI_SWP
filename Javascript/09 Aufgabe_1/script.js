value = 36

for (let index = 1; index <= value; index++) {
    if (index % 5 == 0 && index % 7 == 0) {
        console.log("FooBar");
    } else if (index % 7 == 0) {
        console.log("Bar");
    } else if (index % 5 == 0) {
        console.log("Foo");
    } else {
        console.log(index);

    }
}