"use strict";
let list = [];
function add(value) {
    list.push(value);
}
function remove(value) {
    const index = list.indexOf(value);
    if (index !== -1) {
        list.splice(index, 1);
    }
}
function showList() {
    console.log("List:", list);
}
add(5);
add(10);
add(15);
showList();
remove(10);
showList();
