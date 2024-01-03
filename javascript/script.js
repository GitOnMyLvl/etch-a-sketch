const container = document.querySelector('.container');
let gridSize = 16;


for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const div = document.createElement('div');
        div.style.width = `${500/gridSize}px`;
        div.style.height = `${500/gridSize}px`;
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
        container.appendChild(div);
    }
}


