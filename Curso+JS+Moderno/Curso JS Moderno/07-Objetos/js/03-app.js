// AGregar valores al objeto 

const producto = {
    nombre : 'Monitor de 20 pulgadas', // se le conoce como propiedad o llave del objeto 
    precio : 300,// este es separado por la coma
    disponible : true,// este último puede llevar una coma o no 
}

console.log(producto);

// si queremos agragar durante la ejecución del objeto 

producto.imagen = 'imagen.jpg';


// si queremos eliminar una variable dentro del objeto 

delete producto.disponible;