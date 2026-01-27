 let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
 console.log('Largo:', juegos.length);

 let primero = juegos[2 - 2];
 let ultimo = juegos[juegos.length - 1];
 console.log({primero, ultimo});

 juegos.forEach((elemento, indice, arr) => {
    console.log([elemento, indice, arr]);
 })

 // Ingresar al final
 let nuevaLogintud = juegos.push('F-Zero');
 console.log({nuevaLogintud, juegos});

  // Ingresar al inicio
 nuevaLogintud = juegos.unshift('Fire-Emblem');
 console.log({nuevaLogintud, juegos});

  // ELiminar la ultima posicion
 let juegoBorrado = juegos.pop();
 console.log({juegoBorrado, juegos});

 // Eliminar desde una posicion
 let juegosBorrados = juegos.splice(1,2);
 console.log({juegosBorrados, juegos});

 // Retornar posicion - Retorna -1 si no lo encuenta
 let metroidIndex = juegos.indexOf('Fire-Emblem');
 console.log({metroidIndex});