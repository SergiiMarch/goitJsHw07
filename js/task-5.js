function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  divEl: document.querySelector(".widget"),
  spanEl: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", hundlerClick);

function hundlerClick(e) {
  const rendomColor = getRandomHexColor();
  if (refs.button) {
    refs.body.style.backgroundColor = rendomColor;
    refs.spanEl.textContent = rendomColor;
  }
}
