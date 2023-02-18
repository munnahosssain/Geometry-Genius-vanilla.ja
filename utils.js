function userInput(elementId) {
    let triangleHeight = document.getElementById(elementId);
    const triangleHeightElement = parseFloat(triangleHeight.value);

    triangleHeight = '';
    return triangleHeightElement;
}

function setUserValueById(elementId, value,) {
    const triangleDisplay = document.getElementById(elementId);
    triangleDisplay.innerText = value;
}

function setUserValueByDisplay(displayId) {
    const displayValue = document.getElementById(displayId);
    displayValue.style.display = 'block';
}


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