import fs from 'fs';

const contenido = fs.readFileSync('./src/productos.json', 'utf-8');

function buscarProducto(nombre){
    const productos = JSON.parse(contenido);
    let encontro = false;
    productos.forEach(producto => {
        if(producto.nombre == nombre){
            console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
            encontro = true;
        }
    });

    if(!encontro){
        console.log("Producto no encontrado");
    }
}

buscarProducto("PC");