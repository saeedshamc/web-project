const sensor = document.getElementById("sensor");
const label = document.getElementById("sensorLabel");
const form = document.getElementById("loginForm");

let holdTimer = null;
let scanned = false;

function startScan() {
  if (scanned) return;
  sensor.classList.add("scanning");
  label.textContent = "Scanning…";
  holdTimer = setTimeout(() => {
    scanned = true;
    sensor.classList.remove("scanning");
    sensor.classList.add("ok");
    label.textContent = "Match found";
    form.setAttribute("data-ready", "true");
  }, 1400);
}

function cancelScan() {
  if (scanned) return;
  clearTimeout(holdTimer);
  sensor.classList.remove("scanning");
  label.textContent = "Hold to scan";
}

sensor.addEventListener("pointerdown", startScan);
sensor.addEventListener("pointerup", cancelScan);
sensor.addEventListener("pointerleave", cancelScan);
sensor.addEventListener("pointercancel", cancelScan);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button[type='submit']");
  btn.textContent = "Authenticated";
  setTimeout(() => { btn.textContent = "Confirm Identity"; }, 1500);
});
