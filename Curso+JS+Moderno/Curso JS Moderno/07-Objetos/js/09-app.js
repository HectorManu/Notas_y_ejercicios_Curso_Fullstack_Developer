
"use strict";

// una vez declarado entonces tenemos acceso a los objetc methods

const producto = {
    nombre : 'Monitor de 20 pulgadas', // se le conoce como propiedad o llave del objeto 
    precio : 300,// este es separado por la coma
    disponible : true,// este último puede llevar una coma o no 
}

// utilizaremos seal 
// DIFERENCIA entre freez y seal es que no se pueden agregar ni eliminar propiedades, pero sí podemos modificar las existentes
Object.seal(producto);

producto.disponible = false;

//producto.imagen = "imagen.jpg"; NO NOS LO PERMIRE


console.log(producto);

// si queremos saber si esta sellado entonces 
console.log(Object.isSealed(producto));