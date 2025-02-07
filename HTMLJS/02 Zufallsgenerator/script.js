function genereate() {
    const lowerBound = document.getElementById("box1").value;
    const higherBound = document.getElementById("box2").value;

    let randomNumber = Math.floor(Math.random() * (higherBound - lowerBound) + higherBound);
    document.getElementById("result").innerHTML = randomNumber;

}



