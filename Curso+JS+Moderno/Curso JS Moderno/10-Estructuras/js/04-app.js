const dinero = 330;

const totalApagar= 500;

const tarjeta = true;

const cheque = false;

if(dinero >= totalApagar) console.log(`si podemos pagar`);
else if (tarjeta) console.log(`si puede pagar porque tengo la tarjeta`);
else console.log(`Fondos insuficientes`)