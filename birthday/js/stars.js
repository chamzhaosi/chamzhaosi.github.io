function createStars(count) {
  const container = document.getElementById("burst-container");
  container.innerHTML = ""; // Clear previous stars
  for (let i = 0; i < count; i++) {
    const star = document.createElement("i");
    star.classList.add("fa", "fa-star", "star");

    // Random angle and distance
    const angle = Math.random() * 360;
    const distance = Math.random() * star_distance + 20; // Between 20px - 100px
    const x = Math.cos(angle * (Math.PI / 180)) * distance;
    const y = Math.sin(angle * (Math.PI / 180)) * distance;

    // Initial position
    star.style.transform = `translate(0, 0) scale(0.3)`;
    star.style.transition = `transform ${
      batch_delay / 1000
    }s ease-out, opacity ${batch_delay / 1000 + star_opacity_buffer}s`;
    star.style.opacity = "1";
    container.appendChild(star);

    // Animate after a small delay
    setTimeout(() => {
      star.style.transform = `translate(${x}px, ${y}px) scale(1)`;
      star.style.opacity = "0";
    }, star_delay);
  }
}
