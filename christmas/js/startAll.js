// Get the div element by its ID
const startAll = document.getElementById("moon_to_start_all");

const handleClick = () => {
  playWindSound();
  playChristmasSound();
  startGarden();
  maxGarden();
  treesGrow();
  dspSnowman();
  minClouds();
  minRemoveMoon();
  minRemoveStar();
  startSnowMsg();

  startAll.removeEventListener("click", handleClick);
};

// Add click event listener
startAll.addEventListener("click", handleClick);

const startGarden = () => {
  const garden = document.getElementById("garden"); // Replace with your element's ID
  startUpdatingBackground(garden);
  const gardenTopLeft = document.getElementsByClassName("gardenTopLeft")[0]; // Replace with your element's ID
  startUpdatingBackground(
    gardenTopLeft,
    "linear-gradient(to right, #308c48 20%, #3aba5c 80%)"
  );
  const gardenTopRight = document.getElementsByClassName("gardenTopRight")[0]; // Replace with your element's ID
  startUpdatingBackground(
    gardenTopRight,
    "linear-gradient(to right, #3aba5c, #11802e"
  );
};

const startSnowMsg = () => {
  setTimeout(() => snowMsg(), TIME_OUT + 2000);
};
