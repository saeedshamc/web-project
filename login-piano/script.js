const keys = [...document.querySelectorAll(".key")];
const form = document.getElementById("loginForm");
const inputs = form.querySelectorAll("input");

function press(i) {
  const key = keys[i % keys.length];
  key.classList.add("pressed");
  setTimeout(() => key.classList.remove("pressed"), 120);
}

inputs.forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key.length === 1) press(e.key.charCodeAt(0));
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  keys.forEach((k, i) => setTimeout(() => press(i), i * 40));
  const btn = form.querySelector("button");
  btn.textContent = "Encore!";
  setTimeout(() => { btn.textContent = "Enter the Hall"; }, 1400);
});
