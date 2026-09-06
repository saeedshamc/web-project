const form = document.getElementById("commentForm");
const vinyl = document.getElementById("vinyl");
const tracks = document.getElementById("tracks");
const labelText = document.getElementById("labelText");
let n = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const text = document.getElementById("comment").value.trim();
  vinyl.setAttribute("data-spin", "true");
  labelText.textContent = `A${n}`;
  const li = document.createElement("li");
  li.innerHTML = `${escapeHtml(text)}<span class="who">— ${escapeHtml(name)} · track A${n}</span>`;
  tracks.prepend(li);
  n += 1;
  form.reset();
  setTimeout(() => vinyl.setAttribute("data-spin", "false"), 1600);
});

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
