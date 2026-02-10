const productos = [
  {
    id: 1,
    nombre: "Laptop Gaming",
    categoria: "electronica",
    precio: 1299.99,
    stock: 15,
    rating: 4.7,
    descuento: 0.15,
    enOferta: true,
    caracteristicas: ["RTX 4070", "32GB RAM", "1TB SSD"]
  },
  {
    id: 2,
    nombre: "Smartphone Pro",
    categoria: "electronica",
    precio: 899.99,
    stock: 0,
    rating: 4.5,
    descuento: 0,
    enOferta: false,
    caracteristicas: ["6.7\" AMOLED", "256GB", "Cámara 50MP"]
  },
  {
    id: 3,
    nombre: "Auriculares Bluetooth",
    categoria: "accesorios",
    precio: 129.99,
    stock: 45,
    rating: 4.2,
    descuento: 0.20,
    enOferta: true,
    caracteristicas: ["Cancelación ruido", "30h batería", "USB-C"]
  },
  {
    id: 4,
    nombre: "Monitor 4K",
    categoria: "electronica",
    precio: 499.99,
    stock: 8,
    rating: 4.8,
    descuento: 0.10,
    enOferta: true,
    caracteristicas: ["27 pulgadas", "144Hz", "HDR"]
  },
  {
    id: 5,
    nombre: "Teclado Mecánico",
    categoria: "accesorios",
    precio: 89.99,
    stock: 32,
    rating: 4.4,
    descuento: 0,
    enOferta: false,
    caracteristicas: ["RGB", "Switches Red", "USB-C"]
  },
  {
    id: 6,
    nombre: "Mouse Gaming",
    categoria: "accesorios",
    precio: 59.99,
    stock: 50,
    rating: 4.6,
    descuento: 0.25,
    enOferta: true,
    caracteristicas: ["25K DPI", "8 botones", "Wireless"]
  }
];

// Filtrar por categoría

// Crea una función que filtre productos por categoría
const filtrarPorCategoria = (producto, categoria) =>
        productos.filter(producto => producto.categoria === categoria);

// Prueba
const electronicos = filtrarPorCategoria(productos, "electronica");
console.log(`Electrónicos: ${electronicos.length} productos`);

// Filtrar productos en oferta

// Arrow function con return implícito
const obtenerOfertas = productos =>
    productos.filter(producto => producto.enOferta);

// Prueba
const ofertas = obtenerOfertas(productos);
console.log(`Productos en oferta: ${ofertas.length}`);

// Filtrar productos con stock
const filtrarConStock = productos =>
    productos.filter(producto => producto.stock > 0);

// Prueba
const disponibles = filtrarConStock(productos);
console.log(`Productos disponibles: ${disponibles.length}`);

// Extraer características únicas
const obtenerCaracteristicasUnicas = productos => {
    const todasCarateristicas = productos.flatMap(p => p.caracteristicas);
    return [...new Set(todasCarateristicas)];
}

// Prueba
const caracteristicasUnicas = obtenerCaracteristicasUnicas(productos);
console.log("Características únicas:", caracteristicasUnicas);