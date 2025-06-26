//Esto es un comentario de una línea
/*
  Comentario de multiples
  líneas
*/

//Variables
/*
  Las variables son espacios de memoria que almacenan un valor.
*/
// Declaración de una variable
let nombre = "Juan"; // Variable
console.log(nombre); // Imprime "Juan"
// Reasignación de una variable
nombre = "Pedro"; // Reasignación
console.log(nombre); // Imprime "Pedro"

// Tipos de datos
let number = 42; // Número
let float = 3.14; // Número de punto flotante
let string = "Hola, mundo"; // Cadena de texto
let boolean = true; // Booleano (true/false)
let array = ["pera", "manzana", "uva"]; // Array (lista)
console.log(array); // Imprime ["pera", "manzana", "uva"]
console.log(array[0]); // Imprime "pera" (primer elemento del array)
let nulo = null; // Nulo (sin valor)
let indefinido; // Indefinido (sin asignar)
let objeto = { nombre: "Juan", edad: 30 }; // Objeto
console.log(objeto); // Imprime { nombre: "Juan", edad: 30 }
console.log(objeto.nombre); // Imprime "Juan" (acceso a una propiedad del objeto)


let suma_numeros = 5 + 3; // Suma
let suma_string = "a10232!.;--''''-" + "2"; // Resta ()

//Practica
let prueba = "Pedro";
prueba = 23;
prueba = [1,2,3];
console.log(prueba);

console.log(prueba[1])

//operadores aritmeticos
let suma = 5 + 3; // Suma
let resta = 5 - 3; // Resta 
let multiplicacion = 5 * 3; // Multiplicación
let division = 5 / 3; // División
let modulo = 5 % 3; // Módulo (resto de la división)
let potencia = 5 ** 3; // Potencia (5 elevado a la 3ra potencia)
console.log(suma); // Imprime 8 
console.log(resta); // Imprime 2
console.log(multiplicacion); // Imprime 15
console.log(division); // Imprime 1.6666666666666667
console.log(modulo); // Imprime 2
console.log(potencia); // Imprime 125


// Operadores comparativos
/*
  Los operadores comparativos son utilizados para comparar valores y devuelven un booleano (true/false).
  - Igualdad: ==
  - Desigualdad: !=
  - Igualdad estricta: ===
  - Desigualdad estricta: !==
  - Mayor que: >
  - Menor que: <
  - Mayor o igual que: >=
  - Menor o igual que: <=
*/

let igualdad = 5 == "5"; // Igualdad (true, porque el valor es el mismo)
let desigualdad = 5 != "5"; // Desigualdad (false, porque el valor es el mismo)
let igualdadEstricta = 5 === "5"; // Igualdad estricta (false, porque el tipo es diferente)
let desigualdadEstricta = 5 !== "5"; // Desigualdad estricta (true, porque el tipo es diferente)
let mayorQue = 5 > 3; // Mayor que (true)
let menorQue = 5 < 3; // Menor que (false)
let mayorOIgualQue = 5 >= 5; // Mayor o igual que (true)

// Operadores lógicos
/*  Los operadores lógicos son utilizados para combinar expresiones booleanas.
    - AND: && 
    - OR: ||
    - NOT: !
*/
//Ejercicos para practicar la lógica

// (Facil)
var uno = !true || false; //False
var dos = false && !false; //False
var tres = true && !false; //True

//(Medio)
var cuatro = 5 === 5 || !true; //True
var cinco = !0 || 5 < 0; //True
var seis = 3 > 4 && !0; //False

//Avanzado
var siete = ((false || true) && !false && true) || (true && false); //True
var ocho = 6 === 3 + 3 && 9 / 3 >= 3; //True
var nueve = !!false || ("1" == 1 && !false === true); //True

//Hardcore
var diez = !!true === !!(5 >= 5); //True
var once = !(true && !true === !!(8 === 4 * 2)); //True

//Ultra-Hardcore
var doce = !(true && !true === !!(16 === 4 * 2 + 8)) !== false; //True

//Leyenda
var trece = !(
  (!(!(10 / 5 == "2") === false) != false) === 5 * 5 <= 100 / 4 &&
  !(1 + 1 !== 10 / 5) !== true
); //True

//Inmortal
var catorce = !!(
  (
    (10 % 3 != 1) ||
    (typeof("10" - 5) !== "number") ||
    !!([] && {})
  ) &&
  (
    (12 * 4 === "48") ||
    (7 <= "7" && "7" <= 7) ||
    (Boolean(0) === Boolean("0"))
  )
); //verdadero

console.log(catorce)

//Operadores de asignación
/*  

  Los operadores de asignación son utilizados para asignar valores a variables.
    - Asignación simple: =
    - Suma y asignación: +=
    - Resta y asignación: -=
    - Multiplicación y asignación: *=
    - División y asignación: /=
    - Módulo y asignación: %=
*/  

let a = 5; // Asignación simple
a += 3; // Suma y asignación (a = a + 3)  
console.log(a); // Imprime 8
a -= 2; // Resta y asignación (a = a - 2)
console.log(a); // Imprime 6    
a *= 2; // Multiplicación y asignación (a = a * 2)
console.log(a); // Imprime 12
a /= 3; // División y asignación (a = a / 3)
console.log(a); // Imprime 4
a %= 2; // Módulo y asignación (a = a % 2)
console.log(a); // Imprime 0

// switch
/*
  La estructura switch se utiliza para ejecutar diferentes bloques de código basados en el valor de una expresión.
  Es útil cuando se tienen múltiples condiciones que dependen del mismo valor.
*/

let dia = "1"; // Supongamos que 1 es Lunes, 2 es Martes, etc.
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día no válido");
}

// Estructura if-else
/*
  La estructura if-else se utiliza para ejecutar bloques de código basados en condiciones booleanas.
  Permite tomar decisiones en el flujo del programa.
*/

let edad = 18; // Supongamos que la edad es 18
if (edad < 0 || edad > 120) {
  console.log("Edad no válida");
} else if (edad < 18) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}

/*
  Ejercicios para practicar
  1. Pidele tres datos al usuario. Numero 1, Numero 2 y operacion (suma, resta, multiplicación o división). Crea
  un condicional que imprima el resultado de la operación entre los dos números.

  2. Pidele un numero al usuario y crea un condicional que imprima si el número es par o impar.

  3. Crea un código que le pida un numero entre 1 y 12 e imprima el nombre del mes correspondiente.
  (1 = enero, 2 = febrero, etc.). Si el número no está entre 1 y 12, imprime "Número no válido".
*/
// Ejercicio 1

let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:"); 
let operacion = prompt("Ingrese la operación (suma, resta, multiplicación o división):");

if (operacion === "suma") {
  alert ("El resultado de la suma es " + (numero1+numero2));
} else if (operacion === "resta") {
  alert("El resultado de la resta es " + (numero1-numero2));
} else if (operacion === "multiplicación") {
  alert("El resultado de la multiplicación es " + (numero1*numero2));
} else if (operacion === "división") {
  if (Number(numero2) !== 0) {
    alert("El resultado de la división es " + (numero1/numero2));
  } else {
    alert("No se puede dividir por cero");
  }
} else {
  alert("Operación no válida");
}