const producto = 'Monitor 20 Pulgadas';

// Repetear te va a permitir repetid una cadena de texto...


// Sí a repeat de pasas un número con punto decimal entonces este lo redeondea
const texto = ' En promoción'.repeat(3);

console.log(texto);
console.log(`${producto } ${texto} !!!`);

// Split, dividir un string 

const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programas';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript Moderno "
console.log(tweet.split('#'))
