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

rangeOutput.textContent = rangeInput.value + " x " + rangeInput.value;
rangeInput.addEventListener("input", (e) => {
    rangeOutput.textContent = e.target.value + " x " + e.target.value;
});

makeRows(16, 16);

flexItems.forEach((item) => {
    item.addEventListener("mouseenter", setDivHoverColor);
});
