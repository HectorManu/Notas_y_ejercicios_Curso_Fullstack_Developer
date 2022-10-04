"use strict"


// OBJECT LITERAL
const producto = {
    nombre : 'Monitor de 20 pulgadas', // se le conoce como propiedad o llave del objeto 
    precio : 300,// este es separado por la coma
    disponible : true,// este último puede llevar una coma o no
}

// OBJECT CONSTRUCTOR

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Tablet',2500);

console.log(producto2);

const producto3 = new Producto('Celular',2500);

console.log(producto3);