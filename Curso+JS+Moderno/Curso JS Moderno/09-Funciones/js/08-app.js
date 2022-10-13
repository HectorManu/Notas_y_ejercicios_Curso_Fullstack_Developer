// función que devuelve cosas 

function sumar(a,b) {
    return a+b;
}

const resultado = sumar(2+2);

console.log(resultado);

// ejemplo más avanzado 

let total= 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 0.16;
}

total = agregarCarrito(300);
total = agregarCarrito(10);

const totalApagar = calcularImpuesto(total);

console.log(`el total a pagar es de ${totalApagar}`)

console.log(total)