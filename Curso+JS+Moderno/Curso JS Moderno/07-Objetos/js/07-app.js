// los const no se pueden reasignar pero supongamos 

const producto = {
    nombre : 'Monitor de 20 pulgadas', // se le conoce como propiedad o llave del objeto 
    precio : 300,// este es separado por la coma
    disponible : true,// este último puede llevar una coma o no 
}


producto.disponible = false;

delete producto.precio;

console.log(producto);