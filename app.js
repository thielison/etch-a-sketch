const container = document.getElementById("container");
let flexItems;

makeRows(16, 16);

flexItems.forEach((item) => {
    item.addEventListener("mouseenter", setDivHoverColor);
});

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

console.log(flexItems);
