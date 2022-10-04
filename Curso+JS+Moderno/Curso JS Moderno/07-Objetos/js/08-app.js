// cómo congelar un eleento de un objeto 
// para eso hay que activar el modo estricto 
"use strict";// es una forma de decirle al javascript que esto tenga buans prácticas 

// una vez declarado entonces tenemos acceso a los objetc methods

const producto = {
    nombre : 'Monitor de 20 pulgadas', // se le conoce como propiedad o llave del objeto 
    precio : 300,// este es separado por la coma
    disponible : true,// este último puede llevar una coma o no 
}

Object.freeze(producto);

// producto.disponible = false;

// producto.imagen = 'imagen.jpg';

//  delete producto.precio;

console.log(producto);

// de estar congelado lo que tendriamos que hacer es usar un clone para estar modificando el clonado
// si qeremos ver si un objeto está congelado podemos hacer lo siguiente 
console.log(Object.isFrozen(producto));