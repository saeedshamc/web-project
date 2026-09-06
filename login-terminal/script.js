const form = document.getElementById("loginForm");
const screen = document.getElementById("screen");

function addLine(text, cls = "") {
  const p = document.createElement("p");
  p.className = `line ${cls}`;
  p.textContent = text;
  screen.appendChild(p);
  screen.scrollTop = screen.scrollHeight;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("username").value.trim() || "anon";
  addLine(`$ login --user ${user}`);
  addLine("hashing credentials…", "dim");
  setTimeout(() => {
    addLine("session granted. welcome.", "ok");
  }, 450);
});
