const container = document.getElementById("container");
const resetButton = document.querySelector(".reset")

resetButton.addEventListener("click", () => {
    createGrid(16, 16);
})

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c=0; c < (rows * cols); c++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseenter', function(event) {
            this.classList.add('hovered');
        });
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

function purple() {
    item.setAttribute('style', 'background-color:blue;')
}

createGrid(16, 16);