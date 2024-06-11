const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

inputEl.addEventListener("input", handlerInput);

function handlerInput(e) {
  const trimValue = inputEl.value.trim();
  spanEl.textContent = trimValue || "Anonimus";
}
