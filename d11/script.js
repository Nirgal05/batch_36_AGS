const name = document.getElementById("name");
const lastName1 = document.getElementById("lastName1");
const lastName2 = document.getElementById("lastName2");
const cumple = document.getElementById("cumple");
const newRFC = document.getElementById("newRFC"); //para imprimir el RFC

//Console

function getRFC(){
    /*console.log(name.value);
    console.log(lastName1.value);
    console.log(lastName2.value);
    console.log(cumple.value);*/

    let RFC = lastName1.value[0] + lastName1.value[1]; //Primeras 2 letras
    RFC = RFC + lastName2.value[0]; //Letra del apellido materno
    RFC += name.value[0]; //Nombre
    //0123456789
    //1995-03-15
    RFC += cumple.value[2] + cumple.value[3] + cumple.value[5] + cumple.value[6] + cumple.value[8] + cumple.value[9];
    RFC = RFC.toUpperCase();
    console.log(RFC);
    newRFC.innerHTML = "Tu RFC es: " + RFC; //Imprime todo en una etiqueta
}

//FASM950315