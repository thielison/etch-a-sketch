const container = document.getElementById("container");
const rangeOutput = document.getElementById("range-output");
const rangeInput = document.getElementById("range-input");

let flexItems;

function makeRows(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        let cell = document.createElement("div");
        cell.className = "flex-item";
        container.appendChild(cell);
    }

    flexItems = document.querySelectorAll(".flex-item");
}

function setDivHoverColor(e) {
    e.target.className += " hover";
}

function updateCellsSize() {
    container.innerHTML = ""; // remove existing cells
    const cellSize = rangeInput.value;

    makeRows(cellSize, cellSize);

    flexItems.forEach((item) => {
        item.style.width = `calc(100% / ${cellSize})`;
        item.style.height = `calc(100% / ${cellSize})`;

        flexItems.forEach((item) => {
            item.addEventListener("mouseenter", setDivHoverColor);
        });
    });
}

function updateGridSizeText() {
    rangeOutput.textContent = rangeInput.value + " x " + rangeInput.value;
}

rangeOutput.textContent = rangeInput.value + " x " + rangeInput.value;

rangeInput.addEventListener("input", updateGridSizeText);
rangeInput.addEventListener("change", updateCellsSize);

makeRows(16, 16); // Initialize grid with 16 x 16 size

flexItems.forEach((item) => {
    item.addEventListener("mouseenter", setDivHoverColor);
});
