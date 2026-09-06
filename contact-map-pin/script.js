const map = document.getElementById("map");
const pin = document.getElementById("pin");
const form = document.getElementById("contactForm");
const hint = document.getElementById("hint");

map.addEventListener("click", (e) => {
  const rect = map.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  pin.style.setProperty("--x", `${x}%`);
  pin.style.setProperty("--y", `${y}%`);
  pin.classList.remove("dropped");
  void pin.offsetWidth;
  pin.classList.add("dropped");

  form.setAttribute("data-open", "true");
  hint.textContent = "Pin placed — fill in the form below.";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button[type='submit']");
  btn.textContent = "Location Shared";
  hint.textContent = "Thanks — we'll find our way to you.";
  setTimeout(() => {
    btn.textContent = "Send Coordinates";
    form.reset();
  }, 1600);
});
