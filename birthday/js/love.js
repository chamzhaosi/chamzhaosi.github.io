const love_container = document.getElementById("love_container");

document.getElementById("click").addEventListener("change", function () {
  if (this.checked) {
    createLove(10, love_container);
  } else {
    love_container.innerHTML = "";
  }
});

function createLove(count, container) {
  container.innerHTML = ""; // Clear previous love
  const variant = ["fa-beat", "fa-beat-fade", "fa-bounce", "fa-fade"];
  let translateX = -130; // Start value
  let step = (220 + 130) / count; // Ensure each step increases

  for (let i = 0; i < count; i++) {
    const love = document.createElement("i");
    const span = document.createElement("span");
    const variant_index = Math.round(Math.random() * variant.length);
    span.classList.add("love");
    love.classList.add("fa-solid", "fa-heart", variant[variant_index - 1]);
    span.appendChild(love);

    // Random values for throwing effect
    translateX += Math.random() * step + 5;
    let translateY = -(Math.random() * 180 + 150); // Random Y between -80px to -280px
    let translateY_bottom = Math.random() * 20 + 50; // Random Y between -80px to -280px
    let scale = Math.random() * 1.5 + 1.8; // Scale between 1 to 1.5
    let rotate = Math.random() * 90 - 45; // Rotate between -45deg to 45deg

    console.log(translateX);
    // Set animation dynamically
    span.style.animation = `throw-wish-${i} 1.8s linear forwards`;
    span.style.animationPlayState = "paused";
    container.appendChild(span);

    // Create dynamic keyframes
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(
      `
        @keyframes throw-wish-${i} {
          0% {
            transform: translateY(0) translateX(0) scale(0.8) rotate(0deg);
             z-index: -1;
          }
          40% {
            transform: translateY(${translateY / 2}px) translateX(${
        translateX / 2
      }px) scale(${scale}) rotate(${rotate / 2}deg);
      z-index: -1;

          }
          100% {
            transform: translateY(${translateY_bottom}px) translateX(${translateX}px) scale(${scale}) rotate(${rotate}deg);
            z-index: 100;
                  opacity: 1;
        }
        }
      `,
      styleSheet.cssRules.length
    );
  }
}
