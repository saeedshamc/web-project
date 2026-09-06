const form = document.getElementById("searchForm");
const input = document.getElementById("q");
const results = document.getElementById("results");

const catalog = [
  "Login lamp interactive demo",
  "Contact paper plane form",
  "Sticky notes comment wall",
  "Neon sign power switch",
  "Vault dial authentication",
  "Guestbook signed entries",
];

input.addEventListener("focus", () => form.classList.add("focus"));
input.addEventListener("blur", () => form.classList.remove("focus"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = input.value.trim().toLowerCase();
  form.classList.add("searching");
  results.innerHTML = "";
  setTimeout(() => {
    form.classList.remove("searching");
    const hits = catalog.filter((item) => item.toLowerCase().includes(q) || q.length < 2);
    const list = hits.length ? hits : [`No matches for “${input.value.trim()}” — try lamp, contact, or neon`];
    list.forEach((item, i) => {
      const li = document.createElement("li");
      li.style.animationDelay = `${i * 0.05}s`;
      li.innerHTML = `<span class="tag">hit</span>${escapeHtml(item)}`;
      results.appendChild(li);
    });
  }, 600);
});

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
