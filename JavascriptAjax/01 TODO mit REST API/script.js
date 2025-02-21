loadData();

document.getElementById("btnLoad").addEventListener("click", function () {
    loadData();
});

function loadData() {
    fetch("https://67b89a8c699a8a7baef4aa31.mockapi.io/todos")
        .then((response) => response.json())
        .then((json) => {
            let html = [];

            json.forEach((todo) => {
                html.push(
                    "<div><div>" +
                    todo.title +
                    "</div><img width='50px' src='" +
                    todo.image +
                    "?id=" +
                    Math.random() +
                    " '/></div>"
                );
            });
            document.getElementById("content").innerHTML = html.join("");
        });
}