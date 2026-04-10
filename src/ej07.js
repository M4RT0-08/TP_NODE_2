let contador = 0;

const intervalo = setInterval(() => {
  contador++;
  console.log(contador);

  if (contador === 10) {
    clearInterval(intervalo);
    console.log("Fin del contador");
  }
}, 1000);