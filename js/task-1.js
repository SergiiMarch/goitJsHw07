//Отримуємо DOM елемент та виводім в консоль кількість LI
const liEl = document.querySelectorAll("#categories .item");
console.log("Number of categories:", liEl.length);
const newArr = Array.from(liEl);
newArr.map((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("ul > li").length;
  console.log("Category:", title);
  console.log("Elements:", elements);
});
//ForEach перебераємо елемнт та виводимо в консоль заголовкі h2 та кількість ul>li
// liEl.forEach((item) => {
//   const title = item.querySelector("h2").textContent;
//   const elements = item.querySelectorAll("ul > li").length;
//   console.log("Category:", title);
//   console.log("Elements:", elements);
// });
