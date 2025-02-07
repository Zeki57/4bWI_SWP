let todos = [
    { id: 1, titel: "Putzen", isDone: false },
    { id: 2, titel: "training", isDone: true },
    { id: 3, titel: "kochen", isDone: false },
    { id: 4, titel: "lerne", isDone: true },
]


let html = "";
todos.forEach(element => {
    html += "<div>" + element.titel + "-" + element.isDone + "</div>";
});

document.getElementById("todos").innerHTML = html;