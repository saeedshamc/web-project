const form = document.getElementById("contactForm");
const status = document.getElementById("status");
const envelope = document.getElementById("envelope");
const message = document.getElementById("message");

const clicks = ["click", "clack", "tick", "tak"];

message.addEventListener("keydown", (e) => {
  if (e.key.length !== 1 && e.key !== "Backspace") return;
  const word = clicks[Math.floor(Math.random() * clicks.length)];
  status.textContent = word + "…";
  clearTimeout(status._t);
  status._t = setTimeout(() => {
    status.textContent = "";
  }, 180);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("sealed");
  envelope.classList.remove("show");
  void envelope.offsetWidth;
  envelope.classList.add("show");
  status.textContent = "sealed & dispatched";

  setTimeout(() => {
    form.reset();
    form.classList.remove("sealed");
    envelope.classList.remove("show");
    status.textContent = "";
  }, 1600);
});
