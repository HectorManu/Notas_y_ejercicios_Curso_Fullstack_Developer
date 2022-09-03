// Math nos dá funciones matematicas
/* si ponemos Mat.PI pues este nos devuelve el valor de Pi */

let resultado;

// Pi 
resultado = Math.PI;

// Redondear
restultado = Math.round(2.8);// este por defaul no redondea de .5 es decir redondea hacia arriba cuando es .6

// CÓMO HACERLE PARA REDONDEAR DE .5 HACÍA ARRIBA?
restultado = Math.ceil(2.1); // mientras sea .1 redondea hacia arriba

// REdondear hacía abajo 

resultado = Math.floor(2.9);// redondea hacia abajo o sea 2

// raiz cuadrada
resultado = Math.sqrt(144);

// VAlor Absoluto
resultado = Math.abs(-500);

// Potencia 
resultado = Math.pow(8,4);

// Saber el mínimo de una serie de números
resultado = Math.min(3,5,1);
// Saber el máximo de una serie de números
resultado = Math.max(3,5,8);

// Ateatorio
resultado = Math.random()*20;

// Aleatorio dentro de un arango..
resultado = Math.floor(Math.random()*30);

console.log(restultado);