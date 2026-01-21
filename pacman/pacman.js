let pozycjaPacmana=0;

function f1(event){
	const klawisz=event.keyCode;
	const klawisz2=event.key;

	if(klawisz2=='ArrowRight'|| klawisz2=="d") {
		if(pozycjaPacmana!=4 && pozycjaPacmana!=9 && pozycjaPacmana!=14 && pozycjaPacmana!=19 && pozycjaPacmana!=24){
			pozycjaPacmana++;
			document.images[pozycjaPacmana].src='pacman.jpg';
			document.images[pozycjaPacmana-1].src='bialy.jpg';
			document.images[pozycjaPacmana].style.transform = "rotate(0deg)";
			sprawdzWisnie();
		}
	}

	if(klawisz2=="ArrowLeft"|| klawisz2=="a"){
		if(pozycjaPacmana!=0 && pozycjaPacmana!=5 && pozycjaPacmana!=10 && pozycjaPacmana!=15 && pozycjaPacmana!=20){
			pozycjaPacmana--;
			document.images[pozycjaPacmana].src='pacman.jpg';
			document.images[pozycjaPacmana+1].src='bialy.jpg';
			document.images[pozycjaPacmana].style.transform = "rotate(180deg)";
			sprawdzWisnie();
		}
	}

	if(klawisz2=='ArrowDown'|| klawisz2=="s") {
		if(pozycjaPacmana!=20 && pozycjaPacmana!=21 && pozycjaPacmana!=22 && pozycjaPacmana!=23 && pozycjaPacmana!=24){
			pozycjaPacmana+=5;
			document.images[pozycjaPacmana].src='pacman.jpg';
			document.images[pozycjaPacmana-5].src='bialy.jpg';
			document.images[pozycjaPacmana].style.transform = "rotate(90deg)";
			sprawdzWisnie();
		}	
	}

	if(klawisz2=='ArrowUp'|| klawisz2=="w") {
		if(pozycjaPacmana!=0 && pozycjaPacmana!=1 && pozycjaPacmana!=2 && pozycjaPacmana!=3 && pozycjaPacmana!=4){
			pozycjaPacmana-=5;
			document.images[pozycjaPacmana].src='pacman.jpg';
			document.images[pozycjaPacmana+5].src='bialy.jpg';
			document.images[pozycjaPacmana].style.transform = "rotate(-90deg)";
			sprawdzWisnie();
		}	
	}
}


let punkty = 0;
let pozycjaWisni = -1;

function nowaWisnia() {
	let x;
	do {
		x = Math.floor(Math.random() * 25);
	} while (x === pozycjaPacmana);

	pozycjaWisni = x;
	document.images[x].src = 'wisnie.jpg';
}

function sprawdzWisnie() {
	if (pozycjaPacmana === pozycjaWisni) {

		punkty++;
		document.getElementById('puknkty').innerHTML = "Punkty: " + punkty;

		document.images[pozycjaWisni].src = 'pacman.jpg';

		setTimeout(nowaWisnia, 200);
	}
}

nowaWisnia();



