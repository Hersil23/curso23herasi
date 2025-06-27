let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let operador = prompt("Ingrese el operador (suma, resta, multiplicación o división):").toLowerCase();

function calculadora(numero1, numero2, operacion) { 
  if (operacion === "suma") {
    return numero1 + numero2;
  } else if (operacion === "resta") {
    return numero1 - numero2;
    } else if (operacion === "multiplicación" || operacion === "multiplicacion") {
      return numero1 * numero2;
    } else if (operacion === "división" || operacion === "division") {
      if (numero2 === 0) {
        return "Error: División por cero";
      }
      return numero1 / numero2;
    } else {
      return "Operador no válido";
    }
  }