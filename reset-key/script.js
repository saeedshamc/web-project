const form = document.getElementById("resetForm");
const keyhole = document.getElementById("keyhole");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  keyhole.setAttribute("data-turned", "true");
  const btn = form.querySelector("button");
  btn.textContent = "Password Reset";
  setTimeout(() => {
    keyhole.setAttribute("data-turned", "false");
    btn.textContent = "Turn Key & Reset";
    form.reset();
  }, 1800);
});
