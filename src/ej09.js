function validarPassword(password){     
    let numeros = "1234567890";
    let mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let n = 0;
    let myus = 0;
    for (let i = 0; i < password.length; i++) {
        if(numeros.includes(password[i])){
            n++;
        }   
        if(mayusculas.includes(password[i])){
            myus++;
        }        
    }

    if(n > 0 && myus > 0 && password.length >= 8){
        console.log("Password válida");
    }
    else{
        console.log("Password inválida");
    }
}


validarPassword("Holamundo123");