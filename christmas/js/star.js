function randomDrawStars(id) {
  const starContainer = document.getElementById(id);

  function setStarsRow(rowCount) {
    function spanCreate() {
      const widthRange = [
        "w-10",
        "w-12",
        "w-16",
        "w-20",
        "w-24",
        "w-28",
        "w-32",
      ];
      const randomIndex = Math.floor(Math.random() * widthRange.length);
      const span = document.createElement("span");
      span.classList.add(widthRange[randomIndex]);
      return span;
    }

    function starOneCreate() {
      const starOne = document.createElement("div");
      starOne.classList.add("starOne");
      return starOne;
    }

    function starTwoCreate() {
      const starTwo = document.createElement("div");
      starTwo.classList.add("starTwo");
      return starTwo;
    }

    function starThreeCreate() {
      const starThree = document.createElement("div");
      starThree.classList.add("starThree");
      return starThree;
    }

    function starFourCreate() {
      const starFour = document.createElement("div");
      starFour.classList.add("starFour");
      return starFour;
    }

    for (let i = 0; i < rowCount; i++) {
      const starRow = document.createElement("div");
      let starRowClass = "flex";

      if (Math.floor((Math.random() * 100) / 50) % 2) {
        starRowClass = "flex-row-reverse";
      }
      starRow.classList.add("stars-row", starRowClass);

      const starCreateList = [
        starOneCreate,
        starTwoCreate,
        starThreeCreate,
        starFourCreate,
        starOneCreate,
        starTwoCreate,
        starFourCreate,
      ];

      starCreateList.forEach((_, index) => {
        const randomIndex = Math.floor(Math.random() * starCreateList.length);
        if (Math.floor((Math.random() * 100) / 50) % 2) return;
        if (index === 0) {
          starRow.appendChild(spanCreate());
        }
        starRow.appendChild(starCreateList[randomIndex]());
        starRow.appendChild(spanCreate());
      });

      // Append the star element to the container
      starContainer.appendChild(starRow);
    }
  }

  setStarsRow(12);
}

randomDrawStars("sky_star_container1");
randomDrawStars("sky_star_container2");
