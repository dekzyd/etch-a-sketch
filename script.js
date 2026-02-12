const grid = document.querySelector('#container')
grid.classList.add('container')
let gridSize = 16

const customizeButton = document.querySelector('#customize')
customizeButton.addEventListener('click', () => {
    const newGridSize = prompt('Enter grid size (e.g., 16 for 16x16):')
    if(newGridSize === '' || newGridSize === null) {
        return
    }
    
    gridSize = parseInt(newGridSize)
    if(gridSize < 1) gridSize = 1;
    if(gridSize > 100) gridSize = 100;
    if(isNaN(gridSize)) {
        alert('Please enter a valid number')
        return
    }
    createGrid(gridSize)
})

const createGrid = (gridSize) => {
    grid.innerHTML = ''
    grid.setAttribute('style', `width: ${gridSize * 20}px;`)
    for(let i = 0; i < (gridSize ** 2); i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black'
    })
    grid.appendChild(square)
}
}

createGrid(gridSize)