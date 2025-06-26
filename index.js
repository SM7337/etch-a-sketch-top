const maxPixels = 960;

const divContainer = document.querySelector(".container");
const redrawButton = document.querySelector(".headcontainer > button");

let clicked = false;

let createDivs = (num) => {
  let pixlesPerBlock = 960 / num;

  let allDivs = num ** 2;

  divContainer.innerHTML = "";

  for (let i = 0; i < allDivs; i++) {
    let newDiv = document.createElement("div");
    newDiv.style.height = `${pixlesPerBlock}px`;
    newDiv.style.width = `${pixlesPerBlock}px`;
    newDiv.addEventListener("mousedown", (e) => {
      e.preventDefault();
      e.currentTarget.className = "pixel";
      clicked = true;
    });
    newDiv.addEventListener("mousemove", (e) => {
      if (clicked) {
        e.currentTarget.className = "pixel";
      }
    });
    divContainer.appendChild(newDiv);
  }
};

divContainer.addEventListener("mouseup", () => {
  console.log("not clicking");
  clicked = false;
});

divContainer.addEventListener("mouseleave", () => {
  clicked = false;
  console.log("wentout");
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
