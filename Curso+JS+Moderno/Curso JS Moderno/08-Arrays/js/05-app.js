// const meses = ['enero','febrero','marzo'];

// //agregar un nuevo mes con método pero sin conocer la extención del arreblo

// meses.push('abril');
// meses.push('mayo');

// console.table(meses);



// FORMA IMPERATIVA
// ejemplo de carrito 
const carrito = [];

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
carrito.push(producto,producto2);//coloca al final
carrito.unshift(producto3);//para agregarlo hasta el inicio 
console.table(carrito)