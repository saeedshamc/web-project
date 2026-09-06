const form = document.getElementById("newsForm");
const balloon = document.getElementById("balloon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("sent");
  balloon.classList.remove("up");
  void balloon.offsetWidth;
  balloon.classList.add("up");
  setTimeout(() => {
    form.reset();
    form.classList.remove("sent");
    balloon.classList.remove("up");
  }, 2200);
});
