const form = document.getElementById("signupForm");
const fromCode = document.getElementById("fromCode");

document.getElementById("name").addEventListener("input", (e) => {
  const parts = e.target.value.trim().split(/\s+/);
  fromCode.textContent = (parts[0] || "YOU").slice(0, 3).toUpperCase();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("issued");
  const btn = form.querySelector("button");
  btn.textContent = "BOARDED";
  setTimeout(() => {
    form.classList.remove("issued");
    btn.textContent = "Issue Pass";
  }, 1600);
});
