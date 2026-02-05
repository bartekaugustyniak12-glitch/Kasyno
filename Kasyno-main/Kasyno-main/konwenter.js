function konwertujMetry() {
    let metry = Number(document.getElementById("metry").value);
    let kilometry = metry / 1000;

    document.getElementById("wynik").innerText =
        metry + " metrów = " + kilometry + " kilometrów";
}

function konwertujStopnie() {
    let stopnieC = Number(document.getElementById("stopnieC").value);
    let fahrenheit = stopnieC * 1.8 + 32;

    document.getElementById("wynik1").innerText =
        stopnieC + " °C = " + fahrenheit + " °F";
}
