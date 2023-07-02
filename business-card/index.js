let icons = ["♦", "♣", "♥", "♠"]; // Example array of icons

let iconElements = document.querySelectorAll(".icon");
let currentIndex = 0;

function rotateIcons() {
  iconElements.forEach((iconElement, index) => {
    iconElement.textContent = icons[(currentIndex + index) % icons.length];
  });

  currentIndex++;
}

setInterval(rotateIcons, 2000);
