// Funciones a arrow functions:
function sumarArrays(arr1, arr2) {
  return arr1.map(function(num, index) {
    return num + arr2[index];
  });
}

function filtrarPares(numeros) {
  return numeros.filter(function(num) {
    return num % 2 === 0;
  });
}

// Solución:
const sumarArrays2 = (arr1, arr2) => 
  arr1.map((num, index) => num + arr2[index]);

const filtrarPares2 = numeros => 
  numeros.filter(num => num % 2 === 0);