document.getElementById("Add").addEventListener("click", function () {
    const num1 = document.getElementById("value1").value;
    const num2 = document.getElementById("value2").value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invaild value")
    } else {
        const sum = parseFloat(num1) + parseFloat(num2);
        document.getElementById("result").innerText = "Sum: " + sum;
    }

})

document.getElementById("sub").addEventListener("click", function () {
    const num1 = document.getElementById("value1").value;
    const num2 = document.getElementById("value2").value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invaild value")
    } else {
        const sum = parseFloat(num1) - parseFloat(num2);
        document.getElementById("result").innerText = "Sum: " + sum;
    }

})

document.getElementById("mul").addEventListener("click", function () {
    const num1 = document.getElementById("value1").value;
    const num2 = document.getElementById("value2").value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invaild value")
    } else {
        const sum = parseFloat(num1) * parseFloat(num2);
        document.getElementById("result").innerText = "Sum: " + sum;
    }

})

document.getElementById("div").addEventListener("click", function () {
    const num1 = document.getElementById("value1").value;
    const num2 = document.getElementById("value2").value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invaild value")
    } else {
        const sum = parseFloat(num1) / parseFloat(num2);
        document.getElementById("result").innerText = "Sum: " + sum;
    }

})