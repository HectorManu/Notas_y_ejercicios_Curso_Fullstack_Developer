// diferencias entre los tipo s de funciones

// DECLARACIÓN DE FUNCIÓN (FUNTION DECLRATION)

sumar();// esto sí se puede y es la DIFERENCIA CON LA EXPRECIÓN DE FUNCIÓN 
function sumar() {
    console.log(2+2);
}

// ALGO IMPORTANTE ES MANDAR A LLAMAR LA FUNCIÓN

sumar();

// expresión de función (funtionexpression)

// sumar2(); eso no se puede porque es una declaración de función por lo que al momenot de llamarla antes pues lo que sucede es que no está definida y aquí se muere
const sumar2 =function () {
    console.log(3+6);
}
sumar2();