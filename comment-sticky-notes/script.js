const form = document.getElementById("commentForm");
const board = document.getElementById("board");
const colors = ["c0", "c1", "c2", "c3"];
let count = 0;

const starters = [
  { name: "Maya", text: "Love this wall." },
  { name: "Jon", text: "First!" },
];

starters.forEach((s) => addNote(s.name, s.text));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const text = document.getElementById("comment").value.trim();
  if (!name || !text) return;
  addNote(name, text);
  form.reset();
});

function addNote(name, text) {
  const note = document.createElement("article");
  const rot = (Math.random() * 10 - 5).toFixed(1);
  note.className = `note ${colors[count % colors.length]}`;
  note.style.setProperty("--rot", `${rot}deg`);
  note.innerHTML = `<p>${escapeHtml(text)}</p><span class="author">— ${escapeHtml(name)}</span>`;
  board.prepend(note);
  count += 1;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
