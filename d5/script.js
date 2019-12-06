//Ciclos
document.write("<h1>Documento del dia 5!!!</h1>")
for(let i=0;i<4;i++){
    if(i==0) console.log(i+" indeterminado!!!!")
    else if(i%2==0) console.log(i+" par")
    else console.log(i+" impar")
}
let e=0
do{
    console.log(e);
    e++;
}while(e<6);

//Genera los primeros 100 #
//múltiplo de 3, pon "Fizz"
//múltiplo de 5, pon "Buzz"
//múltiplo de ambos, pon "FizzBuzz"
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0) console.log(i+" FizzBuzz")
    else if(i%3==0) console.log(i+" Fizz")
    else if(i%5==0) console.log(i+" Buzz")
}

for(let i=1;i<=100;i++){
    if(i%3==0){
        if(i%5==0) console.log(i+" FizzBuzz")
        else console.log(i+" Fizz")
    }
    else if(i%5==0) console.log(i+" Buzz")
}