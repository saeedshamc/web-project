const moods = [
  { face: "😫", label: "Rough" },
  { face: "😕", label: "Meh" },
  { face: "😐", label: "Okay" },
  { face: "🙂", label: "Good" },
  { face: "🤩", label: "Amazing" },
];

const mood = document.getElementById("mood");
const face = document.getElementById("face");
const moodLabel = document.getElementById("moodLabel");
const form = document.getElementById("feedbackForm");

function sync() {
  const m = moods[Number(mood.value)];
  face.textContent = m.face;
  moodLabel.textContent = m.label;
  face.classList.remove("pop");
  void face.offsetWidth;
  face.classList.add("pop");
}

mood.addEventListener("input", sync);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button");
  btn.textContent = `Sent · ${moods[Number(mood.value)].label}`;
  setTimeout(() => {
    btn.textContent = "Send Mood";
    form.reset();
    mood.value = 2;
    sync();
  }, 1500);
});
