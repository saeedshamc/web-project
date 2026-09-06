const body = document.body;
const power = document.getElementById("power");
const form = document.getElementById("loginForm");

let lit = false;

power.addEventListener("click", () => {
  lit = !lit;
  body.setAttribute("data-lit", lit ? "true" : "false");
  power.setAttribute("aria-pressed", lit ? "true" : "false");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button");
  const prev = btn.textContent;
  btn.textContent = "Welcome In";
  setTimeout(() => {
    btn.textContent = prev;
  }, 1400);
});
