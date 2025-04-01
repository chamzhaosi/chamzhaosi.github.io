const playBallonSound = () => {
    const audio = document.getElementById("bolloon");
    audio.play();

    setTimeout(() => {
        audio.pause();
        playBirthdatVoicedSound()
    }, 5500);
};

const playBirthdatVoicedSound = () => {
  setTimeout(() => {
    const audio = document.getElementById("birthday_voiced");
    audio.play();
    audio.addEventListener("ended", () => {
        playBirthdatCardSound()
    });
  }, 2000);
};

const playBirthdatCardSound = () => {
      const audio = document.getElementById("birthday_card");
      audio.play();
      audio.addEventListener("ended", () => {
        playBirthdatSoundSound()
    });
  };

const playBirthdatSoundSound = () => {
    const audio = document.getElementById("birthday_sound");
    audio.play();
};
