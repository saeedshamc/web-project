const stars = [...document.querySelectorAll(".star")];
const ratingLabel = document.getElementById("ratingLabel");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("feedbackForm");
const meteors = document.getElementById("meteors");
const hint = document.getElementById("hint");

const labels = ["", "Dim", "Faint", "Bright", "Brilliant", "Supernova"];
let rating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    rating = Number(star.dataset.value);
    stars.forEach((s) => {
      s.classList.toggle("lit", Number(s.dataset.value) <= rating);
    });
    ratingLabel.textContent = labels[rating];
    submitBtn.disabled = false;
    spawnMeteors(rating);
  });

  star.addEventListener("mouseenter", () => {
    const hoverVal = Number(star.dataset.value);
    stars.forEach((s) => {
      s.classList.toggle("lit", Number(s.dataset.value) <= Math.max(hoverVal, rating));
    });
  });
});

document.getElementById("stars").addEventListener("mouseleave", () => {
  stars.forEach((s) => {
    s.classList.toggle("lit", Number(s.dataset.value) <= rating);
  });
});

function spawnMeteors(count) {
  for (let i = 0; i < count; i += 1) {
    setTimeout(() => {
      const m = document.createElement("div");
      m.className = "meteor";
      m.style.left = `${10 + Math.random() * 70}%`;
      m.style.top = `${5 + Math.random() * 40}%`;
      meteors.appendChild(m);
      setTimeout(() => m.remove(), 800);
    }, i * 90);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!rating) return;
  spawnMeteors(5);
  hint.textContent = `Thanks for ${rating}★ — your words are in the sky.`;
  submitBtn.textContent = "Sent";
  setTimeout(() => {
    form.reset();
    rating = 0;
    stars.forEach((s) => s.classList.remove("lit"));
    ratingLabel.textContent = "Tap a star";
    submitBtn.disabled = true;
    submitBtn.textContent = "Send Feedback";
    hint.textContent = "Each star streaks across the night like a meteor.";
  }, 2000);
});
