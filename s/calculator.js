function dopisz(znak) {
    const wyswietlacz = document.getElementById("display");
    wyswietlacz.value = wyswietlacz.value + znak;
}

function wyczysc() {
    const wyswietlacz = document.getElementById("display");
    wyswietlacz.value = "";
}

function oblicz() {
    const wyswietlacz = document.getElementById("display");

    try {
        wyswietlacz.value = eval(wyswietlacz.value);
    }
    catch (blad) {
        alert("Błąd");
        wyswietlacz.value = "";
    }
}
