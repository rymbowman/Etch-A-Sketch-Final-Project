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
        newSquare.style.border = "1px solid black";
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
        submitFeedback.innerHTML = "Let's begin!"
        return newSize;
    }
}