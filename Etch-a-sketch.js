const mainContainer = document.getElementById('main-container');
const eraseButton = document.getElementById('clear-button');
const rangeSlider = document.getElementById('square-range-slider');
const rangeSliderContainer = document.getElementById('range-slider-container');
createGrid();
let mainContainerSquares = document.querySelectorAll('#innersquares');
addHoverEffect();
const penColor = document.getElementById('pen-color');

        penColor.addEventListener('input', (e) => {
            console.log(e.target.value);
            removeHoverEffect();
            
        })

        eraseButton.addEventListener('click', () => {
            // removeHoverEffect();
            clearGrid();
            createGrid();
            addHoverEffect();
            rangeSlider.valueAsNumber = 32;
            rangeSliderContainer.textContent= ` Grid-Size : ${rangeSlider.valueAsNumber} `;
        });

        rangeSlider.addEventListener('change', () => {
            clearGrid();
            createGrid(rangeSlider.valueAsNumber);
            addHoverEffect();
            rangeSliderContainer.textContent= ` Grid-Size : ${rangeSlider.valueAsNumber} `;
        });



function createGrid(squares = 32){
    for(i=0; i<squares*squares; i++){
        mainContainer.style.gridTemplateColumns = `repeat(${squares}, auto)`;
        const newSquare = document.createElement('div');
        newSquare.id = 'innersquares';
        mainContainer.appendChild(newSquare);
        
    }
}


function addHoverEffect(){
    mainContainerSquares = document.querySelectorAll('#innersquares');
    mainContainerSquares.forEach((square) => {
        square.addEventListener('mouseover', changeColor);
    });
}

function removeHoverEffect(){
    mainContainerSquares = document.querySelectorAll('#innersquares');
    mainContainerSquares.forEach((square) => {
        square.removeEventListener('mouseover', changeColor);
    });
}


function changeColor(e){

    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    e.target.style.background =  `radial-gradient(rgb(${randomR}, ${randomG},${randomB}), rgb(${randomR/2}, ${randomG/2},${randomB/2}))`;

}

function clearGrid(){
    mainContainer.innerHTML = "";
}