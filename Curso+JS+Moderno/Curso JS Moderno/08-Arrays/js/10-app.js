// DIFERENCIA ENTRE FOREACH Y ENTRE MAP

const carrito = [
    {nombre : 'monitor 27 pulgadas', precio : 500},
    {nombre : 'televicion', precio : 1500},
    {nombre : 'iphone', precio : 5040},
    {nombre : 'teclado', precio : 2500},
    {nombre : 'mouse', precio : 5002},
    {nombre : 'tablet', precio : 5050},
];


const arregloforeach = carrito.forEach( function(producto) {
    console.log([`${producto.nombre} - Precio : ${producto.precio}`]);
})
console.log(arregloforeach);

// ESTE CREA UN ARREGLO NUEVO 
const arreglomap = carrito.map( function(producto) {
    console.log([`${producto.nombre} - Precio : ${producto.precio}`]);
})

console.log(arreglomap);