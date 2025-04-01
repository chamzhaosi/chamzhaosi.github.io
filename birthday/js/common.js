const number_stars = 10;
const star_delay = 10;
const batch_delay = 1500;
const star_distance = 300;
const star_opacity_buffer = 0.3;
const show_card_duration = 7500;

document.addEventListener(
  "DOMContentLoaded", // Loop the star explosion every 1 second
  () => {
    bolloonStart()
  }
);
