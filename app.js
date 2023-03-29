const container = document.getElementById("container");
const rangeOutput = document.getElementById("range-output");
const rangeInput = document.getElementById("range-input");
const rainbowModeButton = document.getElementById("rainbow-mode-button");
const toggleGridLinesButton = document.getElementById("toggle-grid-lines-button");
const colorPicker = document.getElementById("colorpicker");
const colorModeButton = document.getElementById("color-mode-button");

let flexItems = [];
let userSelectedColor = "";
let isRainbowModeActivated = false;
let isGridLinesActivated = false;
let isSingleColorModeActivated = false;

colorModeButton.addEventListener("click", handleClickSingleColorMode);
rainbowModeButton.addEventListener("click", handleClickRainbowColorMode);
toggleGridLinesButton.addEventListener("click", handleClickGridLineMode);
rangeInput.addEventListener("input", updateGridSizeText);
rangeInput.addEventListener("change", updateCellsSize);
colorPicker.addEventListener("change", watchColorPicker);

function makeRows(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        let cell = document.createElement("div");
        cell.className = "flex-item";
        container.appendChild(cell);
    }

    flexItems = document.querySelectorAll(".flex-item");

    setDivHoverColor();
}

function setDivHoverColor(color) {
    userSelectedColor = color;

    flexItems.forEach(item => {
        item.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = userSelectedColor;
        });
    });
}

function updateCellsSize() {
    container.innerHTML = ""; // remove existing cells
    const cellSize = rangeInput.value;

    makeRows(cellSize, cellSize);

    flexItems.forEach(item => {
        item.style.border = "1px solid #000000";
        item.style.width = `calc(100% / ${cellSize})`;
        item.style.height = `calc(100% / ${cellSize})`;
    });
}

function updateGridSizeText() {
    rangeOutput.textContent = rangeInput.value + " x " + rangeInput.value;
    toggleGridLinesButton.classList.add("isActive");
}

function watchColorPicker(e) {
    userSelectedColor = e.target.value;
}

function handleClickSingleColorMode() {
    isSingleColorModeActivated = !isSingleColorModeActivated;
    if (isSingleColorModeActivated) {
        colorModeButton.classList.add("isActive");
        setDivHoverColor("#000");
        rainbowModeButton.classList.remove("isActive-rainbow");
        flexItems.forEach(item => {
            item.addEventListener("mouseenter", e => {
                e.target.style.backgroundColor = userSelectedColor;
            });
        });
    } else {
        colorModeButton.classList.remove("isActive");
        setDivHoverColor("");
    }
}

function handleClickRainbowColorMode() {
    isRainbowModeActivated = !isRainbowModeActivated;

    if (isRainbowModeActivated) {
        rainbowModeButton.classList.add("isActive-rainbow");
        colorModeButton.classList.remove("isActive");

        flexItems.forEach(item => {
            item.addEventListener("mouseenter", e => {
                const r = Math.round(Math.random() * 256);
                const g = Math.round(Math.random() * 256);
                const b = Math.round(Math.random() * 256);
                const rgb = `rgb(${r},${g},${b})`;

                e.target.style.backgroundColor = rgb;
            });
        });
    } else {
        rainbowModeButton.classList.remove("isActive-rainbow");
        setDivHoverColor("");
    }
}

function handleClickGridLineMode() {
    isGridLinesActivated = !isGridLinesActivated;

    if (isGridLinesActivated) {
        toggleGridLinesButton.classList.add("isActive");

        flexItems.forEach(item => {
            item.style.border = "1px solid #000000";
        });
    } else {
        toggleGridLinesButton.classList.remove("isActive");

        flexItems.forEach(item => {
            item.style.border = "";
        });
    }
}

rangeOutput.textContent = rangeInput.value + " x " + rangeInput.value;
makeRows(16, 16); // Initialize grid with 16 x 16 size
