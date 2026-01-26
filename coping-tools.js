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

  // TARIK — 4
  btn.textContent = "Tarik Napas";
  label.textContent = "Tarik";
  circle.classList.remove("exhale");
  circle.classList.add("inhale");
  countdown(4);

  setTimeout(() => {
    // TAHAN — 7
    btn.textContent = "Tahan";
    label.textContent = "Tahan";
    circle.classList.remove("inhale");
    countdown(7);

    setTimeout(() => {
      // BUANG — 8
      btn.textContent = "Buang Napas";
      label.textContent = "Buang";
      circle.classList.add("exhale");
      countdown(8);

      setTimeout(() => {
        // SELESAI
        circle.classList.remove("exhale");
        btn.textContent = "Mulai";
        label.textContent = "Selesai";
        count.textContent = "✓";
        running = false;
      }, 8000);
    }, 7000);
  }, 4000);
});
