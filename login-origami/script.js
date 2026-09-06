const origami = document.getElementById("origami");
const foldBtn = document.getElementById("foldBtn");
const form = document.getElementById("loginForm");

let open = false;

foldBtn.addEventListener("click", () => {
  open = !open;
  origami.setAttribute("data-open", open ? "true" : "false");
  foldBtn.setAttribute("aria-expanded", open ? "true" : "false");
  foldBtn.textContent = open ? "Refold paper" : "Unfold paper";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button[type='submit']");
  btn.textContent = "Sealed";
  setTimeout(() => {
    btn.textContent = "Fold & Enter";
  }, 1400);
});
