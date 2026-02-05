    setInterval(() => {
        document.getElementById("zegarek").innerHTML =
            new Date().toLocaleString("pl-PL");
    }, 1000);
const info = [
    "Ośmiornice mają trzy serca i niebieską krew",
    "Banany są jagodami, a truskawki nie są",
    "W kosmosie nie da się płakać, bo łzy nie spływają",
    "Pszczoły potrafią rozpoznawać ludzkie twarze",
    "Serce wieloryba jest wielkości małego samochodu",
    "Ludzie dzielą około sześćdziesiąt procent DNA z bananem",
    "Rekiny istniały na Ziemi wcześniej niż drzewa",
    "Każdy ludzki język jest unikalny jak odcisk palca",
    "Ketchup był kiedyś sprzedawany jako lekarstwo",
    "Na Wenus jeden dzień trwa dłużej niż cały rok",

    "Wombaty robią kupę w kształcie sześcianów",
    "Mrówki nie śpią w tradycyjnym sensie",
    "Oko strusia jest większe niż jego mózg",
    "Delfiny mają imiona i reagują na nie",
    "Na Księżycu są ślady stóp, które mogą przetrwać miliony lat",
    "Ludzki mózg zużywa około dwadzieścia procent energii ciała",
    "Miód nigdy się nie psuje",
    "Motyle pamiętają, że były gąsienicami",
    "Drzewa potrafią komunikować się ze sobą przez korzenie",
    "Niektóre żółwie oddychają przez odbyt"
];


const dzien = new Date().getDate();
const ciekawostka = dzien % info.length;

document.getElementById("ciekawostka").innerText = info[ciekawostka];


