const form = document.getElementById("contactForm");
const plane = document.getElementById("plane");
const hint = document.getElementById("hint");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  plane.classList.remove("flying");
  void plane.offsetWidth;
  plane.classList.add("flying");
  form.classList.add("sent");
  hint.textContent = "Message airborne — thanks for writing.";
  hint.classList.add("success");

  setTimeout(() => {
    form.reset();
    form.classList.remove("sent");
    plane.classList.remove("flying");
    hint.textContent = "Fill the form and launch — watch the plane soar away.";
    hint.classList.remove("success");
  }, 2200);
});
