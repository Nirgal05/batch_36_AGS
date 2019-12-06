//Simulador de piedra, papel o tijera
let j1 = prompt("Elije tu arma Jugador 1: ") //Cuadro de dialogo en navegador
let j2 = prompt("Elije tu arma Jugador 2: ") //Cuadro de dialogo en navegador
//let j1 = "piedra"
//let j2 = "tijera"
const j1W = "j1 GANADOR!!!!!"
const j2W = "j2 GANADOR!!!!!"
const emp = "EMPATE!!!!!!"

if(j1=="piedra"){
    if (j2 == "piedra") console.log(emp)
    else if(j2=="papel") console.log(j2W)
    else if(j2=="tijera") console.log(j1W)
    else console.error("opción inválida ¬¬")
} 
//
else if(j1=="papel"){
    if (j2 == "piedra") console.log(j1W)
    else if(j2=="papel") console.log(emp)
    else if(j2=="tijera") console.log(j2W)
    else console.error("opción inválida ¬¬")
} 
//
else if(j1=="tijera"){
    if (j2 == "piedra") console.log(j2W)
    else if(j2=="papel") console.log(j1W)
    else if(j2=="tijera") console.log(emp)
    else console.error("opción inválida ¬¬")
} 
//
else console.error("opción inválida ¬¬")
alert("Opcion inválida")
