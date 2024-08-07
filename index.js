document.addEventListener('DOMContentLoaded', () => {
    createSketchBoard(16);
})

function createSketchBoard(size) {
    const sketchBoard = document.getElementById('sketch-container');

    sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numOfDivs = size * size;

    for(let i = 0; i < numOfDivs; i++){
        let newSquare = document.createElement('div');
        newSquare.style.border = "1px solid black";
        sketchBoard.appendChild(newSquare)
    }
}
