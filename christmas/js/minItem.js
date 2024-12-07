const TIME_OUT = 3 * 1000;

const minClouds = () => {
  setTimeout(() => {
    const clouds = document.getElementsByClassName("cloud");

    const size = Math.random() * 20 + 50;

    for (let cloud of clouds) {
      cloud.style.width = `${size}px`;
      cloud.style.height = `${size * 0.6}px`;
      cloud.style.left = `${parseInt(cloud.style.left || "0", 10) + 10}vw`;

      cloud.style.setProperty("--size-before", `${size * 0.5}px`);
      cloud.style.setProperty("--size-after", `${size * 0.7}px`);
    }
  }, [TIME_OUT]);
};
minClouds();

const minRemoveMoon = () => {
  setTimeout(() => {
    const moons = document.getElementsByClassName("moon");

    for (let moon of moons) {
      const size = 50;
      moon.style.width = `${size}px`;
      moon.style.height = `${size}px`;

      const positionX = 500;
      moon.style.transform = `translateX(${positionX}px)`;
    }
  }, [TIME_OUT]);
};
minRemoveMoon();

const minRemoveStart = () => {
  setTimeout(() => {
    const startOneContainer = document.getElementById("sky_star_container1");
    startOneContainer.style.opacity = 0;

    const startTwoContainer = document.getElementById("sky_star_container2");
    startTwoContainer.style.opacity = 0.5;

    for (let i = 0; i < 4; i++) {
      const lastChild = startTwoContainer.lastElementChild;
      if (lastChild) {
        startTwoContainer.removeChild(lastChild);
      }
    }
  }, [TIME_OUT]);
};
minRemoveStart();
