function gentext() {
	var word = ["Real Madrid","Barcelona","juventus","Manchester United","Liverpool","PSG","Manchester City","Bayren","Inter Milan","Napoli","Atletico Madrid",];
	var para= document.querySelector("p");
	para.innerHTML= word[Math.floor(Math.random()*word.length)];
}