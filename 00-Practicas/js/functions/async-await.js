// async — Declara una función asíncrona
// Poner async antes de una función la convierte automáticamente en una función que retorna una Promesa.

async function ejemplo() {
    console.log('Inicio');
    
    // await "pausa" aquí hasta que fetch termine
    const respuesta = await fetch('https://api.example.com/datos');
    const datos = await respuesta.json();
    
    console.log('Datos recibidos:', datos);
    // Solo continúa cuando datos esté listo
}

// await — Pausa la ejecución hasta que la Promesa se resuelva

async function miFuncion() {
    // Esta función SIEMPRE devuelve una Promesa
}

const miArrow = async () => {
    // También funciona con arrow functions
};

// Incluso en métodos de clase
class API {
    async obtenerDatos() {
        // ...
    }
}

// Múltiples llamadas independientes (Paralelo)

async function cargarDashboard() {
    // ❌ Mal: Secuencial (lento)
    // const user = await fetchUser();
    // const posts = await fetchPosts();  
    // const comments = await fetchComments();

    // ✅ Bien: Paralelo (rápido)
    const [user, posts, comments] = await Promise.all([
        fetchUser(),
        fetchPosts(),
        fetchComments();
    ]);

    return { user, posts, comments };
}

// Promise.all ejecuta todas las promesas simultáneamente.
// Solo usar await secuencial si una llamada depende del resultado de la anterior.