const grid = document.querySelector('#container')

grid.classList.add('container')

for(let i = 0; i < 256; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black'
    })
    grid.appendChild(square)
}