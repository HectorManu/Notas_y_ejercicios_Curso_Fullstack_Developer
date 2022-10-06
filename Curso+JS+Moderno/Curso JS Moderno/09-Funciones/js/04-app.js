// LAS DIFERENCIAS ENTRE FUNCIÓNES Y MÉTODOS

const numero1= 20;
const numero2 = '20';


console.log(parseInt(numero2));// función
// la diferencia entre una función y un metodo es su forma de verse
console.log(numero1.toString());// método 

function sumar() {
    console.log(2+2);
}

sumar();