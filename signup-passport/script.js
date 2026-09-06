const passport = document.getElementById("passport");
const openBtn = document.getElementById("openBtn");
const form = document.getElementById("signupForm");
const mrz = document.getElementById("mrz");

let open = false;

openBtn.addEventListener("click", () => {
  open = !open;
  passport.setAttribute("data-open", open ? "true" : "false");
  openBtn.setAttribute("aria-expanded", open ? "true" : "false");
  openBtn.textContent = open ? "Close passport" : "Open passport";
});

form.addEventListener("input", () => {
  const first = (form.firstname.value || "XXXX").toUpperCase().replace(/\s+/g, "<");
  const last = (form.lastname.value || "XXXX").toUpperCase().replace(/\s+/g, "<");
  const line = `P<ROA${last}<<${first}<<<<<<<<<<<<<<<<<<<`.slice(0, 44);
  mrz.textContent = line;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("stamped");
  const btn = form.querySelector("button");
  btn.textContent = "Issued";
  setTimeout(() => {
    form.classList.remove("stamped");
    btn.textContent = "Stamp & Issue";
  }, 1800);
});
