const tune = document.getElementById("tune");
const needle = document.getElementById("needle");
const freq = document.getElementById("freq");
const light = document.getElementById("light");
const form = document.getElementById("contactForm");
const hint = document.getElementById("hint");

const stations = [88.1, 92.3, 98.7, 101.5, 104.2, 107.9];
let i = 2;

tune.addEventListener("click", () => {
  i = (i + 1) % stations.length;
  const f = stations[i];
  freq.textContent = `${f.toFixed(1)} FM`;
  needle.style.left = `${8 + (i / (stations.length - 1)) * 84}%`;
  light.classList.toggle("on", i === 2);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  light.classList.add("on");
  hint.textContent = "Transmission sent — standing by.";
  const btn = form.querySelector("button[type='submit']");
  btn.textContent = "On Air";
  setTimeout(() => {
    btn.textContent = "Broadcast";
    form.reset();
  }, 1600);
});
