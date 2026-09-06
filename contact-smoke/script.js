const form = document.getElementById("contactForm");
const fire = document.getElementById("fire");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fire.classList.remove("signaling");
  void fire.offsetWidth;
  fire.classList.add("signaling");
  const btn = form.querySelector("button");
  btn.textContent = "Signal Sent";
  setTimeout(() => {
    btn.textContent = "Send Smoke";
    form.reset();
    fire.classList.remove("signaling");
  }, 1800);
});
