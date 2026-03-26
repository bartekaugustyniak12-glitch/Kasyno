const graczImg = document.getElementById('graczImg');
const botImg = document.getElementById('botImg');
const wynik = document.getElementById('wynik');
const punktyGraczSpan = document.getElementById('punktyGracz');
const punktyBotSpan = document.getElementById('punktyBot');

let punktyGracz = 0;
let punktyBot = 0;

function graj(wyborGracza) {

    const opcje = ['K', 'P', 'N'];
    const los = Math.floor(Math.random() * 3);
    const wyborBota = opcje[los];

    graczImg.src = wyborGracza + '.jpg';
    botImg.src = wyborBota + '.jpg';

    if (wyborGracza == wyborBota) {
        wynik.innerHTML = 'Remis – brak punktów';
    }
    else if (
        (wyborGracza == 'K' && wyborBota == 'N') ||
        (wyborGracza == 'P' && wyborBota == 'K') ||
        (wyborGracza == 'N' && wyborBota == 'P')
    ) {
        punktyGracz++;
        wynik.innerHTML = 'Gracz wygrał rundę';
    }
    else {
        punktyBot++;
        wynik.innerHTML = 'Bot wygrał rundę';
    }

    punktyGraczSpan.innerHTML = punktyGracz;
    punktyBotSpan.innerHTML = punktyBot;

    if (punktyGracz == 5) {
        alert('Gracz wygrał! Nowa gra');
        reset();
    }

    if (punktyBot == 5) {
        alert('Bot wygrał! Nowa gra');
        reset();
    }
}

function reset() {
    punktyGracz = 0;
    punktyBot = 0;

    punktyGraczSpan.innerHTML = 0;
    punktyBotSpan.innerHTML = 0;
    graczImg.src = '';
    botImg.src = '';
    wynik.innerHTML = '';
}
