//para agrupar aarray del mismo tipo 

const numero = [20,30,40];// los objetos son con llaves pero los arreglos son con corchetes

// DIFERENCIA ENTRE ARREGLOS Y OBJETOS
// const producto = {
//     nombre : 'Monitor de 20 pulgadas', // se le conoce como propiedad o llave del objeto 
//     precio : 300,// este es separado por la coma
//     disponible : true,// este último puede llevar una coma o no 
// }

const meses = new Array('Enero','Febrero');
//los arreglos tienen indices 
console.log(numero); 

// arreglo que contien datos de todo tipo

const detodo = ['hola',10,true, 'si',null, {nombre: 'juan', trabajo:'estudiante'}];

console.log(detodo);

const detodo2 = ['hola',10,true, 'si',null, {nombre: 'juan', trabajo:'estudiante'}, [1,2,3] ];

console.log(detodo2);