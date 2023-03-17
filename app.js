const container = document.getElementById("container");

function makeRows(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        let cell = document.createElement("div");
        cell.className = "grid-item";
        container.appendChild(cell);
    }
}

makeRows(64, 64);
