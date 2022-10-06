const carrito = [
    {nombre : 'monitor 27 pulgadas', precio : 500},
    {nombre : 'televicion', precio : 1500},
    {nombre : 'iphone', precio : 5040},
    {nombre : 'teclado', precio : 2500},
    {nombre : 'mouse', precio : 5002},
    {nombre : 'tablet', precio : 5050},
];

for (let index = 0; index < carrito.length; index++) {
    console.log([`${carrito[index].nombre} - Precio : ${carrito[index].precio}`]);
    
}

carrito.forEach( function(producto) {
    console.log([`${producto.nombre} - Precio : ${producto.precio}`]);
})