/*
  Regex (Regular expressions)
  Las expresiones regulares son patrones utilizados para buscar y manipular texto.
  Son muy útiles para validar formatos, buscar coincidencias, reemplazar texto, etc.
*/

let nombre = "Juan Pérez";
o// /patron/modificador
/*
  ^      -> Inicio de la cadena
  $      -> Fin de la cadena
  []      -> Conjunto de caracteres
  {n}   -> Cantidad exacta de repeticiones
  {n,}  -> Mínimo n repeticiones
  {n,m} -> Entre n y m repeticiones
  +    -> Una o más repeticiones
  *    -> Cero o más repeticiones
  ?    -> Cero o una repetición
  \d   -> Dígitos (0-9)
  \w   -> Caracteres alfanuméricos (letras, números y guiones bajos)
  \s   -> Espacios en blanco
  \D   -> No dígitos
  \W   -> No caracteres alfanuméricos
  \S   -> No espacios en blanco
  .    -> Cualquier carácter excepto saltos de línea
  |    -> Alternativa (OR)
  \b   -> Límite de palabra
  \B   -> No límite de palabra
  modificadores:
  g    -> Búsqueda global (todas las coincidencias)
  i   -> Ignorar mayúsculas y minúsculas
*/
let regexNombre = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

/*
  Busca expresiones regulares para validar
  - Una cedula
  - Un correo
  - Una contraseña
*/
let regexCedula = /^\d{3}-\d{7}-\d{1}$/;
let regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regexContrasena = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// Validar nombre
if (regexNombre.test(nombre))
  