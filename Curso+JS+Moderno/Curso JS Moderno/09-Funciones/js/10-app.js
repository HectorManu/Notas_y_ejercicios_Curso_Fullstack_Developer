// los arrow funtion REVOLUCIONO JAVASCRIPT

// esta es la nueva forma de declarar funciones

const aprendiendo = function (params) {
    console.log(`Aprendiendo JavaScript`);
}

// PARA LLEVARLA A UN ARROW FUNCIONT

const aprendiendo2 = () => /**aquí la fecha se transforma en en function  */ {
    console.log(`Aprendiendo JavaScript`);
}

// si es una sola linea no faltan las llaves y así es implicito el return 
const aprendiendo2_1 = () =>' `Aprendiendo JavaScript`';
// tiene implicito el return
console.log(aprendiendo2_1());

