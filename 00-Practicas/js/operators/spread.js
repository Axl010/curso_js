console.log("---- Forma antigua (propenso a errores ----");
const original = [1,2,3];
const copia = original;     // ¡No es una copia! Es la misma referencia
copia.push(4);
console.log(original);      // [1, 2, 3, 4] ¡Se modificó el original!

console.log("----- Con spread copia real ----");
const original_spread = [1,2,3];
const copia_spread = [...original];     // Copia independiente
copia_spread.push(4);
console.log(original);                  // [1, 2, 3]
console.log(copia);                     // [1, 2, 3, 4]

console.log("---- Sobrescribir propiedades ----");

const usuarioBase = {
    nombre: "Invitado",
    edad: 18,
    rol: "usuario"
};

// ❌ Orden incorrecto: la base sobrescribe
const usuarioError = {
    ...usuarioBase,
    nombre: "Ana",
    edad: 25,
}
console.log(usuarioError);
// { nombre: "Ana", edad: 25, rol: "usuario" } ¡Funciona!
// (las propiedades posteriores sobrescriben)

// ✅ Orden correcto: las nuevas propiedades al final
const usuarioCorrecto = {
    ...usuarioBase,
    nombre: "Ana",    // Sobrescribe
    edad: 25,         // Sobrescribe
    activo: true      // Nueva propiedad
};

// ⚠️ Si pones el spread después, no sobrescribe
const usuarioRaro = {
    nombre: "Ana",
    edad: 25,
    ...usuarioBase,
}
console.log(usuarioBase);
// { nombre: "Invitado", edad: 18, rol: "usuario" }

console.log("---- Eliminar propiedades (inmutabilidad) ----");

const usuario = {
  nombre: "Ana",
  edad: 25,
  password: "secreta",
  email: "ana@email.com"
};

// ✅ Crear nuevo objeto sin la propiedad
// PASO 1: Extrae 'password' en una variable
// PASO 2: El RESTO (todo lo que NO se extrajo) va a 'usuarioSinPassword'
const {password, ...usuarioSinPassword} = usuario;
console.log(usuarioSinPassword);
// { nombre: "Ana", edad: 25, email: "ana@email.com" }

// Eliminar múltiples propiedades
const { password1, email, ...usuarioPublico } = usuario;
console.log(usuarioPublico);
// { nombre: "Ana", edad: 25 }