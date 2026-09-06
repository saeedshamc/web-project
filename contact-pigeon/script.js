const form = document.getElementById("contactForm");
const pigeon = document.getElementById("pigeon");
const hint = document.getElementById("hint");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("sent");
  pigeon.classList.remove("fly");
  void pigeon.offsetWidth;
  pigeon.classList.add("fly");
  hint.textContent = "Pigeon airborne — message delivered.";
  setTimeout(() => {
    form.reset();
    form.classList.remove("sent");
    pigeon.classList.remove("fly");
    hint.textContent = "Send — the pigeon flies across the sky.";
  }, 2000);
});
