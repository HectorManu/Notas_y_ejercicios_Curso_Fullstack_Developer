// cómo crear objetos dentro de otro objeto 

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


console.log(producto);

console.log(producto.informacion);

console.log(producto.informacion.medida);

// intentando acceder a la práctica de país 

console.log(producto.informacion.fabricacion.pais);