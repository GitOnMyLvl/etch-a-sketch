const container = document.querySelector('.container');
const sizeButton = document.querySelector('.size');
const resetButton = document.querySelector('.reset');
let gridSize = 16;


function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.style.width = `${500 / gridSize}px`;
            div.style.height = `${500 / gridSize}px`;
            div.addEventListener('mouseover', () => {
                if (div.style.backgroundColor === '') {
                    div.style.backgroundColor = getRandomColor();
                }
            });
            container.appendChild(div);
        }
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random between 0-255
    const g = Math.floor(Math.random() * 256); // Random between 0-255
    const b = Math.floor(Math.random() * 256); // Random between 0-255
    return `rgb(${r}, ${g}, ${b})`; // Collect all to a string
}



sizeButton.addEventListener('click', () => {
    gridSize = prompt('Enter a number between 1 and 100');
    if (gridSize > 100 || gridSize < 1) {
        alert('Resize failed! Enter a number between 1 and 100');
    } else {
        container.innerHTML = '';
        createGrid(gridSize);
    }
});

resetButton.addEventListener('click', () => {
    container.innerHTML = '';
    createGrid(gridSize);
});

createGrid(gridSize);