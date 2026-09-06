const slots = [...document.querySelectorAll("#slots input")];
const slotsWrap = document.getElementById("slots");
const status = document.getElementById("status");
const CODE = "4821";

function current() {
  return slots.map((s) => s.value).join("");
}

function setDigit(d) {
  const empty = slots.find((s) => !s.value);
  if (!empty) return;
  empty.value = d;
  empty.classList.add("filled");
  const next = slots[slots.indexOf(empty) + 1];
  if (next) next.focus();
}

function clearOne() {
  const filled = [...slots].reverse().find((s) => s.value);
  if (!filled) return;
  filled.value = "";
  filled.focus();
}

function verify() {
  const code = current();
  if (code.length < 4) {
    status.textContent = "Enter all 4 digits";
    status.className = "status fail";
    return;
  }
  if (code === CODE) {
    slotsWrap.classList.remove("bad");
    slotsWrap.classList.add("ok");
    status.textContent = "Access granted";
    status.className = "status good";
  } else {
    slotsWrap.classList.remove("ok");
    slotsWrap.classList.add("bad");
    status.textContent = "Wrong code";
    status.className = "status fail";
    setTimeout(() => {
      slots.forEach((s) => (s.value = ""));
      slotsWrap.classList.remove("bad");
      slots[0].focus();
    }, 500);
  }
}

document.getElementById("pad").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const n = btn.dataset.n;
  if (n === "clear") clearOne();
  else if (n === "ok") verify();
  else setDigit(n);
});

slots.forEach((input, i) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 1);
    if (input.value && slots[i + 1]) slots[i + 1].focus();
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && slots[i - 1]) {
      slots[i - 1].focus();
    }
    if (e.key === "Enter") verify();
  });
});

slots[0].focus();
