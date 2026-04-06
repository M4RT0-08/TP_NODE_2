import fs from 'fs';

function agregarProducto(nombre, precio) {
    let productos = [];

    try {
        const contenido = fs.readFileSync('./src/productos.json', 'utf-8');
        productos = JSON.parse(contenido);
    } catch (error) {}

    productos.push({ nombre, precio });

    fs.writeFileSync('./src/productos.json', JSON.stringify(productos, null, 2));
}

agregarProducto("PC", 500);
console.log("Funciona");