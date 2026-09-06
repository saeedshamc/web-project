const digits = [
  document.getElementById("h1"),
  document.getElementById("h2"),
  document.getElementById("m1"),
  document.getElementById("m2"),
];

function syncClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const vals = [...h, ...m];
  digits.forEach((el, i) => {
    if (el.textContent !== vals[i]) {
      el.parentElement.classList.remove("tick");
      void el.parentElement.offsetWidth;
      el.parentElement.classList.add("tick");
      el.textContent = vals[i];
    }
  });
}

syncClock();
setInterval(syncClock, 1000);

document.querySelectorAll("#loginForm input").forEach((input) => {
  input.addEventListener("keydown", () => {
    const i = Math.floor(Math.random() * 4);
    const el = digits[i];
    el.parentElement.classList.remove("tick");
    void el.parentElement.offsetWidth;
    el.parentElement.classList.add("tick");
    el.textContent = String(Math.floor(Math.random() * 10));
    setTimeout(syncClock, 280);
  });
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  btn.textContent = "On Shift";
  setTimeout(() => { btn.textContent = "Clock In"; }, 1400);
});
