// Anatomía de try/catch/finally
try {
    // Código "riesgoso" que PUEDE fallar
    // Si todo va bien, se ejecuta línea por línea
    
} catch (error) {
    // Se ejecuta SOLO si ocurre un error en try
    // El parámetro 'error' contiene información del fallo
    
} finally {
    // Se ejecuta SIEMPRE, haya error o no
    // Útil para limpieza (cerrar conexiones, etc.)
}

async function cargarDashboardCompleto() {
    const dashboard = {
        usuario: null,
        notificaciones: [],
        estadisticas: null,
        errores: []
    };
    
    // Cargamos cada sección independientemente
    // Si una falla, las demás siguen funcionando
    
    try {
        dashboard.usuario = await cargarPerfil();
    } catch (e) {async function cargarDashboardCompleto() {
        const dashboard = {
            usuario: null,
            notificaciones: [],
            estadisticas: null,
            errores: []
        };
        
        // Cargamos cada sección independientemente
        // Si una falla, las demás siguen funcionando
        
        try {
            dashboard.usuario = await cargarPerfil();
        } catch (e) {
            dashboard.errores.push('No se pudo cargar el perfil');
        }
        
        try {
            dashboard.notificaciones = await cargarNotificaciones();
        } catch (e) {
            dashboard.errores.push('Notificaciones no disponibles');
        }
        
        try {
            dashboard.estadisticas = await cargarStats();
        } catch (e) {
            dashboard.errores.push('Estadísticas en mantenimiento');
        }
        
        return dashboard; // Siempre retorna algo útil
    }
        dashboard.errores.push('No se pudo cargar el perfil');
    }
    
    try {
        dashboard.notificaciones = await cargarNotificaciones();
    } catch (e) {
        dashboard.errores.push('Notificaciones no disponibles');
    }
    
    try {
        dashboard.estadisticas = await cargarStats();
    } catch (e) {
        dashboard.errores.push('Estadísticas en mantenimiento');
    }
    
    return dashboard; // Siempre retorna algo útil
}