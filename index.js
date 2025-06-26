const maxPixels = 960;

const divContainer = document.querySelector(".container");
const redrawButton = document.querySelector(".headcontainer > button");

let clicked = false;

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

let getRandomColor = () => {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
};

let createDivs = (num) => {
  let pixlesPerBlock = 960 / num;

  let allDivs = num ** 2;

  divContainer.innerHTML = "";

  for (let i = 0; i < allDivs; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = "0.0";
    newDiv.style.height = `${pixlesPerBlock}px`;
    newDiv.style.width = `${pixlesPerBlock}px`;
    newDiv.addEventListener("mousedown", (e) => {
      e.preventDefault();
      // Get op
      let a = parseFloat(e.target.id);
      if (a < 1.0) {
        a += 0.1;
      }
      e.target.id = `${a}`;
      // Get color
      e.currentTarget.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
      clicked = true;
    });
    newDiv.addEventListener("mousemove", (e) => {
      if (clicked) {
        let a = parseFloat(e.target.id);
        if (a < 1.0) {
          a += 0.1;
        }
        e.target.id = `${a}`;
        e.currentTarget.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
      }
    });
    divContainer.appendChild(newDiv);
  }
};

divContainer.addEventListener("mouseup", () => {
  console.log("not clicking");
  getRandomColor();
  clicked = false;
});

divContainer.addEventListener("mouseleave", () => {
  getRandomColor();
  console.log("wentout");
  clicked = false;
});

createDivs(16);

redrawButton.addEventListener("click", () => {
  let sizeInput = 0;
  while (sizeInput === 0) {
    let inp = parseInt(prompt("Grid size per side?"));
    if (inp <= 100 && inp > 0) {
      sizeInput = inp;
    } else {
      alert("Invalid Input");
    }
  }
  createDivs(sizeInput);
});
