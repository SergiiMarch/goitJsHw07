const refs = {
  divBoxes: document.getElementById("boxes"),
  inputEl: document.querySelector("#controls input[type='number']"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
};
console.log(refs.inputEl);

refs.btnCreate.addEventListener("click", handlerClickCreate);
refs.btnDestroy.addEventListener("click", handlerClickDestroy);

function handlerClickCreate(e) {
  const amount = parseInt(refs.inputEl.value);
  if (amount < 1 || amount > 100) {
    alert("Введено не коректні дані");
    return;
  }
  createBoxes(amount);
  refs.inputEl.value = "";
}

function onDestroyButtonClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.margin = "5px";
    box.style.backgroundColor = getRandomHexColor();
    refs.divBoxes.appendChild(box);
  }
}

function handlerClickDestroy() {}

console.dir(refs.btnCreate);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
