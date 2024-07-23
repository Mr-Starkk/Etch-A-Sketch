const mainContainer = document.getElementById('main-container');
const eraseButton = document.getElementById('clear-button');
const rangeSlider = document.getElementById('square-range-slider');
const rangeSliderContainer = document.getElementById('range-slider-container');
let mainContainerSquares = document.querySelectorAll('#innersquares');
const penColor = document.getElementById('pen-color');
const backgroundColor = document.getElementById('background-color');
let toggleShade = false;
const toggleShadeButton = document.getElementById('grid-border');
createGrid(rangeSlider.valueAsNumber);
addHoverEffect();



eraseButton.addEventListener('click', () => {
    clearGrid();
    createGrid();
    addHoverEffect();
    rangeSlider.valueAsNumber = 32;
    rangeSliderContainer.textContent = ` Grid-Size : ${rangeSlider.valueAsNumber} `;
});

rangeSlider.addEventListener('change', () => {
    clearGrid();
    createGrid(rangeSlider.valueAsNumber);
    addHoverEffect();
    rangeSliderContainer.textContent = ` Grid-Size : ${rangeSlider.valueAsNumber} `;
});

penColor.addEventListener('input', (e) => {
    const selectedColor = e.target.value;
    removeHoverEffect();
    mainContainerSquares = document.querySelectorAll('#innersquares');
    mainContainerSquares.forEach((square) => {
        square.addEventListener('mouseover', (e) => addPenColor(e, selectedColor));
    });

})

backgroundColor.addEventListener('input', (e) => {
    mainContainer.style.background = e.target.value;
})

//         toggleBorder.addEventListener('click', (e) => {
//             mainContainerSquares.forEach((square) => {
//                 if(square.style.border == '1px solid transparent'){
//                     square.style.borderBottom = '1px solid rgb(97, 97, 97)';
//                     square.style.borderRight = '1px solid rgb(97, 97, 97)';
//                 }else {
//                     square.style.border = '1px solid transparent';
//                 }

//             })
//         })
toggleShadeButton.addEventListener('click', () => {
    if (toggleShade) { toggleShade = false; } else { toggleShade = true; } console.log(toggleShade)
})

function addHoverEffect() {
    mainContainerSquares = document.querySelectorAll('#innersquares');
    mainContainerSquares.forEach((square) => {
        square.addEventListener('mouseover', changeColor);
    });
}

function removeHoverEffect() {
    mainContainerSquares = document.querySelectorAll('#innersquares');
    mainContainerSquares.forEach((square) => {
        square.removeEventListener('mouseover', changeColor);
    });
}


function changeColor(e) {
    if (!toggleShade) {
        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        e.target.style.background = `radial-gradient(rgb(${randomR}, ${randomG},${randomB}), rgb(${randomR / 2}, ${randomG / 2},${randomB / 2}))`;
    } else {
        if (!(e.target.style.background)) {
            e.target.style.background = 'rgb(0,0,0)';
            e.target.style.opacity = '0.1';
        } else {
            e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
        }
    }

}


function clearGrid() {
    mainContainer.innerHTML = "";
}


function addPenColor(e, selectedColor) {
    e.target.style.background = `${selectedColor}`;
}


function createGrid(num = 32) {
    for (let i = 0; i < num * num; i++) {
        const newSquare = document.createElement('div')
        newSquare.id = 'innersquares';
        newSquare.style.cssText = `flex-basis:${100 / num}%;`;
        mainContainer.appendChild(newSquare);
    }
}