let CURRENT_NUM = 16;
let grid = document.getElementById("grid");

const createGrid = (num) => {
  if (num < 1 || num > 100) {
    CURRENT_NUM = 16;
    num = CURRENT_NUM;
  }
  grid.innerHTML = "";
  const root = document.querySelector(":root");
  root.style.setProperty("--numRows", num);
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const element = document.createElement("div");
      grid.append(element);
      element.onmouseover = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const a = Math.random() + 0.2;
        element.style.backgroundColor = "rgba(" + [r, g, b, a].join(",") + ")";
      };
    }
  }
};
createGrid(16);

let newButton = document.getElementById("new-grid");
newButton.onclick = () => {
  CURRENT_NUM = prompt("How many squares per side? From 1 to 100");
  createGrid(CURRENT_NUM);
};

let clearButton = document.getElementById("clear-grid");
clearButton.onclick = () => {
  createGrid(CURRENT_NUM);
};
