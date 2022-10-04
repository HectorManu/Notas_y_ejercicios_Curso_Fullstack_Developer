"use strict"

// const nombre = "hola";
// const precio = 20;

const producto = {
    nombre : 'Monitor de 20 pulgadas', // se le conoce como propiedad o llave del objeto 
    precio : 300,// este es separado por la coma
    disponible : true,// este último puede llevar una coma o no 
    mostrarInfo: function() {
        // this es una forma de referirse al objeto en sí mismo
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

const producto2 = {
    nombre : 'Tablet', // se le conoce como propiedad o llave del objeto 
    precio : 5800,// este es separado por la coma
    disponible : true,// este último puede llevar una coma o no 
    mostrarInfo: function() {
        // this es una forma de referirse al objeto en sí mismo
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}


producto.mostrarInfo();
producto2.mostrarInfo();