// FILTER: Crea un NUEVO array con TODOS los elementos que CUMPLEN una condición.
const nuevoArray = array.filter((elemento, índice, arrayOriginal) => {
    return condición; // true = se incluye, false = se excluye
});

// FILTER - Seleccionar elementos
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(num => num % 2 === 0);
console.log(pares);

console.log("---- Filtrar productos por condición ----");

const productos = [
    { nombre: "Laptop", precio: 1000, stock: 5, categoria: "electronica" },
    { nombre: "Mouse", precio: 25, stock: 0, categoria: "accesorios" },
    { nombre: "Monitor", precio: 300, stock: 3, categoria: "electronica" },
    { nombre: "Teclado", precio: 80, stock: 0, categoria: "accesorios" }
];

console.log("Productos disponibles");
const disponibles = productos.filter(p => p.stock > 0);
console.log(disponibles); // [Laptop, Monitor]

console.log("Productos baratos < 100");
const baratos = productos.filter(p => p.precio < 100);
console.log(baratos);

console.log("Buscar/búsqueda dinámica");
const usuarios = [
    { nombre: "Ana García", email: "ana@gmail.com", activo: true },
    { nombre: "Carlos López", email: "carlos@yahoo.com", activo: false },
    { nombre: "Beatriz Ruiz", email: "beatriz@gmail.com", activo: true }
  ];

// Buscar por texto
const buscarUsuarios = (texto) => {
    const busqueda = texto.toLowerCase();
    return usuarios.filter(usuario => 
        usuario.nombre.toLowerCase().includes(busqueda) ||
        usuario.email.toLowerCase().includes(busqueda)
    );
};

console.log(buscarUsuarios("carlos"));
// [Ana, Beatriz] (tienen email @gmail)

console.log("Filtrar valores únicos");
const numeros2 = [1, 2, 2, 3, 3, 3, 4, 5, 5];

const unicos = numeros2.filter((valor, indice, self) => 
    self.indexOf(valor) === indice
);
console.log(unicos); // [1, 2, 3, 4, 5]

// Iteración 1: valor=1, índice=0 → indexOf(1)=0 → 0===0 ✅ → incluye 1 (primer 1)
// Iteración 2: valor=2, índice=1 → indexOf(2)=1 → 1===1 ✅ → incluye 2 (primer 2)
// Iteración 3: valor=2, índice=2 → indexOf(2)=1 → 1===2 ❌ → excluye 2 (segundo 2)
// Iteración 4: valor=3, índice=3 → indexOf(3)=3 → 3===3 ✅ → incluye 3 (primer 3)
// Iteración 5: valor=3, índice=4 → indexOf(3)=3 → 3===4 ❌ → excluye 3 (segundo 3)