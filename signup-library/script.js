const form = document.getElementById("signupForm");
const stamp = document.getElementById("stamp");
const cardId = document.getElementById("cardId");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("stamped");
  stamp.textContent = "JOINED";
  const id = String(Math.floor(100000 + Math.random() * 900000));
  cardId.textContent = `ID · ${id}`;
  setTimeout(() => {
    form.classList.remove("stamped");
    stamp.textContent = "DUE";
  }, 2000);
});
