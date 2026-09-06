const form = document.getElementById("commentForm");
const thread = document.getElementById("thread");
const typing = document.getElementById("typing");
const comment = document.getElementById("comment");

let typingTimer;

comment.addEventListener("input", () => {
  typing.hidden = comment.value.trim().length === 0;
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => {
    typing.hidden = true;
  }, 900);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const text = comment.value.trim();
  if (!name || !text) return;

  typing.hidden = true;
  const bubble = document.createElement("div");
  bubble.className = "bubble me";
  bubble.innerHTML = `<span class="meta">${escapeHtml(name)}</span>${escapeHtml(text)}`;
  thread.appendChild(bubble);
  thread.scrollTop = thread.scrollHeight;
  comment.value = "";
});

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
