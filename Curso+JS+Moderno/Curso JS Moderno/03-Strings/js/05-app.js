const producto = '             Monitor de 20 pulgadas         ';

console.log(producto);
console.log(producto.replace('pulgadas',""));
console.log(producto.replace('Monitor','Monitor Curvo'));

// .slice para cortar 

console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));// donde empieza a cortar y donde empieza a cortar 
console.log(producto.substring(0,1));// mostrar solo la iniciarl este substring es más inteligente a diferencia del substring

