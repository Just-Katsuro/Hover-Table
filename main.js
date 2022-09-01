const board = document.querySelector('#board')
      colors = ['#4f4cff', '#4c6aff', '#4c9fff', '#4cc7ff', '#7c5bff']
      SQUARES_NUMBER = 1496

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))
    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 2px ${color}`
}
function removeColor(element){
    element.style.backgroundColor = '#171717'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}