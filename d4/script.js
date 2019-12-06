//alert("Furula!!!!!");

// Variable tipo string
let x = "Martín";
// Variable numerica
let edad = 24
// Boolean
let mayorEdad = true;

// Manda de alerta ahora lo que hay en "x"
//alert(x);

/*
console.log(x); //Imprimir en consola del navegador
console.warn(x); //para warnings
console.error("error 404") //Para errores */

//Puedes utilizar "var" también, pero es mejor "let" porque es dinámico
let a = 24
let b = 14
let suma = a+b
console.log("a = " + a +", b = " + b)
console.log("a + b = " + suma)
//
let div = a/b
console.log("a / b = " + div)
//
let modulo = a%b
console.log("a % b = " + modulo)
//
let exponente = a**b
console.log("a^b = " + exponente)
// Concatener
let y = "Martin "+ 2
console.log(y)
//
if(edad>18){
    console.log("Es mayor de edad")
}
else{
    console.warn("Es puberto")
}
//
let num = 5

if(num%2 == 0){
    console.log("# es par")
}
else{
    console.error("# es impar")
}