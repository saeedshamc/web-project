const bell = document.getElementById("bell");
const badge = document.getElementById("badge");
const form = document.getElementById("subForm");

bell.addEventListener("click", () => {
  bell.classList.remove("ring");
  void bell.offsetWidth;
  bell.classList.add("ring");
  badge.hidden = false;
  form.setAttribute("data-open", "true");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  badge.textContent = "✓";
  badge.style.background = "#3dff9a";
  const btn = form.querySelector("button[type='submit']");
  btn.textContent = "Subscribed";
  setTimeout(() => {
    form.reset();
    btn.textContent = "Enable Alerts";
    badge.hidden = true;
    badge.textContent = "1";
    badge.style.background = "";
    form.setAttribute("data-open", "false");
  }, 1600);
});
