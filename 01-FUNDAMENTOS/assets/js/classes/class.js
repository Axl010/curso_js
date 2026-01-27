class Persona {
    nombre = '';
    codigo = '';

    constructor(nombre = 'Sin Nombre', codigo = 'Sin Código') {
        this.nombre = nombre;
        this.codigo = codigo;
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman');
console.log(spiderman);