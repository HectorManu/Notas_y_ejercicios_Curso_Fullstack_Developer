const meses = ['enero','febrero','marzo'];

meses[0]= 'nuevo mes';//en const podrá ser modificado solo en arreglos a menos de ue seellemos
meses[3]= 'abril';//agregamos el que sigue y lo creamos 
meses[19]='este es curioso'//en java script no crea los demás si no que directamente crea el indice 04
console.table(meses);