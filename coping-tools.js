const btn = document.querySelector(".btn");
const circle = document.querySelector(".circle-inner");
const count = document.querySelector(".count");
const label = document.querySelector(".label");

let running = false;
let intervalId;

function countdown(seconds) {
  clearInterval(intervalId);
  count.textContent = seconds;

  intervalId = setInterval(() => {
    seconds--;
    count.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

btn.addEventListener("click", () => {
  if (running) return;
  running = true;

  btn.textContent = "Bernapas...";

  // TARIK — 4
  label.textContent = "Tarik";
  circle.classList.remove("exhale");
  circle.classList.add("inhale");
  countdown(4);

  setTimeout(() => {
    // TAHAN — 7
    circle.classList.remove("inhale");
    label.textContent = "Tahan";
    countdown(7);

    setTimeout(() => {
      // BUANG — 8
      label.textContent = "Buang";
      circle.classList.add("exhale");
      countdown(8);

      setTimeout(() => {
        // SELESAI
        circle.classList.remove("exhale");
        label.textContent = "Selesai";
        count.textContent = "✓";
        btn.textContent = "Mulai";
        running = false;
      }, 8000);
    }, 7000);
  }, 4000);
});
