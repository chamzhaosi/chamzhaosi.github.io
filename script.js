function pauseVideo(video_id_name) {
  document.getElementById(video_id_name).pause();
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// for word cloud animation.
async function addAndRemoveClassSequentially(selector, className, delayTime) {
  const elements = document.querySelectorAll(selector);

  for (let element of elements) {
    element.classList.add(className);
    await delay(delayTime);
    element.classList.remove(className);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // only when the user scoll down start the initial page, then the navigation bar just appear
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

  // When user scroll down in the working experience section, it will become horizontally scroll
  // container.addEventListener(
  //   "wheel",
  //   function (e) {
  //     // if mobile size view, then not need to horizontal scoll
  //     if (window.innerWidth < 768) {
  //       return;
  //     }
  //     // Store the initial scroll position
  //     const initialScrollLeft = container.scrollLeft;

  //     // Attempt to scroll horizontally: positive deltaY scrolls right, negative scrolls left
  //     container.scrollLeft += e.deltaY;

  //     // Check if the scroll position has changed after the attempt
  //     if (!(container.scrollLeft === initialScrollLeft)) {
  //       // Prevent default scroll behavior (vertical scrolling) if we were able to scroll horizontally
  //       e.preventDefault();
  //     }
  //   },
  //   { passive: false }
  // ); // Note: The passive option is necessary to be able to preventDefault inside wheel event listeners.

  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => { 
    isDown = true;
    container.classList.remove('cur-grab')
    container.classList.add('cur-grabbing')
    // console.log(e.pageX) // cursor's x ordinate
    // console.log(container.offsetLeft) // container/section the starting point
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.add('cur-grab')
    container.classList.remove('cur-grabbing')
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 3 for faster scrolling (why need to minus, because want to know the how far cursur has moves.)
    container.scrollLeft = scrollLeft - walk;
    // console.log(container.scrollLeft)
  });

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("section");

  // for store current section id
  let cur = [];

  // when user scoll down the each particular section, the tab on navigation bar should active
  // Listen for scroll events on the window
  window.addEventListener("scroll", (e) => {
    const scrollY = window.scrollY;

    // Calculation current view, and record into a variable cur
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 90; // Adjust based on your header size
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        cur = [sectionId];
      }
    });

    // if the cur equal with the navigation id, then add active class
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (cur.length && link.getAttribute("href").includes(cur[0])) {
        link.classList.add("active");
      }
    });
  });

  // For word cloud animation
  // Run at the page is loaded (one time only)
  addAndRemoveClassSequentially("li > span", "span-hover", 500);

  // Every 10 second run one time
  setInterval(() => {
    addAndRemoveClassSequentially("li > span", "span-hover", 500);
  }, 12000);

  // Once the video modal is close, the video must be pause
  const ticketing_video_modal = document.getElementById("ticketingModal");
  ticketing_video_modal.addEventListener("hidden.bs.modal", function () {
    pauseVideo("ticketing_video");
  });

  const fyp_video_modal = document.getElementById("videoModal");
  fyp_video_modal.addEventListener("hidden.bs.modal", function () {
    pauseVideo("fyp_video");
  });
});
