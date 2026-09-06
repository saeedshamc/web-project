const vault = document.getElementById("vault");
const dial = document.getElementById("dial");
const handle = document.getElementById("handle");
const form = document.getElementById("loginForm");

let angle = 0;
let dragging = false;
let lastX = 0;
let isOpen = false;

dial.addEventListener("pointerdown", (e) => {
  dragging = true;
  lastX = e.clientX;
  dial.setPointerCapture(e.pointerId);
});

dial.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  const delta = e.clientX - lastX;
  lastX = e.clientX;
  angle += delta * 1.6;
  dial.style.transform = `rotate(${angle}deg)`;
});

dial.addEventListener("pointerup", () => {
  dragging = false;
});

handle.addEventListener("click", () => {
  handle.classList.add("turning");
  setTimeout(() => handle.classList.remove("turning"), 280);

  isOpen = !isOpen;
  vault.setAttribute("data-open", isOpen ? "true" : "false");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button");
  btn.textContent = "Access Granted";
  setTimeout(() => {
    btn.textContent = "Unlock Contents";
  }, 1600);
});
