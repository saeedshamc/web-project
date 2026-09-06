const form = document.getElementById("contactForm");
const strip = document.getElementById("strip");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = form.message.value.trim().toUpperCase() || "MESSAGE";
  strip.textContent = "";
  const words = (msg + " STOP.").split(/\s+/);
  let i = 0;
  const tick = setInterval(() => {
    if (i >= words.length) {
      clearInterval(tick);
      return;
    }
    strip.textContent += (i ? " " : "") + words[i];
    i += 1;
  }, 120);
  setTimeout(() => form.reset(), 2200);
});
