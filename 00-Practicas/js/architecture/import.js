// Importar específicamente lo que necesitas
import { sumar, restar , PI } from './math.js';

// Con alias (evitar colisiones de nombres)
import { sumar as add, restar as subtract } from './math.js';

// Import todo (namespace import)
import * as matematicas from './math.js';

// Ejecuta el módulo, no importa valores
// import './styles.css';        // Webpack/Vite procesa el CSS
// import './polyfills.js';      // Agrega funcionalidad al navegador
// import 'bootstrap';           // Inicializa librería

// Útil cuando el módulo se auto-configura