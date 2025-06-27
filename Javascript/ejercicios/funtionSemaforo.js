let numero = parseInt(prompt("Ingrese un número del 1 al 3 para el semáforo"));

function semaforo(numero) {
    
  if (numero < 1 || numero > 3) {
    console.log("Número no válido. Debe ser entre 1 y 3.");
  } else if (numero === 1) {
    console.log("Rojo, detente");
  } else if (numero === 2) {
    console.log("Amarillo, precaución");
  } else if (numero === 3) {
    console.log("Verde, avanza");
  }
}

console.log(semaforo(numero)); // Llamada a la función con el número ingresado