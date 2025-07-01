// function HolaMundo() {
//   alert("¡Hola, mundo!");
// }

// // Llamada a la función
// HolaMundo(); // Esto ejecuta la función y muestra "¡Hola, mundo!" en la alerta
// HolaMundo(); // Puedes llamarla tantas veces como quieras

// // Función con parámetros
// function saludar(nombre = "amigo") {
// 	alert("¡Hola, " + nombre + "!");
// }

// // Llamada a la función con un argumento
// saludar("Herasi Silva");
// saludar("Kuan"); // Esto muestra "¡Hola, Kuan!" en la alerta

// funcion con multiples parámetros
/*
function sumar(mensaje = "La suma es igual a:", num1 = 0, num2 = 0) {
	alert(mensaje + " " + (num1 + num2));
}	

sumar("el:", 1500, 90); // Esto muestra "La suma es igual a: 1590" en la alerta

Ejercicios para practicar funciones:
  1. Crea una función llamada semaforo que reciba un número del 1 al 3 y muestre un mensaje según el semáforo:
  - 1: "Rojo, detente"
  - 2: "Amarillo, precaución"
  - 3: "Verde, avanza"

  Ejecutala 3 veces con diferentes números, debes realizar validaciones para que al
  enviar un numero fuera del rango 1-3, se muestre un mensaje de error.
*/
/*
function semaforo(numero) {
	if (numero === 1) {
		alert("Rojo, detente");
	} else if (numero === 2) {
		alert("Amarillo, precaución");
	} else if (numero === 3) {
		alert("Verde, avanza");
	} else {
		alert("Número fuera de rango");
	}
}
// pido datos al usuario
let numeroSemaforo = parseInt(prompt("Introduce un número del 1 al 3:"));
semaforo(numeroSemaforo);

// Llamadas a la función semaforo con diferentes números
/*

2. Crea una función llamada calculadora que reciba dos números y un operador
  (suma, resta, multiplicación o división) y realice la operación correspondiente.
  - Si el operador no es válido, muestra un mensaje de error.
  Ejecutala 3 veces con diferentes números y operadores, debes realizar validaciones
*/
/*
function calculadora(num1, num2, operador) {
	switch (operador) {
		case "suma":
			alert("La suma es: " + (num1 + num2));
			break;
		case "resta":
			alert("La resta es: " + (num1 - num2));
			break;
		case "multiplicacion":
			alert("La multiplicación es: " + (num1 * num2));
			break;
		case "division":
			if (num2 !== 0) {
				alert("La división es: " + (num1 / num2));
			} else {
				alert("Error: División por cero");
			}
			break;
		default:
			alert("Operador no válido");
	}
}

// pido al usuario introduzca valores para la calculadora
let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let operador = prompt("Introduce el operador (suma, resta, multiplicacion, division):");

// Llamadas a la función calculadora con diferentes números y operadores
calculadora(numero1, numero2, operador);
*/
 //Ejercicios de recursión

  //Nivel fácil:
 // 1. Crea una función recursiva que imprima los números del 0 // al 100.

function imprimirNumeros(numero = 0) {
  // Caso base: cuando el número supera 100, se detiene la recursión
  if (numero > 100) return;

  console.log(numero); // Imprime el número actual
  imprimirNumeros(numero + 1); // Llamada recursiva con el siguiente número
}

// Llamada inicial a la función
imprimirNumeros();


