const maxGarden = () => {
  const garden = document.getElementById("garden");

  setTimeout(() => {
    garden.style.translate = "0";
  }, TIME_OUT);
};

// maxGarden();

const treesGrow = () => {
  const trees = document.getElementById("tree_container");

  setTimeout(() => {
    trees.style.translate = "none";
  }, TIME_OUT);
};

// treesGrow();
