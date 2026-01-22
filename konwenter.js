function konwertuj() {
    let metry = document.getElementById("liczba").value;
    let kilometry = metry / 1000;

    document.getElementById("wynik").innerText =
        metry + " metrów = " + kilometry + " kilometrów";
}