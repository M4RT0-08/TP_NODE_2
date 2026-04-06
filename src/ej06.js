import fs from 'fs';

const contenido = fs.readFileSync('./src/productos.json', 'utf-8');
const productosJson = JSON.parse(contenido);

let csv = "nombre,precio\n";

productosJson.forEach(p => {
    csv += `${p.nombre},${p.precio}\n`;
});

fs.writeFileSync('./src/productos.csv', csv);
