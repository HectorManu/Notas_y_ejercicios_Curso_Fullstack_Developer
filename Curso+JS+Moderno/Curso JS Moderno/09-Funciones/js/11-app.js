// los arrow funtion REVOLUCIONO JAVASCRIPT

// esta es la nueva forma de declarar funciones

const aprendiendo = function (tecnologia,tecnologia2) {
    console.log(`Aprendiendo JavaScript${tecnologia} y ${tecnologia2}`);
}

aprendiendo('JavaScript','Node.js');

// si es una sola linea no faltan las llaves y así es implicito el return 
const aprendiendo2_1 = (tecnologia,tecnologia2) => `Aprendiendo JavaScript${tecnologia} y ${tecnologia2}`;
// tiene implicito el return
console.log(aprendiendo2_1('javaScript','Node.js'));



