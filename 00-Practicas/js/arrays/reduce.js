// REDUCE - Ejecuta una función REDUCTORA sobre cada elemento, devolviendo un ÚNICO valor acumulado.
const array = [1];
const valorInicial = 0;
const nuevoAcumulador = []
const resultado = array.reduce((acumulador, elemento, índice, arrayOriginal) => {
    return nuevoAcumulador;
}, valorInicial);

// Ejemplos Básicos
const numeros = [1, 2, 3, 4, 5];

// ❌ Tradicional
// let suma = 0;
// for (let i = 0; i < numeros.length; i++) {
//   suma += numeros[i];
// }

const suma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);
console.log(suma); // 15

// Con Reduce (el camino elegante)
const sumaNum = numeros.reduce((acumulador, numero) => {
  console.log(`Acumulador: ${acumulador}, Número: ${numero}`);
  return acumulador + numero;
}, 0)

console.log("Sin valor inicial (usa primer elemento como acumulador");
const sumaSinInicial = numeros.reduce((acc, num) => acc + num);
console.log(sumaSinInicial);

console.log("Calcular total del carrito");
const carrito = [
  { producto: "Laptop", precio: 1000, cantidad: 1 },
  { producto: "Mouse", precio: 25, cantidad: 2 },
  { producto: "Teclado", precio: 80, cantidad: 1 }
];

const total = carrito.reduce((acumulador, item) => {
  return acumulador + (item.precio * item.cantidad);
}, 0);

console.log(`Total: $${total}`); // Total: $1130

// Versión ultra concisa
// const total = carrito.reduce((acc, {precio, cantidad}) => 
//   acc + (precio * cantidad), 0
// );

console.log("Encontrar máximo/mínimo");
const ventas = [
  { vendedor: "Ana", monto: 1200 },
  { vendedor: "Carlos", monto: 800 },
  { vendedor: "Beatriz", monto: 1500 },
  { vendedor: "David", monto: 950 }
];

// Venta Maxima
const ventaMaxima = ventas.reduce((max, venta) => 
  venta.monto > max.monto ? venta : max
);
console.log(ventaMaxima); // { vendedor: "Beatriz", monto: 1500 }

// También funciona para arrays simples
const numMaximo = numeros.reduce((max, num) => num > max ? num : max);
console.log(numMaximo); // 20

// EJERCICIOS PRÁCTICOS
const estudiantes = [
  { nombre: "Ana", notas: [85, 90, 78] },
  { nombre: "Carlos", notas: [92, 88, 95] },
  { nombre: "Beatriz", notas: [76, 85, 89] }
];

// Objetivo: Obtener promedio de cada estudiante y aprobados (>= 80)
const resultadoEstudiante = estudiantes.map(est => ({
  nombre: est.nombre,
  promedio: est.notas.reduce((sum, n) => sum + n, 0) / est.notas.length
})).filter(est => est.promedio >= 83.5);

console.log(resultadoEstudiante);

console.log("Promedio");
const notas = [8, 9, 7, 10, 6];
const promedio = notas.reduce((suma, nota) => suma + nota, 0) / notas.length;
console.log(promedio);
