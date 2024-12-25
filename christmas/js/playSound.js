const playWindSound = () => {
  setTimeout(() => {
    const audio = document.getElementById("windSound");
    audio.play();
  }, 1500);
};

const playChristmasSound = () => {
  setTimeout(() => {
    const audio = document.getElementById("christmsSong");
    audio.play();
  }, TIME_OUT * 2);
};
