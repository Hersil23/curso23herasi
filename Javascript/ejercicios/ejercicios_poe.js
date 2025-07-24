const ChangeText = document.querySelector("#ChangeTextboton");
const ChangeColor = document.querySelector("#ChangeColorboton");

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