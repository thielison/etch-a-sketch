const container = document.getElementById("container");
const rangeOutput = document.getElementById("range-output");
const rangeInput = document.getElementById("range-input");
const rainbowModeButton = document.getElementById("rainbow-mode-button");
const toggleGridLinesButton = document.getElementById("toggle-grid-lines-button");
const colorPicker = document.getElementById("colorpicker");
const colorModeButton = document.getElementById("color-mode-button");
const clearBoardButton = document.getElementById("clear-board");
const eraserButton = document.getElementById("eraser");
const buttons = document.getElementsByTagName("button");

let flexItems;
let userSelectedColor;

function makeRows(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        let cell = document.createElement("div");
        cell.className = "flex-item";
        container.appendChild(cell);
    }

    flexItems = document.querySelectorAll(".flex-item");
    setDivHoverColor();
}

function setDivHoverColor() {
    toggleButtonSelectedClass(buttons, buttons[0]); // Color Mode button initialize selected

    userSelectedColor = "#000";
    flexItems.forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = userSelectedColor;
        });
    });
}

function setRandomDivHoverColor() {
    toggleButtonSelectedClass(buttons, this);

    flexItems.forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
            const r = Math.round(Math.random() * 256);
            const g = Math.round(Math.random() * 256);
            const b = Math.round(Math.random() * 256);
            const rgb = `rgb(${r},${g},${b})`;

            e.target.style.backgroundColor = rgb;
        });
    });
}

function updateCellsSize() {
    container.innerHTML = ""; // remove existing cells
    const cellSize = rangeInput.value;

    makeRows(cellSize, cellSize);

    flexItems.forEach((item) => {
        item.style.border = "1px solid #000000";
        item.style.width = `calc(100% / ${cellSize})`;
        item.style.height = `calc(100% / ${cellSize})`;
    });
}

function updateGridSizeText() {
    rangeOutput.textContent = rangeInput.value + " x " + rangeInput.value;
}

function toggleGridLines() {
    flexItems.forEach((item) => {
        if (item.style.border == "") {
            item.style.border = "1px solid #000000";
        } else {
            item.style.border = "";
        }
    });
}

function watchColorPicker(e) {
    userSelectedColor = e.target.value;
}

function activateSingleColorMode() {
    toggleButtonSelectedClass(buttons, this);

    flexItems.forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = userSelectedColor;
        });
    });
}

function toggleButtonSelectedClass(buttons, clickedButton) {
    // If button is clicked, add the CSS class "isSelected"
    for (let btn of buttons) {
        btn.classList.remove("isSelected");
    }

    clickedButton.className = "isSelected";
}

function clearBoard() {
    flexItems.forEach((item) => {
        item.style.backgroundColor = "";
    });
}

function enableEraserMode() {
    toggleButtonSelectedClass(buttons, this);

    flexItems.forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "";
        });
    });
}

rangeOutput.textContent = rangeInput.value + " x " + rangeInput.value;

rangeInput.addEventListener("input", updateGridSizeText);
rangeInput.addEventListener("change", updateCellsSize);

rainbowModeButton.addEventListener("click", setRandomDivHoverColor);

toggleGridLinesButton.addEventListener("click", toggleGridLines);

colorPicker.addEventListener("change", watchColorPicker);
colorModeButton.addEventListener("click", activateSingleColorMode);

clearBoardButton.addEventListener("click", clearBoard);

eraserButton.addEventListener("click", enableEraserMode);

makeRows(16, 16); // Initialize grid with 16 x 16 size
