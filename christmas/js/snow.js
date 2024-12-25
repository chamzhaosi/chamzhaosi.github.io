let snowMsgCtn;

const oneSnowflakes = (start) => {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  // Random size
  const size = Math.random() * 5 + 5; // Between 5px and 10px
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;

  // Random horizontal position
  const position = Math.random() * 100;
  snowflake.style.left = `${!start ? position : 79}vw`;

  // Random fall duration
  const fallDuration = Math.random() * 5 + 5; // Between 5s and 10s
  snowflake.style.animationDuration = `${!start ? fallDuration : 6.9}s`;

  if (start) {
    snowMsgCtn = snowflake;
  }

  // Random sway duration
  const swayDuration = Math.random() * 3 + 2; // Between 2s and 5s
  snowflake.style.animationDuration += `, ${swayDuration}s`;

  // Append to the body
  document.body.appendChild(snowflake);
};

// Generate snowflakes
const createSnowflakes = () => {
  for (let i = 0; i < 50; i++) {
    oneSnowflakes(false);
  }
};

createSnowflakes();

const toggleSnowMsg = (content, snowCtn) => {
  let currentIndex = 0;

  // Reset dimensions and hide content initially
  snowCtn.style.width = "0";
  snowCtn.style.height = "0";
  snowCtn.style.overflow = "hidden";
  snowCtn.textContent = ""; // Clear text content initially

  // Add content and expand after a small delay
  setTimeout(() => {
    snowCtn.style.width = "10vmax";
    snowCtn.style.height = "10vmax";

    // Wait until the size transition is complete before showing the text
    const transitionDuration =
      parseFloat(getComputedStyle(snowCtn).transitionDuration) || 0.3;
    setTimeout(() => {
      snowCtn.textContent = content;
      snowCtn.style.overflow = "visible"; // Show content when expanded

      // After 3 seconds, minimize the container again
      setTimeout(() => {
        snowCtn.style.width = "0";
        snowCtn.style.height = "0";
        snowCtn.style.overflow = "hidden";
        snowCtn.textContent = ""; // Clear text content when minimizing

        // Update the content index for the next toggle
        currentIndex = (currentIndex + 1) % contentArray.length;
      }, 3500);
    }, transitionDuration + 500);
  }, 1000);
};

const snowMsg = () => {
  oneSnowflakes(true);
  const contentArray = [
    "宝宝谢谢有你，",
    "虽然可能无法",
    "和你真正恋爱，",
    "但我还是想说，",
    "宝宝我喜欢你，",
    "希望有一天我们",
    "一起过圣诞节，",
    "一起看真正下雪。",
    "宝宝圣诞节快乐！",
  ];
  for (let i = 0; i < contentArray.length; i++) {
    setTimeout(() => {
      toggleSnowMsg(contentArray[i], snowMsgCtn);
    }, 6800 * i);
  }
};
