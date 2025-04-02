function moveRandomEl(elm) {
  elm.style.position = "absolute";

  // Get the button's dimensions
  const btnWidth = elm.offsetWidth;
  const btnHeight = elm.offsetHeight;

  // Get viewport dimensions
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Calculate a random position while keeping the button within visible bounds
  const randomTop = Math.random() * (screenHeight - btnHeight - 20);
  const randomLeft = Math.random() * (screenWidth - btnWidth - 20);

  // Apply new position
  elm.style.top = `${randomTop}px`;
  elm.style.left = `${randomLeft}px`;
  elm.style.transition = "top 0.3s ease, left 0.3s ease"; // Smooth movement
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
}
