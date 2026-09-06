const form = document.getElementById("commentForm");
const panels = document.getElementById("panels");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const text = document.getElementById("comment").value.trim();
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = `<span class="who">${escapeHtml(name)}</span>${escapeHtml(text)}`;
  panels.prepend(bubble);
  form.reset();
});

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
