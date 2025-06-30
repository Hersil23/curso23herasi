
// Llamada a la función
holaMundo(); // Esto ejecuta la función y muestra "¡Hola, mundo!" en la consola
holaMundo(); // Puedes llamarla tantas veces como quieras

// Función con parámetros
/*
  Los parametros son variables que se pasan a una función para que pueda
*/
function saludar(nombre = "amigo") {
  console.log("¡Hola, " + nombre + "!");
}

// Llamada a la función con un argumento
saludar("Juan"); // Esto muestra "¡Hola, Juan!" en la consola
saludar("María"); // Esto muestra "¡Hola, María!" en la consola
saludar(); // Esto muestra "¡Hola, Pedro!" en la consola

// Función con multiples parámetros
function sumar(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}

sumar(10, 5); // Esto muestra 15 en la consola

/*
  Ejercicios para practicar funciones:
  1. Crea una función llamada semaforo que reciba un número del 1 al 3 y muestre un mensaje según el semáforo:
  - 1: "Rojo, detente"
  - 2: "Amarillo, precaución"
  - 3: "Verde, avanza"

  Ejecutala 3 veces con diferentes números, debes realizar validaciones para que al
  enviar un numero fuera del rango 1-3, se muestre un mensaje de error.

  2. Crea una función llamada calculadora que reciba dos números y un operador
  (suma, resta, multiplicación o división) y realice la operación correspondiente.
  - Si el operador no es válido, muestra un mensaje de error.
  Ejecutala 3 veces con diferentes números y operadores, debes realizar validaciones
*/

//Hoisting
/*
  El hoisting es un comportamiento de JavaScript donde las declaraciones de variables y funciones
  son elevadas al inicio de su contexto de ejecución. Esto significa que puedes llamar a una función
  antes de haberla declarado en el código.
*/

saludarHoisting("Juan"); // Esto funciona gracias al hoisting

function saludarHoisting(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

// Alcance (Scope)
/*
  El alcance se refiere a la visibilidad de las variables en diferentes partes del código.
  Hay dos tipos principales de alcance:
  - Alcance global: Las variables declaradas fuera de cualquier función son accesibles en todo el código.
  - Alcance local: Las variables declaradas dentro de una función solo son accesibles dentro de esa función.
*/

let 

if(true) {
  var variableGlobal = "Soy global"; // Esta variable es global
  let variableLocal = "Soy local"; // Esta variable es local
  const constante = "Soy constante"; // Esta constante es local
  console.log(variableGlobal, variableLocal, constante);
}

console.log(variableGlobal, variableLocal, constante);


//Funciones con retorno
/*
  Las funciones pueden devolver un valor utilizando la palabra clave `return`.
  Esto permite que la función produzca un resultado que puede ser utilizado posteriormente.
*/

function multiplicarConRetono(num1, num2) {
  return num1 * num2; // Devuelve el resultado de la multiplicación
}

console.log(multiplicarConRetono(5, 3)); // Esto muestra 15 en la consola

// Es muy distinto a

function multiplicarSinRetorno(num1, num2) {
  num1 * num2; // No devuelve nada, solo realiza la operación
}

console.log(multiplicarSinRetorno(5, 3)); // Esto muestra undefined en la consola