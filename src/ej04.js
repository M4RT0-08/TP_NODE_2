process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
async function obtenerPais(pais) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${pais}?fields=name,capital,region,population`);
    const data = await res.json();

    const p = data[0];

    return {
        nombre: p.name.common,
        capital: p.capital?.[0],
        region: p.region,
        poblacion: p.population
    };
}

obtenerPais("argentina")
    .then(pais => console.log(pais))
    .catch(err => console.error(err));