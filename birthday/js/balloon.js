function bolloonStart() {
  const redBalloon = document.getElementById("red_balloon");
  redBalloon.addEventListener("click", function () {
    _startAll()
    document.getElementsByClassName("box-canvas")[0].style.animation =
      "floatUp 5s forwards linear";
    document.getElementsByClassName("draft_card")[0].style.animation =
      "falling 3s linear 5s forwards";
  });

}

function _startAll() {
  setInterval(() => {
    createStars(Math.random() * number_stars + 2);
  }, batch_delay);
  updateTime();
  playBallonSound();
  showCard();
}
