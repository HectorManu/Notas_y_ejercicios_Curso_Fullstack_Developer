const producto = {
    nombre : 'Monitor de 20 pulgadas', // se le conoce como propiedad o llave del objeto 
    precio : 300,// este es separado por la coma
    disponible : true,// este último puede llevar una coma o no
}

// obtener las llaves o parametros que hay en el object PARTE IZQUIERDA
console.log(Object.keys(producto));

// nos retorna los valores de las llaves PARTE DERECHA
console.log(Object.values(producto));

// esto nos lo devuelve en pares o sea todo TODO
console.log(Object.entries(producto));