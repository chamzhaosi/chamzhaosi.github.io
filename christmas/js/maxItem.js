const maxGarden = () => {
  const garden = document.getElementById("garden");

  setTimeout(() => {
    garden.style.translate = "0";
  }, TIME_OUT);
};

maxGarden();

const treesGrow = () => {
  const trees = document.getElementById("tree_container");

  setTimeout(() => {
    trees.style.translate = "none";
  }, TIME_OUT);
};

treesGrow();

const dspSnowman = () => {
  const snowmans = document.getElementsByClassName("snow_man_container");

  setTimeout(() => {
    for (let snowman of snowmans) {
      snowman.style.opacity = 1;
    }
  }, TIME_OUT + TIME_OUT);
};

dspSnowman();
