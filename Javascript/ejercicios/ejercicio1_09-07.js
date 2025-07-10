/*
  1. Crea una función que reciba un texto o parrafo y verifique si contiene alguna las siguientes malas palabras:
  - "tonto"
  - "chispas"
  - "recorcholis"
  - "rayos"
  - "caracoles"
  - "cielos"
  Si el texto contiene alguna de estas palabras, sustituye por "****" y retorna el texto modificado.
  Si no contiene ninguna, retorna el texto original.
*/


function cambiarPalabras(texto) {
  const palabrasProhibidas = ["tonto", "chispas", "recorcholis", "rayos", "caracoles", "cielos"];
  let textoNuevo = texto;
}
  for (const palabra of palabrasProhibidas)
    const palabrasEnMinusculas = palabraOriginal.toLowerCase();
    let textoEnMinusculas = textoModificado.toLowerCase();
    let indice= textoEnMinusculas.indexOf(palabrasEnMinusculas);


  
    
   

    // Iteramos mientras encontremos la palabra
    while (indice !== -1) {
      // Reemplazamos la porción del texto.
      // Primero tomamos la parte antes de la palabra,
      // luego añadimos los asteriscos,
      // y finalmente la parte después de la palabra.
      textoModificado = 
        textoModificado.substring(0, indice) + 
        "****" + 
        textoModificado.substring(indice + palabraOriginal.length);
      
      // Volvemos a buscar en el texto (que ahora tiene las ****) para la siguiente ocurrencia.
      // Es importante recalcular textoMinusculas después de cada reemplazo
      // para que las posiciones de las siguientes palabras sean correctas.
      textoMinusculas = textoModificado.toLowerCase();
      indice = textoMinusculas.indexOf(palabraEnMinusculas, indice + "****".length);
    }
  }

  return textoModificado;
}

// ---
// Ejemplos de uso:
// ---

const texto1 = "¡Qué Tonto soy! Me dieron chispas de alegría.";
const textoCensurado1 = censurarMalasPalabrasSinRegex(texto1);
console.log(textoCensurado1); // Salida: ¡Qué **** soy! Me dieron **** de alegría.

const texto2 = "Rayos, esto es un lío. ¡Por los cielos!";
const textoCensurado2 = censurarMalasPalabrasSinRegex(texto2);
console.log(textoCensurado2); // Salida: ****, esto es un lío. ¡Por los ****!

const texto3 = "Este es un párrafo sin malas palabras.";
const textoCensurado3 = censurarMalasPalabrasSinRegex(texto3);
console.log(textoCensurado3); // Salida: Este es un párrafo sin malas palabras.

const texto4 = "recorcholis, caracoles y más palabras. ¡caracoles de mar!";
const textoCensurado4 = censurarMalasPalabrasSinRegex(texto4);
console.log(textoCensurado4); // Salida: ****, **** y más palabras. ¡**** de mar!