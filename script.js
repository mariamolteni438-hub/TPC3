const moods = document.querySelectorAll(".mood");
const lista = document.getElementById("lista");
const limpiarBtn = document.getElementById("limpiar");

// Cargar historial guardado
let historial = JSON.parse(localStorage.getItem("historial")) || [];
actualizarHistorial();

moods.forEach((mood) => {
  mood.addEventListener("click", () => {
    historial.push(mood.textContent);
    localStorage.setItem("historial", JSON.stringify(historial));
    actualizarHistorial();
  });
});

limpiarBtn.addEventListener("click", () => {
  historial = [];
  localStorage.removeItem("historial");
  actualizarHistorial();
});

function actualizarHistorial() {
  lista.innerHTML = historial.map((m) => `<span>${m}</span>`).join("");
}
