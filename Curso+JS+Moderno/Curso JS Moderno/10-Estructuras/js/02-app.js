// cuando deseamos que nuestro códio se ejecute en diferente orden

// las estructuras de control son para ver si se cumple una determinada condicion que peus nos ayudara

const puntaje = 100;

if (puntaje>=100) {//si esta condicion se cumple se eecuta lo que hay en estar llaves 
    console.log(`si es mayor o igual`)
}else console.log(`es menor de 100`);

if (puntaje!=100)console.log(`si es diferente`); else console.log(`si igual`);


if (puntaje == '100') {
    console.log(`son iguales`)
}else console.log(`NO SON IGUALES`)


if (puntaje === '100') {//un poperador estricto 
    console.log(`es igual`)
}else console.log(`no es igual`)

if (puntaje !== '100') {//un poperador estricto 
    console.log(`si es difernete`)
}else console.log(`no es igual`)