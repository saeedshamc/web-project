const temp = document.getElementById("temp");
const mercury = document.getElementById("mercury");
const bulb = document.getElementById("bulb");
const reading = document.getElementById("reading");
const form = document.getElementById("feedbackForm");

function label(v) {
  if (v < 25) return "chilly";
  if (v < 50) return "lukewarm";
  if (v < 75) return "warm";
  return "on fire";
}

function sync() {
  const v = Number(temp.value);
  mercury.style.height = `${Math.max(8, v)}%`;
  const hue = 200 - v * 1.8;
  const color = `hsl(${Math.max(0, hue)}, 75%, 55%)`;
  mercury.style.background = `linear-gradient(180deg, ${color}, #e85d4c)`;
  bulb.style.background = color;
  bulb.style.boxShadow = `0 0 20px ${color}`;
  reading.textContent = `${v}° — ${label(v)}`;
}

temp.addEventListener("input", sync);
sync();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button");
  btn.textContent = "Logged";
  setTimeout(() => {
    btn.textContent = "Log Reading";
    form.querySelector("textarea").value = "";
  }, 1400);
});
