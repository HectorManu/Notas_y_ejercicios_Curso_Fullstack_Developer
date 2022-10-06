iniciarapp();

function iniciarapp() {
    console.log('iniciando app...');
    segundafuncion();
}

function segundafuncion() {
    console.log('hola desde la segunda función papu');
    usuarioautenticado('hector');
}

function usuarioautenticado(usuario) {
    console.log('autenticando usuario --.. espere...');
    console.log(`Usuario auténticado exitosamente ${usuario}`); 
}