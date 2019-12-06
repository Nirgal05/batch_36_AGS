//document.getElementById("titulo").innerHTML = "Título desde JavaScript";
//innerHTML cambia el texto de la etiqueta
const titulo = document.getElementById("titulo");
/*//Con esto titulo tiene propiedades
titulo.innerHTML = "Título desde JavaScript";
titulo.style.color = "red"; //Color letra*/

function changeColor(color){
    titulo.style.color = color;
}

//changeColor("red"); //Con esto yo invoco cambio de color, pero en html puedo cambiar todo!!

function addClass(clase){
    /*titulo.className = '';
    titulo.classList.add(clase);*/
    //Lo anterior es igual a:
    titulo.className = clase;
}

//
const cajaDeTexto = document.getElementById("cajaDeTexto");

function changeText(){
    titulo.innerHTML = cajaDeTexto.value;
}