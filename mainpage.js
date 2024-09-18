const container = document.querySelector(".sketchpad-container");

console.log("Script is Running");

let isDrawing = false;

function createPixelTrail(e, box) {
  for (let i = 1; i <= 5; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");

    const boxRect = box.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY + window.pageYOffset;

    pixel.style.left = `${x + i}px`;
    pixel.style.top = `${y + i}px`;

    box.appendChild(pixel);
  }
}

document.addEventListener("mousedown", () => {
  isDrawing = true;
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
});

document.querySelector(".grid").addEventListener("click", () => {
  let nrBoxes = prompt("How many boxes would you like your grid to have?");
  nrBoxes = parseInt(nrBoxes);
  if (isNaN(nrBoxes) || nrBoxes <= 0) {
    alert("Please enter a valid number.");
    return;
  }

  container.innerHTML = "";

  container.style.gridTemplateColumns = `repeat(${nrBoxes}, 100px)`;
  container.style.gridTemplateRows = `repeat(${nrBoxes}, 100px)`;
  for (let i = 0; i < nrBoxes * nrBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("sketchpad-box");

    box.addEventListener("mousemove", (e) => {
      if (isDrawing) {
        createPixelTrail(e, box);
      }
    });
    box.addEventListener("mouseenter", (e) => {
      radndomRGB(box);
    });
    container.appendChild(box);
  }
});

function radndomRGB(box) {
  //colloring
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgbValue = `rgb(${r}, ${g}, ${b})`;
  box.style.backgroundColor = rgbValue;
  opacity = Math.max(0, Math.min(1, opacity));
  console.log("randomrgb is running" + rgbValue);
}
