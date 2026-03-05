// fetch es la API moderna del navegador para peticiones HTTP

let url = 'https://api.github.com/users/facebook';

fetch(url)
    .then(response => {
        console.log('Status:', response.status);     // 200
        console.log('OK?:', response.ok);            // true
        console.log('Headers:', response.headers);

        return response.json(); // Extraer JSON (retorna Promise)
    })
    .then(data => {
        console.log('Datos recibidos:', data.login);
    })
    .catch(error => {
        console.error('Error de red:', error.message);
    });

// Anatomía de la Response de Fetch
fetch(url)
    .then(response => {
        // Propiedades importantes
        response.status;      // 200, 404, 500, etc.
        response.statusText;  // "OK", "Not Found", etc.
        response.ok;          // true si status 200-299
        response.headers;     // Headers HTTP (Map-like)
        response.url;         // URL final (después de redirects)
        
        // Métodos para extraer body (¡solo puedes usar uno!)
        response.json();      // Parsear como JSON
        response.text();      // Como texto plano
        response.blob();      // Como Blob (imágenes, archivos)
        response.formData();  // Como FormData
        response.arrayBuffer(); // Como ArrayBuffer (binario)
});

// Método POST con JSON
async function crearUsuario(datos) {
    const response = await fetch('https://api.ejemplo.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token123'
        },
        body: JSON.stringify({
            nombre: datos.nombre,
            email: datos.email,
            edad: datos.edad
        })
    });

    if(!response.ok) throw new Error('Error al crear usuario');
    return await response.json();
}