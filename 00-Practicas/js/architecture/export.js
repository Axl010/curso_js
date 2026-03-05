class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}

export default Usuario;

// También puede ser anónimo
// export default function() {
//     return 'Función por defecto';
// }

// Solo UN export default por archivo, pero múltiples export nombrados.