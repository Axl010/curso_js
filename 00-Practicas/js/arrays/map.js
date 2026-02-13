// MAP - Transformar cada elemento
console.log("---- Crea un NUEVO array aplicando una función a CADA elemento del array original. ----")
const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(num => num * 2);
console.log(dobles); // [2, 4, 6, 8, 10]

console.log("---- Transformar array de objetos ----");

const usuarios = [
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Carlos", edad: 30 },
    { id: 3, nombre: "Beatriz", edad: 28 }
];

// Extraer solo nombres
const nombres = usuarios.map(usuario => usuario.nombre);
console.log(nombres); // ["Ana", "Carlos", "Beatriz"]
  
// Crear nuevo formato
const usuariosFormateados = usuarios.map(usuario => ({
    nombreCompleto: usuario.nombre.toUpperCase(),
    esMayorEdad: usuario.edad >= 18,
    etiqueta: `Usuario-${usuario.id}`
}));
console.log(usuariosFormateados);

console.log("---- Calcular precios con impuestos ----");

const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 80 }
  ];
  
const IVA = 0.21;

const productosConIVA = productos.map(producto => ({
    ...producto,
    precionSinIVA: producto.precio,
    precioConIVA: producto.precio * (1 + IVA),
    precioFormateado: `$${(producto.precio * (1 + IVA)).toFixed(2)}`,
}));

console.log(productosConIVA[0]);
// { nombre: "Laptop", precio: 1000, precioSinIVA: 1000, 
//   precioConIVA: 1210, precioFormateado: "$1210.00" }



// Crea un NUEVO array aplicando una función a CADA elemento del array original.
// const nuevoArray = Array.map((elemento, indice, arrayOriginal) => {
//     return elementoTransformado;
// });