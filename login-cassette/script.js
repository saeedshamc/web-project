const form = document.getElementById("loginForm");
const cassette = document.getElementById("cassette");
const trackText = document.getElementById("trackText");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = form.username.value.trim() || "Unknown";
  cassette.setAttribute("data-playing", "true");
  trackText.textContent = `Now playing: ${user} — Session Side A`;
  const btn = form.querySelector("button");
  btn.textContent = "■ Playing…";
  setTimeout(() => {
    cassette.setAttribute("data-playing", "false");
    btn.textContent = "▶ Play & Log in";
  }, 2800);
});
