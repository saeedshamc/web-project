const card = document.getElementById("card");
const flipBtn = document.getElementById("flipBtn");
const form = document.getElementById("contactForm");

let flipped = false;
flipBtn.addEventListener("click", () => {
  flipped = !flipped;
  card.setAttribute("data-flipped", flipped ? "true" : "false");
  flipBtn.textContent = flipped ? "Show photo" : "Flip postcard";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button");
  btn.textContent = "Posted!";
  setTimeout(() => {
    btn.textContent = "Mail it";
    form.reset();
    flipped = false;
    card.setAttribute("data-flipped", "false");
    flipBtn.textContent = "Flip postcard";
  }, 1400);
});
