"use strict"

const producto = {
    nombre : 'Monitor de 20 pulgadas', // se le conoce como propiedad o llave del objeto 
    precio : 300,// este es separado por la coma
    disponible : true,// este último puede llevar una coma o no 
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

console.log(producto)
console.log(medidas)

const resultado = Object.assign(producto,medidas);

// spread operator o rest operatod


const resultado2 = {...producto, ...medidas};//ESETA ES LA MÁS Utilizada

console.log(resultado);
console.log(resultado2);