const dia = 1;
const horaActual = 11;

let horaApertura;
let mensaje;

// if (dia === 0 || dia ===6) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes[dia]) ? 9 : 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : 'Esta cerrado, hoy abrimos a las ${horaApertura}';
console.log({horaApertura, mensaje});


console.warn('---------------- Notas -----------------');
const nota = 50;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' : 'B';

console.log({nota, grado});