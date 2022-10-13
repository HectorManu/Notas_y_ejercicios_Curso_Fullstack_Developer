// métodos de propiedad del 09 

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: (id) =>  console.log(`Borrando canción con id: ${id}`),
    crearPlaylist: (nombre) => console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: (nombre)=> console.log(`Reproduciendo la Playlist ${nombre}`),

    set nuevaCancion (cancion){
        this.cancion = cancion;
        console.log(`Añadiendo $(cancion)`);
    },

    get obtenerCancion (cancion){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Enter sandman';
reproductor.obtenerCancion;

