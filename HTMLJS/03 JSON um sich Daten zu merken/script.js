let person = { firstname: "Hans", lastname: "Huber", points: 30 }

let data = [
    { firstname: "Hans", lastname: "Huber", points: 30 },
    { firstname: "Paul", lastname: "Müller", points: 34 },
    { firstname: "Franz", lastname: "Maier", points: 35 }
];

function loadPeople() {
    let html = "";
    data.forEach(element => {
        html += "<div>" + element.firstname + " " + element.lastname + "</div>";
    });

    document.getElementById("content").innerHTML = html;
}

loadPeople();