const love_sttm = document.getElementById("love_sttm");
const draft_letter = document.getElementById("draft_letter");
const letter = document.getElementById("letter_container");
const letter_closed = document.getElementById("letter_closed");

love_sttm.addEventListener("change", function () {
  if (this.checked) {
    draft_letter.style.transition = "all 2s linear";
    draft_letter.style.transitionDelay = "2s";
  } else {
    draft_letter.style.transition = "all 2s linear";
    draft_letter.style.transitionDelay = "unset";
  }

  setTimeout(() => {
    draft_letter.style.transition = "unset";
    draft_letter.style.transitionDelay = "unset";
  }, 4000);
});

draft_letter.addEventListener("click", function () {
  letter.style.display = "flex";
  const script = document.getElementById("draft-love-letter").innerHTML;
  //   const script = loveLetter.textContent;
  document.getElementById("love-letter").textContent = "";
  typeWriter(script);
});

letter_closed.addEventListener("click", function () {
  letter.style.display = "none";
  clearTimeout(typeWriter_setTimeout);
  i = 0;
});

function updateTime() {
  const startTime = new Date("2024-09-14T21:11:00"); // Start time (September 14, 2024, 9:11:00 PM)

  function calculateTime() {
    const now = new Date();
    let diff = Math.floor((now - startTime) / 1000); // Difference in seconds

    const months = Math.floor(diff / (30 * 24 * 60 * 60)); // Approximate months
    diff %= 30 * 24 * 60 * 60;

    const days = Math.floor(diff / (24 * 60 * 60));
    diff %= 24 * 60 * 60;

    const hours = Math.floor(diff / (60 * 60));
    diff %= 60 * 60;

    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    // Update the HTML
    document.getElementById("mnt").textContent = months;
    document.getElementById("day").textContent = days;
    document.getElementById("hour").textContent = hours;
    document.getElementById("min").textContent = minutes;
    document.getElementById("sec").textContent = seconds;
  }

  calculateTime(); // Run immediately
  setInterval(calculateTime, 1000); // Update every second
}

let i = 0;
const speed = 50;
let typeWriter_setTimeout;

function typeWriter(script) {
  if (i < script.length) {
    // Get the current part of the text and set it as innerHTML to process HTML
    document.getElementById("love-letter").innerHTML = script.substring(
      0,
      i + 1
    );
    i++;
    typeWriter_setTimeout = setTimeout(() => typeWriter(script), speed); // Pass function reference
  }
}
