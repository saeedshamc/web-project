const polaroid = document.getElementById("polaroid");
const handle = document.getElementById("dragHandle");
const form = document.getElementById("loginForm");

let dragging = false;
let startY = 0;
let reveal = 0;

function setReveal(value) {
  reveal = Math.max(0, Math.min(100, value));
  polaroid.style.setProperty("--reveal", reveal);
  if (reveal >= 92) {
    polaroid.classList.add("developed");
  } else if (reveal < 70) {
    polaroid.classList.remove("developed");
  }
}

handle.addEventListener("pointerdown", (e) => {
  dragging = true;
  startY = e.clientY;
  handle.setPointerCapture(e.pointerId);
});

handle.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  const delta = e.clientY - startY;
  setReveal(reveal + delta * 0.35);
  startY = e.clientY;
});

handle.addEventListener("pointerup", () => {
  dragging = false;
  if (reveal > 55) {
    animateTo(100);
  } else {
    animateTo(0);
  }
});

function animateTo(target) {
  const start = reveal;
  const t0 = performance.now();
  const dur = 320;

  function frame(now) {
    const p = Math.min(1, (now - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    setReveal(start + (target - start) * eased);
    if (p < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button");
  btn.textContent = "Captured";
  setTimeout(() => {
    btn.textContent = "Snap & Sign in";
  }, 1400);
});
