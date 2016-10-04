//cachipum.js
/* necesito una jugada y el valor de esa jugada 
va a ser piedra papel o tijera
*/
var jugadaUser;
var jugadaCompu;

var jugadaUser = prompt("¿Piedra, papel o tijera?");
console.log(jugadaUser);

/*Busco un numero random para la seleccion
de la opcion de la computadora*/
var numRandom = Math.random()*2;
var numRedondo = Math.round(numRandom);
console.log(numRedondo);

/*0: piedra / 1: tijera / 2: papel*/

if(numRedondo == 0){
	jugadaCompu = "piedra";
}else if(numRedondo == 1){
	jugadaCompu = "tijera";
}else{
	jugadaCompu = "papel";
}

alert("Ahora le toca el computador elegir");
console.log(jugadaCompu);
alert("El computador eligió : " + jugadaCompu);
if(jugadaUser == "piedra"){
	if(jugadaCompu == "piedra"){
		alert("Oh! hubo un empate");
	}else if(jugadaCompu == "tijera"){
		alert("Felicitaciones has ganado!!!");
	}else{
		alert("Oh no!!! La computadora ha ganado");
	}
}else if(jugadaUser == "tijera"){
	if(jugadaCompu == "tijera"){
		alert("Es un empate");
	}else if(jugadaCompu == "papel"){
		alert("Felicitaciones has ganado");
	}else{
		alert("Ganó la compu");
	}
}else{//Si no es piedra ni tijera es papel
	if(jugadaCompu == "papel"){
		alert("Empate");
	}else if(jugadaCompu == "piedra"){
		alert("Ganaste!!!!")
	}else{
		alert("Ganó el compu!!!")
	}
} 

















