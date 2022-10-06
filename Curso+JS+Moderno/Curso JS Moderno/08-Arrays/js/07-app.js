// FORMA IMPERATIVA 
// ejemplo de carrito 
const carrito = [];// esta forma si modifica directamente el arreglo

// definir un procucto 
const producto = {
    nombre : 'monitor de 24 pulgadas',
    precio : 2400
}

const producto2 = {
    nombre : 'Iphone',
    precio : 25000
}
const producto3={
    nombre : 'mousepad',
    precio : 49
}
carrito.push(producto,producto2,producto3);//coloca al final
console.table(carrito)

// // eliminar al final de arreglo con pop
// carrito.pop();// a DIFERENCIA DEL OBJETO QUE USAMOS DELETE.

// console.table(carrito)

// // eliminar desde el inicio 
// carrito.shift();// a DIFERENCIA DEL OBJETO QUE USAMOS DELETE.
// console.table(carrito)

carrito.splice(2,1);
console.table(carrito);