/**
 * 
 * Calculated for
 * 1. Triangle
 * 2. Rectangle
 */
function userInput(elementId) {
    let elementValueById = document.getElementById(elementId);
    const elementValue = parseFloat(elementValueById.value);
    elementValueById.value = '';
    return elementValue;
}

function setUserValueById(elementId, value,) {
    const elementValueById = document.getElementById(elementId);
    const totalValue = elementValueById.innerText = value;
    if (isNaN(totalValue)) {
        console.log();
    }

}

function setUserValueByDisplay(displayId) {
    const displayValue = document.getElementById(displayId);
    displayValue.style.display = 'block';
}


/**
 * 
 * Calculated for
 * 1. Parallelogram
 * 2. Rhombus
 * 3. Pentagon
 * 4. Ellipse
 */

function constValue(elementId) {
    const elementValueById = document.getElementById(elementId);
    const elementValue = parseFloat(elementValueById.innerText);

    return elementValue;
}

function setConstValueById(elementId, value,) {
    const elementValueById = document.getElementById(elementId);
    return elementValueById.innerText = value;
}


function setConstValueByDisplay(displayId) {
    const displayValue = document.getElementById(displayId);
    displayValue.style.display = 'block';
}

// Background color change when Entire Mouse on the cart.
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}