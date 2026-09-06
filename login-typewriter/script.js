const paper = document.getElementById("typedPaper");
const form = document.getElementById("loginForm");
const inputs = form.querySelectorAll("input");
const keyEls = [...document.querySelectorAll("#keys [data-key]")];

function pressKey(char) {
  const upper = char.toUpperCase();
  const match =
    keyEls.find((el) => el.dataset.key === upper) ||
    (char === " " ? keyEls.find((el) => el.dataset.key === " ") : null);

  if (!match) return;

  match.classList.add("pressed");
  setTimeout(() => match.classList.remove("pressed"), 120);
}

function updatePaper() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const masked = "•".repeat(pass.length);
  const line = [user, masked].filter(Boolean).join(" / ");
  paper.innerHTML = `${escapeHtml(line)}<span class="cursor">|</span>`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

inputs.forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key.length === 1) pressKey(e.key);
  });
  input.addEventListener("input", updatePaper);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button");
  btn.classList.add("struck");
  paper.innerHTML = `RETURN — welcome, ${escapeHtml(
    document.getElementById("username").value || "stranger"
  )}<span class="cursor">|</span>`;
  setTimeout(() => btn.classList.remove("struck"), 200);
});
