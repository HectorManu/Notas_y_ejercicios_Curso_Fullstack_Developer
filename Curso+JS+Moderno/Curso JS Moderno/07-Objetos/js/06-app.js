const producto = {
    nombre : 'Monitor de 20 pulgadas', // se le conoce como propiedad o llave del objeto 
    precio : 300,// este es separado por la coma
    disponible : true,// este último puede llevar una coma o no 
    informacion :{
        medidas :{
            peso:'1kg',
            medida:'1m'
        },
        fabricacion :{
            pais :'China'
        }
        
    }
}


//haciendo un destructuring 

const{ nombre, informacion, informacion: {fabricacion, fabricacion : {pais}}}=producto;

console.log(nombre);
console.log(informacion);
console.log(pais);