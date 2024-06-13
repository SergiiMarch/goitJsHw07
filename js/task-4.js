const formEl = document.querySelector(".login-form");
console.dir(formEl);

formEl.addEventListener("submit", handlerSabmit);

function handlerSabmit(e) {
  e.preventDefault();
  const form = e.target;
  const emailEl = form.elements.email.value.trim();
  const passwordEl = form.elements.password.value.trim();
  if (!emailEl || !passwordEl) {
    return alert("'All form fields must be filled in'");
  }

  const formData = {
    email: emailEl,
    password: passwordEl,
  };

  console.log(formData);

  form.reset();
}
