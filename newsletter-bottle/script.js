const form = document.getElementById("newsForm");
const bottle = document.getElementById("bottle");
const scrollNote = document.getElementById("scrollNote");
const hint = document.getElementById("hint");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  scrollNote.textContent = email;
  form.classList.add("sent");
  bottle.classList.remove("sailing");
  void bottle.offsetWidth;
  bottle.classList.add("sailing");
  hint.textContent = "Your bottle is on the tide — welcome aboard.";

  setTimeout(() => {
    form.reset();
    form.classList.remove("sent");
    bottle.classList.remove("sailing");
    hint.textContent = "Subscribe and watch your note float away in a bottle.";
  }, 2400);
});
