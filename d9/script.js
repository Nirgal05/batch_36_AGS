//Funciones con JS
/*
function suma(a, b){ //No es necesario tipearlos, sólo mandalos a llamar bien!
    let sumas = a+b;
    //console.log(sumas);
    return sumas;
}

function alerta(){
    alert("Funcion sin parámetros")
}
//Par o impar?
function parimpar(num){
    if(num%2 == 0) return "Numero par!!!";
    else return "Numero impar!!!";
}

//Reto C -> F

function cf(C){
    return ((9/5)*C)+32;
}

let temp1 = cf(18);
console.log(temp1)

let numeros = parimpar(2)
console.log(numeros)*/

//Objetos... Un objeto en Js se le conocen como "JSON" (JavaScript Objet Notation)
const control = { //Este es un objeto en Js, vamos a describir propiedades de un control
    color: "blanco", //Propiedades de los objetos, "atributos"
    material: "plastico",
    display: true,
    altura: 10,
    ancho: 5,
    botones: { //...Este es un objeto dentro de otro objeto
        //Una función dentro de un objeto se conoce como "Método"
    encender: function(){ 
        alert("On Aire acondicionado");
    },
    apagar: function(){
        alert("OFF Aire acondicionado");
    },
    },
    
};  //Lleva ";"

console.log(control);
console.log(control.color);
control.botones.encender(); //Mando a llamar la funcion
control.botones.apagar();
