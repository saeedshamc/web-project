const form = document.getElementById("commentForm");
const entriesEl = document.getElementById("entries");
const pageLabel = document.getElementById("pageLabel");
const rightPage = document.getElementById("rightPage");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const entries = [
  { name: "Elena", text: "What a lovely place to visit." },
  { name: "Samir", text: "Came for coffee, stayed for the quiet." },
];

const PER_PAGE = 3;
let page = 0;

function render() {
  const totalPages = Math.max(1, Math.ceil(entries.length / PER_PAGE));
  page = Math.min(page, totalPages - 1);
  const start = page * PER_PAGE;
  const slice = entries.slice(start, start + PER_PAGE);

  rightPage.classList.remove("turning");
  void rightPage.offsetWidth;
  rightPage.classList.add("turning");

  entriesEl.innerHTML = slice
    .map(
      (e) =>
        `<article class="entry"><p>${escapeHtml(e.text)}</p><span class="who">— ${escapeHtml(e.name)}</span></article>`
    )
    .join("");

  pageLabel.textContent = `${page + 1} / ${totalPages}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const text = document.getElementById("comment").value.trim();
  if (!name || !text) return;
  entries.unshift({ name, text });
  page = 0;
  render();
  form.reset();
});

prev.addEventListener("click", () => {
  if (page > 0) {
    page -= 1;
    render();
  }
});

next.addEventListener("click", () => {
  const totalPages = Math.ceil(entries.length / PER_PAGE);
  if (page < totalPages - 1) {
    page += 1;
    render();
  }
});

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

render();
