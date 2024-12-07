const generateClouds = (numClouds) => {
  const body = document.body;

  for (let i = 0; i < numClouds; i++) {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");

    // Random size
    const size = Math.random() * 100 + 50; // Between 50px and 150px
    cloud.style.width = `${size}px`;
    cloud.style.height = `${size * 0.6}px`; // Keep a consistent aspect ratio

    cloud.style.opacity = `${Math.floor(Math.random()) + 0.8}`;

    // Random position
    cloud.style.top = `${Math.random() * 20}vh`; // Random vertical position
    cloud.style.left = `${Math.random() * 80}vw`; // Start off-screen

    // Random animation duration
    const duration = Math.random() * 10 + 90; // Between 10s and 30s
    cloud.style.animationDuration = `${duration}s`;

    // Randomize pseudo-elements sizes
    cloud.style.setProperty("--size-before", `${size * 0.5}px`);
    cloud.style.setProperty("--size-after", `${size * 0.7}px`);

    // Append cloud to body
    body.appendChild(cloud);
  }
};

// Generate 10 clouds
generateClouds(20);
