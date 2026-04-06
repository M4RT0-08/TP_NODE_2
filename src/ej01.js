import fs from 'fs';

const contenido = fs.readFileSync('./src/productos.json', 'utf-8');

const productos = JSON.parse(contenido);

productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});