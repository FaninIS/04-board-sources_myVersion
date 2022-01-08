const board = document.querySelector('#board')
const colors = ['#22E0B9', '#AC2AD4', '#EB3B23', '#DE981F', '#3AE033', '#E6CF1E', '#ED1365', '#E320B2', '#9413ED', '#DAE8D5', '#E61103', '#2DEB0C']
const SQUARES_NUMBER = 1200

for (let i = 0; i < SQUARES_NUMBER; i++) {
 const square = document.createElement('div')
 square.classList.add('square')

 square.addEventListener('mouseover', setColor)
 
 square.addEventListener('mouseleave', removeColor)

 board.append(square)
}

function setColor(event) {
 const element = event.target
 const color = getRandomColor()
 element.style.backgroundColor = color
 element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
 const element = event.target
 element.style.backgroundColor = '#1d1d1d'
 element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
 return colors[Math.floor(Math.random() * colors.length)]
}