// Anatomía de una Promise
const miPromise = new Promise((resolve, reject) => {
    // resolve: función para cumplir la promesa (éxito)
    // reject: función para rechazar la promesa (fallo)

    // Código asíncrono
    setTimeout(() => {
        const exit = Math.random() > 0.5;

        if(exito) {
            resolve('¡Operación exitosa!');
        } else {
            reject(new Error('Algo salió mal'));
        }
    }, 1000);
});

// Consumiendo Promises: .then() .catch() .finally()

fetch('https://api.github.com/users/facebook')
    .then(response => {
        // Se ejecuta si la Promise se cumple
        console.log('Respuesta recibida:', response.status);
        return response.json(); // Retorna OTRA Promise
    })
    .then(data => {
        // Encadenamos: esperamos el json()
        console-log('Datos:', data.login);
    })
    .catch(error => {
        // Se ejecuta si CUALQUIERA de las anteriores falla
        console.error('Error en la cadena:', error.message);
    })
    .finally(() => {
        // Siempre se ejecuta (limpieza)
        console.log('Petición finalizada');
    });


// Cargador de imágenes

function cargarImagen(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => resolve(img);    // Éxito: retornamos la imagen
        img.onerror = () => reject(new Error(`No se pudo cargar: ${src}`));

        img.src = src;
    })
}

// Uso
cargarImagen('https://ejemplo.com/foto.jpg')
    .then(imagen => {
        document.body.appendChild(imagen);
        console.log('Imagen cargada:', imagen.width, 'x', imagen.height);
    })
    .catch(error => {
        console.error(error.message);
        // Mostrar imagen de placeholder
    });