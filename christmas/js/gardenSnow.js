function getRandomPositionWithBias(range = 100) {
  // Add some randomness with a bias
  return Math.random() > 0.5
    ? Math.random() * (range * 0.7) // Focus positions in one range
    : Math.random() * (range * 0.3) + range * 0.7; // Offset positions to another
}

// Function to generate a random percentage for position
function getRandomPercentage() {
  return Math.floor(Math.random() * 101); // Random number between 0 and 100
}

// Function to generate a random size for background-size
function getRandomSize() {
  return `${Math.floor(Math.random() * 50) + Math.random() * 10}px ${
    Math.floor(Math.random() * 50) + Math.random() * 10
  }px`; // Random size between 10px and 100px
}

// Function to update the background CSS
function updateBackground(
  element,
  defaultImage,
  backgroundSizeList,
  backgroundImageList
) {
  if (backgroundSizeList.length > 20) return;

  const circleX = getRandomPositionWithBias();
  const circleY = getRandomPositionWithBias();

  // Add new random values to the lists
  backgroundSizeList.push(getRandomSize());
  backgroundImageList.push(
    `radial-gradient(circle at ${circleX}% ${circleY}%, #eee 10%, transparent 10.1%)`
  );

  // Build the background properties
  const backgroundSize = backgroundSizeList.join(", ") + `, 100% 100%`;
  const backgroundImage =
    backgroundImageList.join(", ") + (defaultImage ? `, ${defaultImage}` : "");
  const backgroundRepeat =
    Array(backgroundSizeList.length).fill("repeat").join(", ") + `, no-repeat`;

  // Apply the CSS to the element
  element.style.backgroundImage = backgroundImage;
  element.style.backgroundRepeat = backgroundRepeat;
  element.style.backgroundSize = backgroundSize;
}

// Set an interval to keep updating the background
function startUpdatingBackground(element, defaultImage, interval = TIME_OUT) {
  const backgroundSizeList = [];
  const backgroundImageList = [];
  setInitail(element, defaultImage, backgroundSizeList, backgroundImageList);
  setInterval(
    () =>
      updateBackground(
        element,
        defaultImage,
        backgroundSizeList,
        backgroundImageList
      ),
    interval
  );
}

function setInitail(
  element,
  defaultImage,
  backgroundSizeList,
  backgroundImageList
) {
  for (let i = 0; i < 10; i++) {
    updateBackground(
      element,
      defaultImage,
      backgroundSizeList,
      backgroundImageList
    );
  }
}
