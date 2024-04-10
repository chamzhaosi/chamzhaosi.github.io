// Function to check if a section is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function addAndRemoveClassSequentially(selector, className, delayTime) {
  const elements = document.querySelectorAll(selector);

  for (let element of elements) {
    element.classList.add(className);
    await delay(delayTime);
    element.classList.remove(className);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    const header = this.document.getElementById("header");

    if (scrollPosition > 10) {
      header.classList.add("header-visible");
    } else {
      header.classList.remove("header-visible");
    }
  });

  const container = document.getElementById("working_container");

  container.addEventListener(
    "wheel",
    function (e) {
      if (window.innerWidth < 768) {
        return;
      }
      // Store the initial scroll position
      const initialScrollLeft = container.scrollLeft;

      // Attempt to scroll horizontally: positive deltaY scrolls right, negative scrolls left
      container.scrollLeft += e.deltaY;

      // Check if the scroll position has changed after the attempt
      if (!(container.scrollLeft === initialScrollLeft)) {
        // Prevent default scroll behavior (vertical scrolling) if we were able to scroll horizontally
        e.preventDefault();
      }
    },
    { passive: false }
  ); // Note: The passive option is necessary to be able to preventDefault inside wheel event listeners.

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("section");

  let lastId;
  let cur = [];

  // Listen for scroll events on the window
  window.addEventListener("scroll", (e) => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 90; // Adjust based on your header size
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        cur = [sectionId];
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (cur.length && link.getAttribute("href").includes(cur[0])) {
        link.classList.add("active");
      }
    });
  });

  // Run at the page is loaded (one time only)
  addAndRemoveClassSequentially("li > span", "span-hover", 500);

  // Every 10 second run one time
  setInterval(() => {
    addAndRemoveClassSequentially("li > span", "span-hover", 500);
  }, 12000);
});
