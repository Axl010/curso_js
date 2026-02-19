// 📦 Destructuring de Objetos

// ❌ Forma tradicional
const usuario1 = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
const nombre1 = usuario1.nombre;
const edad1 = usuario1.edad;
const ciudad1 = usuario1.ciudad;

// ✅ Con destructuring
const usuario = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
const {nombre, edad, ciudad} = usuario;

console.log(nombre); // "Ana"
console.log(edad);   // 25
console.log(ciudad); // "Madrid"

// ✅ Asignar a variable con diferente nombre
const { nombre: nombreUsuario, edad: años } = usuario;

console.log(nombreUsuario); // "Ana"
console.log(años);         // 25

// Valores por defecto
// const { nombre, edad = 18, ciudad = "Desconocida" } = usuario;

// 📋 Destructuring de Arrays

const colores = ["rojo", "verde", "azul"];

// ❌ Tradicional
const primero = colores[0];
const segundo = colores[1];
const tercero = colores[2];

// ✅ Con destructuring
const [primerColor, segundoColor, tercerColor] = colores;

console.log(primero);  // "rojo"
console.log(segundo);  // "verde"
console.log(tercero);  // "azul"

// Omitir elementos
const datos = ["Ana", "ana@email.com", "Madrid", 25, "España"];

const [nombreDato, ,ciudadDato] = datos;

console.log("--- Destructuring con Arrays ---");
console.log(nombreDato); // "Ana"
console.log(ciudadDato); // "Madrid"

console.log("Intercambiar variables (swap)");

// ❌ Forma tradicional (necesita variable temporal)
let a = 1;
let b = 2;
let temp = a;
a = b;
b = temp;

// ✅ Con destructuring
let ad = 1;
let bd = 2;
[ad, bd] = [bd, ad];

console.log(ad); // 2
console.log(bd); // 1

// Parámetros de funciones
function mostrarUsuario({ nombre, edad, ciudad }) {
  console.log("Destructuring en parámetros:");
  console.log(nombre);
  console.log(edad);
  console.log(ciudad);
}

mostrarUsuario({ nombre: "Ana", edad: 25 });

console.log("------ Destructuring en funciones flecha ------");
const mostrarUsuario2 = ({ nombre, edad}) =>
  `${nombre} tiene ${edad} años`;

const usuariodest = {nomrbe: "Ana", edad: 25};
console.log(mostrarUsuario2(usuariodest));
