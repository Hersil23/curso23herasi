const ChangeText = document.querySelector("#ChangeTextboton");
const ChangeColor = document.querySelector("#ChangeColorboton");
const lista = document.querySelector("#lista");

// boton que cambia su texto
ChangeText.addEventListener("click", () => {
  ChangeText.textContent = "Me han cambiado el texto";
});

// boton que cambia su color
ChangeColor.addEventListener("click", () => {
  const color = "#26c6da";
  ChangeColor.style.backgroundColor = color;
  ChangeColor.style.color = "#000";
  ChangeColor.textContent = "Me han cambiado el color";
  ChangeColor.style.border = "2px solid #000";
});

// boton que añade un elemento a la lista
addElement.addEventListener("click", () => {
  const newElement = document.createElement("li");
  newElement.textContent = "Soy el nuevo elemento agegado a la lista";
  lista.appendChild(newElement);
});