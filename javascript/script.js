const container = document.querySelector('.container');
const sizeButton = document.querySelector('.size');
const resetButton = document.querySelector('.reset');
const borderButton = document.querySelector('.border');
const rainbowButton = document.querySelector('.rainbow');
let gridSize = 16;
let isBorderVisible = false;
let isRainbowMode = false;


function createGrid(size) {
    container.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.style.width = `${500 / size}px`;
            div.style.height = `${500 / size}px`;
            div.addEventListener('mouseover', () => {
                if (div.style.backgroundColor === '') {
                    div.style.backgroundColor = isRainbowMode ? getRandomColor() : 'black';
                }
            });
            container.appendChild(div);

        }
    }
    toggleBorder(isBorderVisible);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random between 0-255
    const g = Math.floor(Math.random() * 256); // Random between 0-255
    const b = Math.floor(Math.random() * 256); // Random between 0-255
    return `rgb(${r}, ${g}, ${b})`; // Collect all to a string
}


function toggleBorder(isBorderVisible) {
    let divs = document.querySelectorAll('.container div');

    divs.forEach(div => {
        div.style.border = isBorderVisible ? '1px solid black' : 'none';
        div.style.boxSizing = 'border-box';
    });
}


sizeButton.addEventListener('click', () => {
    let tempGridSize = gridSize;
    gridSize = prompt('Enter a number between 1 and 100');
    gridSize = parseInt(gridSize);
    if (!Number.isInteger(gridSize) || gridSize > 100 || gridSize < 1) {
        alert('Resize failed! Enter a number between 1 and 100');
        gridSize = tempGridSize;
    } else {
        createGrid(gridSize);
    }
});

resetButton.addEventListener('click', () => createGrid(gridSize));

borderButton.addEventListener('click', () => {
    isBorderVisible = !isBorderVisible;
    toggleBorder(isBorderVisible);
});

rainbowButton.addEventListener('click', () => isRainbowMode = !isRainbowMode);

createGrid(gridSize);