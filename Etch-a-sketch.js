const mainContainer = document.getElementById('main-container');
const eraseButton = document.getElementById('clear-button');
const rangeSlider = document.getElementById('square-range-slider');
const rangeSliderContainer = document.getElementById('range-slider-container');
createGrid();
const mainContainerSquares = document.querySelectorAll('#innersquares');





function createGrid(squares = 32){
    for(i=0; i<squares*squares; i++){
        mainContainer.style.gridTemplateColumns = `repeat(${squares}, auto)`;
        const newSquare = document.createElement('div');
        newSquare.id = 'innersquares';
        mainContainer.appendChild(newSquare);
        
    }
}

    mainContainerSquares.forEach((square) => {
    square.addEventListener('mouseover', changeColor);
    });

function changeColor(e){
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    e.target.style.background =  `radial-gradient(rgb(${randomR}, ${randomG},${randomB}), rgb(${randomR/2}, ${randomG/2},${randomB/2}))`;

}

function clearGrid(){
    mainContainer.innerHTML = "";
}
    eraseButton.addEventListener('click', () => {
        clearGrid();
        createGrid();
    });

rangeSlider.addEventListener('change', () => {
        clearGrid();
        createGrid(rangeSlider.valueAsNumber);
        colorChangeOnHover();
        rangeSliderContainer.textContent= ` Grid-Size : ${rangeSlider.valueAsNumber} `;
    });