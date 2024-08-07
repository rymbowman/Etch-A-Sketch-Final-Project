let color;
let click = false;

document.addEventListener('DOMContentLoaded', () => {
    createSketchBoard(16);

    const selectSizeButton = document.getElementById('select-size');
    selectSizeButton.addEventListener('click', function () {
        let size = changeSize();
        createSketchBoard(size);
    })
})

function createSketchBoard(size) {
    const sketchBoard = document.getElementById('sketch-container');
    sketchBoard.innerHTML = '';
    
    sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numOfDivs = size * size;

    for(let i = 0; i < numOfDivs; i++){
        let newSquare = document.createElement('div');
        newSquare.addEventListener('mouseover', divColor)
        sketchBoard.appendChild(newSquare)
    }
}

function changeSize(){
    let newSize = prompt('Please select the size of your board. Please write your answer in an integer between 1-100.');
    let submitFeedback = document.getElementById('submit-feedback')
    if (newSize == ''){
        submitFeedback.innerHTML = "Please try again by typing in an integer between 1 and 100."
    } else if (newSize < 1 || newSize > 100) {
        submitFeedback.innerHTML = "Please make sure to submit an integer between 1 and 100."
    } else {
        submitFeedback.innerHTML = "Draw Away!"
        return newSize;
    }
}

function chooseColor(colorChoice) {
    color = colorChoice
}

function divColor(){
    if (click) {
        if (color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = "black"
        }
    } 
}

function resetSketchPad() {
    const squares = document.querySelectorAll('div');
    squares.forEach((div) => {
        div.style.backgroundColor= "beige"
    })
}

document.querySelector('body').onclick = function(e) {
    if(e.target.tagName != 'BUTTON') {
        click = !click;
        let clickabilityMessage = document.querySelector('#user-click-ability')
        if(click) {
            clickabilityMessage.innerHTML = "You have clicked and can begin drawing. Click again to stop drawing."
        } else {
            clickabilityMessage.innerHTML = "Click the screen to begin drawing."
        }
  }}