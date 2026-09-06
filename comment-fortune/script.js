const form = document.getElementById("commentForm");
const cookie = document.getElementById("cookie");
const slip = document.getElementById("slip");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const text = document.getElementById("comment").value.trim();
  slip.textContent = `${text} — ${name}`;
  cookie.setAttribute("data-open", "false");
  void cookie.offsetWidth;
  cookie.setAttribute("data-open", "true");
  form.reset();
});
