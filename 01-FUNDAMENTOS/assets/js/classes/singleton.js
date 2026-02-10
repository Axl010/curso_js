class Singleton {

    static instancia; // undefined
    nombre = '';

    constructor(nombre = '') {

        if ( !!Singleton.instancia ) { // Si ya existe una instancia haz:
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        // return this; Por defecto del constructor de una clase
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');

console.log(`Nombre en la instancia es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia es: ${instancia3.nombre}`);