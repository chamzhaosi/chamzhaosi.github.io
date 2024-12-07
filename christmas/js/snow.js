// Generate snowflakes
const createSnowflakes = () => {
  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Random size
    const size = Math.random() * 5 + 5; // Between 5px and 10px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Random horizontal position
    snowflake.style.left = `${Math.random() * 100}vw`;

    // Random fall duration
    const fallDuration = Math.random() * 5 + 5; // Between 5s and 10s
    snowflake.style.animationDuration = `${fallDuration}s`;

    // Random sway duration
    const swayDuration = Math.random() * 3 + 2; // Between 2s and 5s
    snowflake.style.animationDuration += `, ${swayDuration}s`;

    // Append to the body
    document.body.appendChild(snowflake);
  }
};

createSnowflakes();
