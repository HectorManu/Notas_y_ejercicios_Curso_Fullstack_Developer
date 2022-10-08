

const reproductor = {
    reproducir : function name(id) {// ESTE ES EL MÉTOD DE RPROPIEDAD
        console.log(`Reproduciendo canción...${id}`)
    },
    pausar : function pausar(params) {
        console.log('pausando...')
    },
    crearplaylist : function name(nombre) {
        console.log(`Creando la plylist ${nombre}`);
    },
    reproducirPlaylist : function name(nombre) {
        console.log(`Reproducinedo la playlist ${nombre}`);
    }
}

reproductor.reproducir(2000)

reproductor.pausar()

reproductor.borrar = function name(id) {
    console.log(`Borrando canción ...${id}`)
}

reproductor.borrar(2000)