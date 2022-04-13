const container = document.getElementById("container");
const resetButton = document.querySelector(".reset");
const newGrid = document.querySelector(".newGrid")

resetButton.addEventListener("click", function() {
    Array.from(document.querySelectorAll(".hovered")).forEach((el) => el.classList.remove('hovered'));
});

//delete current grid and replace with new grid + prompt
newGrid.addEventListener("click", function() {
    let newSquare = prompt("Please enter new dimensions for new box", "16");
    while (newSquare > 100) {
        alert("Please enter a number between 1 and 100.")
        newSquare = prompt("Please enter new dimensions for new box", "16");
    }
    container.innerHTML = "";
    createGrid(newSquare);
});

function createGrid(side) {
    container.style.setProperty('--grid-rows', side);
    container.style.setProperty('--grid-cols', side);
    for (c=0; c < (side * side); c++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseenter', function(event) {
            this.classList.add('hovered');
        });
        container.appendChild(cell).className = "grid-item";
    };
};

   


createGrid(16);