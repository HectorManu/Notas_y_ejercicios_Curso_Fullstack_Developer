//  cOMO ACCEDER A UN OBJETO 

const producto = {
    nombre : 'Monitor de 20 pulgadas', // se le conoce como propiedad o llave del objeto 
    precio : 300,// este es separado por la coma
    disponible : true,// este último puede llevar una coma o no 
}

console.log(producto);

console.log(producto.nombre);

console.log(producto.precio);

console.log(producto['nombre']);