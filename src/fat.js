var weight = prompt("How much do you weight?", "Do not lie");

if (weight <= 62 && weight > 54) {
    document.getElementById("result").innerHTML = "OK";
    document.body.style.background = "green";
} else if (weight >= 63 && weight <= 64) {
    document.getElementById("result").innerHTML = "NOT FAT";
    document.body.style.background = "yellow";
} else if (weight >= 65) {
    document.getElementById("result").innerHTML = "FAT";
    document.body.style.background = "red";
} else {
    document.getElementById("result").innerHTML = ("Get a doctor.");

}

