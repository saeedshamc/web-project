const needle = document.getElementById("needle");
const spinBtn = document.getElementById("spinBtn");
const form = document.getElementById("loginForm");

let angle = 40;

spinBtn.addEventListener("click", () => {
  angle += 360 * (2 + Math.random()) + (360 - (angle % 360));
  needle.style.transform = `rotate(${angle}deg)`;
  setTimeout(() => {
    form.setAttribute("data-open", "true");
    spinBtn.textContent = "North locked";
  }, 1800);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button[type='submit']");
  btn.textContent = "Course set";
  setTimeout(() => { btn.textContent = "Set Course"; }, 1400);
});
