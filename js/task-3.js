const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

inputEl.addEventListener("input", handlerInput);

function handlerInput(e) {
  inputEl.value = (spanEl.textContent = inputEl.value.trim()) || "Anonymous";
}
