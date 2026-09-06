const form = document.getElementById("commentForm");
const strip = document.getElementById("strip");
let frame = 1;

[
  { name: "Rita", text: "Opening shot looks sharp." },
  { name: "Cal", text: "Cut to close-up next." },
].forEach((c) => addFrame(c.name, c.text));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addFrame(
    document.getElementById("name").value.trim(),
    document.getElementById("comment").value.trim()
  );
  form.reset();
});

function addFrame(name, text) {
  const el = document.createElement("article");
  el.className = "frame";
  el.innerHTML = `<span class="who">F${String(frame).padStart(2, "0")} · ${escapeHtml(name)}</span>${escapeHtml(text)}`;
  strip.prepend(el);
  strip.scrollLeft = 0;
  frame += 1;
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
