let grid = document.getElementById("grid");

const createGrid = (num) => {
    grid.innerHTML = "";
    for (let i = 0; i < num; i++) {
        for(let j = 0; j < num; j++) {
            const element = document.createElement("div");
            grid.append(element);
            element.onmouseover = () => {
                element.classList.add("touched");
            }
        }
    }
}
createGrid(16);

let button = document.getElementById("new-grid");
button.onclick = () => {
    const newNum = prompt("How many squares per side?")
    createGrid(newNum);
}