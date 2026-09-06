const ticket = document.getElementById("ticket");
const tear = document.getElementById("tear");
const form = document.getElementById("loginForm");

function tearStub() {
  ticket.setAttribute("data-torn", "true");
}

tear.addEventListener("click", tearStub);
tear.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    tearStub();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button");
  btn.textContent = "Admitted";
  setTimeout(() => { btn.textContent = "Validate Ticket"; }, 1400);
});
