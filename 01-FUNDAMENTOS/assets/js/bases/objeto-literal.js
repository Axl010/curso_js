let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    }
};

console.log(personaje);
console.log('Edad', personaje.edad);
console.log('Corrds', personaje.coords.lat);
console.log('No. Traje', personaje.trajes.length);
console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length - 1]);

// Agregar propiedad
personaje.casado = true;
console.log(personaje);

// ELiminar Propiedad
delete personaje.vivo;
console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Congelar objeto
Object.freeze(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});

const semana = {1:'Domingo', 2:'Lunes', 3:'Martes', 4:'Miercoles', 5:'Jueves', 6:'Viernes', 7:'Sabado'};
dia = 10;
console.log(semana[dia] || 'Dia no definido');