const form = document.getElementById("contactForm");
const mailbox = document.getElementById("mailbox");
const hint = document.getElementById("hint");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mailbox.setAttribute("data-open", "true");
  form.classList.add("posting");

  setTimeout(() => {
    mailbox.setAttribute("data-open", "false");
    mailbox.setAttribute("data-flag", "up");
    hint.textContent = "Letter delivered — the flag is up.";
  }, 700);

  setTimeout(() => {
    form.reset();
    form.classList.remove("posting");
  }, 1400);
});
