function saludar( nombre ) {
    console.log(arguments); // Imprime los argumos enviados a la funcion
    console.log('Hola ' + nombre);
}

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const funcionFlecha = (nombre) => {
    console.log('Hola ' + nombre);
}

saludar ('Fernando', 40, true);
funcionFlecha('Pedro');

console.warn('---------------- ProTips --------------');

const imprimeArgumentos = (edad, ...args) => { // ... Recibe todos los argumentos
    // console.log({edad,args});
    return args;
}

const [casado, nombre] = imprimeArgumentos(10, true, 'Fernando');
console.log({casado, nombre});

const {apellido:nuevoApellido} = crearPersona('Fernando', 'Herrera'); // Cambiar nombre de la variable
console.log({nuevoApellido});


console.warn('------------Dividir Valores del array -----------');
const frutas = ['Manzana', 'Pera', 'Uva'];
// const otrasFrutas = [...frutas];
const otrasFrutas = frutas.slice();
otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas});