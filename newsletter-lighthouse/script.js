const form = document.getElementById("newsForm");
const body = document.body;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  body.setAttribute("data-beam", "true");
  const btn = form.querySelector("button");
  btn.textContent = "Beacon Lit";
  setTimeout(() => {
    body.setAttribute("data-beam", "false");
    btn.textContent = "Light the Beacon";
    form.reset();
  }, 3200);
});
