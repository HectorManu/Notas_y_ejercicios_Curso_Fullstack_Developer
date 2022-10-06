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

//DESTRUCTURING
const {nombre}=producto;
console.log(nombre);

//DESTRUCTURING CON ARREGLOS 
const numeros =[1,2,3,4];
const [primero, segundo, tercer]= numeros;
console.log(primero);
console.log(tercer);

const numeros2 =[1,2,3,4];
const [ , , ,cuarto]= numeros2;
console.log(cuarto);

const numeros4 = [1,2,3,4];
const [primis, ...tercerito]= numeros4;
console.log(tercerito);