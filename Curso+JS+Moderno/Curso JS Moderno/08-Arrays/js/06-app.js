//FORMA DECLARATIVA NO MODIFICA COMPLETAMENTE EL OBJETO ORIGINAL

const carrito = [];//NO MODIFICA SI NO QUE CREA UNA NUEVA

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

// de lo que pases primero va depender la forma final de carrito

let resultado = [...carrito,producto];
console.table(resultado);

resultado = [...carrito, producto2];
console.table(resultado);


resultado = [producto,...carrito];
console.table(resultado);