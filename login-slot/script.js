const symbols = ["🔐", "🔑", "⭐", "💎", "7️⃣", "🔔"];
const reels = [document.getElementById("r1"), document.getElementById("r2"), document.getElementById("r3")];
const lever = document.getElementById("lever");
const form = document.getElementById("loginForm");
const hint = document.getElementById("hint");

lever.addEventListener("click", () => {
  reels.forEach((r) => r.classList.add("spinning"));
  let done = 0;
  reels.forEach((r, i) => {
    setTimeout(() => {
      r.classList.remove("spinning");
      r.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      done += 1;
      if (done === 3) {
        // Force win for demo UX after a pull
        reels.forEach((el) => { el.textContent = "🔐"; });
        form.setAttribute("data-open", "true");
        hint.textContent = "Jackpot! Form unlocked.";
      }
    }, 400 + i * 350);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button[type='submit']");
  btn.textContent = "Winner!";
  setTimeout(() => { btn.textContent = "Cash In"; }, 1400);
});
