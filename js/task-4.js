const formEl = document.querySelector(".login-form");
console.dir(formEl);

formEl.addEventListener("submit", handlerSabmit);

function handlerSabmit(e) {
  e.preventDefault();
  const form = e.target;
  const emailEl = e.target.elements.email.value.trim();
  const passwordEl = e.target.elements.password.value.trim();
  if (!emailEl || !passwordEl) {
    return alert("'All form fields must be filled in'");
  }

  const formData = {
    email: emailEl,
    password: passwordEl,
  };

  console.log(formData);

  e.target.reset();
}
