function analizarTexto(texto){
    let chars = texto.length;
    let words = texto.split(" ").length;   
    let vocales = 0;
    let vocals = "aeiou";
    for (let i = 0; i < texto.length; i++) {        
        if(vocals.includes(texto[i])){
            vocales++;
        }
    }
    
    let consonantes = (chars-(words-1))-vocales; 
        
    return {
    caracteres: chars,
    palabras: words,
    vocales: vocales,
    consonantes: consonantes
    }
}

console.log(analizarTexto("hola mundo"));