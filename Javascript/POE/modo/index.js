document.getElementById("modo").addEventListener("click", (event) => {
  let lightStyle = "background-color: white; color: black;";
  let darkStyle = "background-color: black; color: white;";

  if (document.body.style.backgroundColor === "black") {
    document.body.style = lightStyle;
    document.getElementById("modo").innerText = "🌖";
  } else {
    document.body.style = darkStyle;
    document.getElementById("modo").innerText = "☀️";
  }
});
