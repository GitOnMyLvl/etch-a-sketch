const container = document.querySelector('.container');
const sizeButton = document.querySelector('.size');
let gridSize = 16;


function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.style.width = `${500 / gridSize}px`;
            div.style.height = `${500 / gridSize}px`;
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            });
            container.appendChild(div);
        }
    }
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

createGrid(gridSize);