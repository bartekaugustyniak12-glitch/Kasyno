    setInterval(() => {
        document.getElementById("zegarek").innerHTML =
            new Date().toLocaleString("pl-PL");
    }, 1000);
   const info=[
    "Ośmiornice mają trzy serca i niebieską krew",

"Banany są jagodami, a truskawki nie są",

"W kosmosie nie da się płakać, bo łzy nie spływają",

"Pszczoły potrafią rozpoznawać ludzkie twarze",

"Serce wieloryba jest wielkości małego samochodu",

"Ludzie dzielą około sześćdziesiąt procent DNA z bananem",

"Rekiny istniały na Ziemi wcześniej niż drzewa",

"Każdy ludzki język jest unikalny jak odcisk palca",

"Ketchup był kiedyś sprzedawany jako lekarstwo",

"Na Wenus jeden dzień trwa dłużej niż cały rok"]

const dzien = new Date().getDate();
const ciekawostka = dzien % info.length;

document.getElementById("ciekawostka").innerText = info[ciekawostka];


