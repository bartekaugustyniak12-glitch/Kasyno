let pozycjaPacmana = 0;
let punkty = 0;
let pozycjaWisni = -1;
let kierunek = 0;

function f1(event) {
  const k = event.key;

  if (k === "ArrowRight" || k === "d") ruch(1, 0, 0);
  if (k === "ArrowLeft"  || k === "a") ruch(-1, 0, 180);
  if (k === "ArrowDown"  || k === "s") ruch(0, 1, 90);
  if (k === "ArrowUp"    || k === "w") ruch(0, -1, -90);
}

function ruch(dx, dy, rotacja) {
  let x = pozycjaPacmana % 5;
  let y = Math.floor(pozycjaPacmana / 5);

  let nx = x + dx;
  let ny = y + dy;

  if (nx < 0 || nx > 4 || ny < 0 || ny > 4) return;

  let nowaPozycja = ny * 5 + nx;

  if (pozycjaPacmana !== pozycjaWisni) {
    document.images[pozycjaPacmana].src = "bialy.jpg";
  }

  pozycjaPacmana = nowaPozycja;
  document.images[pozycjaPacmana].src = "pacman.jpg";
  document.images[pozycjaPacmana].style.transform = `rotate(${rotacja}deg)`;

  sprawdzWisnie();
}

function nowaWisnia() {
  let x;
  do {
    x = Math.floor(Math.random() * 25);
  } while (x === pozycjaPacmana);

  pozycjaWisni = x;
  document.images[x].src = "wisnie.jpg";
}

function sprawdzWisnie() {
  if (pozycjaPacmana === pozycjaWisni) {
    punkty++;
    document.getElementById("punkty").innerText = punkty;
    pozycjaWisni = -1;
    setTimeout(nowaWisnia, 200);
  }
}

nowaWisnia();
