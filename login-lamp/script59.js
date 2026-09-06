gsap.registerPlugin(Draggable);

const root = document.documentElement;
const body = document.body;
const loginForm = document.querySelector(".login-form");

const cordBead = document.querySelector(".cord-bead");
const cordLine = document.querySelector(".cord-line");
const hitArea = document.querySelector(".cord-hit");

// Resting y2 of the cord line in SVG coordinates (see index.html)
const CORD_BASE_Y2 = 185;
// How far (in px, along the draggable's y axis) the cord must be
// pulled before it counts as a "pull" that toggles the lamp.
const PULL_THRESHOLD = 30;

let isOn = false;

const clickSound = new Audio(
  "https://assets.codepen.io/605876/click.mp3"
);

function toggleLamp() {
  isOn = !isOn;
  body.setAttribute("data-on", isOn ? "true" : "false");
  root.style.setProperty("--on", isOn ? 1 : 0);

  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});

  if (loginForm) {
    loginForm.classList.toggle("visible", isOn);
  }
}

// Little "up-down-settle" bounce so the cord feels like a real
// pull-switch instead of just snapping straight back.
function bounceCordBack() {
  gsap.timeline()
    .to(cordBead, { y: -6, duration: 0.12, ease: "power1.out" }, 0)
    .to(cordBead, { y: 5, duration: 0.14, ease: "power1.inOut" })
    .to(cordBead, { y: 0, duration: 0.3, ease: "elastic.out(1, 0.5)" });

  gsap.timeline()
    .to(cordLine, { attr: { y2: CORD_BASE_Y2 - 6 }, duration: 0.12, ease: "power1.out" }, 0)
    .to(cordLine, { attr: { y2: CORD_BASE_Y2 + 5 }, duration: 0.14, ease: "power1.inOut" })
    .to(cordLine, { attr: { y2: CORD_BASE_Y2 }, duration: 0.3, ease: "elastic.out(1, 0.5)" });
}

Draggable.create(hitArea, {
  type: "y",
  bounds: {
    minY: 0,
    maxY: 45,
  },

  onDrag() {
    gsap.set(cordBead, {
      y: this.y,
    });

    gsap.set(cordLine, {
      attr: {
        y2: CORD_BASE_Y2 + this.y,
      },
    });
  },

  onRelease() {
    const pulledFarEnough = this.y > PULL_THRESHOLD;

    bounceCordBack();

    if (pulledFarEnough) {
      toggleLamp();
    }
  },

  // A plain click/tap on the cord (no real drag) also toggles the
  // lamp on/off, in addition to pulling it down.
  onClick() {
    bounceCordBack();
    toggleLamp();
  },
});
