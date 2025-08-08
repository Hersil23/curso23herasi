/*
  Crea un programa que te pida tu nombre, correo, contraseña.

  Guarda una cookie que guarde (nombre y correo) por 7 dias

  Además, guarda los mismos datos en el localStorage.
*/
function guardarDatos() {
  // Pedimos los datos al usuario
  let nombre = prompt("Introduce tu nombre:");
  let correo = prompt("Introduce tu correo:");
  let contrasena = prompt("Introduce tu contraseña:");

  // Configuración de la fecha de expiración para las cookies (7 días)
  let dias = 7;
  let fechaExpiracion = new Date();
  fechaExpiracion.setTime(fechaExpiracion.getTime() + (dias * 24 * 60 * 60 * 1000));

  // Guardamos las cookies nombre y correo por separado
  document.cookie = `nombre=${encodeURIComponent(nombre)}; expires=${fechaExpiracion.toUTCString()}; path=/`;
  document.cookie = `correo=${encodeURIComponent(correo)}; expires=${fechaExpiracion.toUTCString()}; path=/`;

  // Guardamos los mismos datos en localStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("correo", correo);
  localStorage.setItem("contrasena", contrasena);  // No recomendado por seguridad

  // Mensaje de confirmación al usuario
  alert("Datos guardados correctamente.");
}

// Ejecutamos la función para pedir y guardar datos
guardarDatos();
