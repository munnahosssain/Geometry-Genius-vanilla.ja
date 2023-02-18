document.getElementById('goto-blog').addEventListener('click', function () {
    window.location.href = 'blog.html';
});

// Background color change when Entire Mouse on the cart.
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}
const element = document.getElementById('random-colors');
document.getElementById('random-colors').addEventListener("mouseenter", function (event) {
    element.style.backgroundColor = randomColor();
});

// document.querySelectorAll('circle').addEventListener('mouseover', event => {
//     event.target.style.fill = randomColor();
// });

function userInput(elementId) {
    let triangleHeight = document.getElementById(elementId);
    const triangleHeightElement = parseFloat(triangleHeight.value);



    triangleHeight = '';

    const display = document.getElementById('triangle');
    display.style.display = 'block';
}

function setDisplayById(elementId, value) {
    const triangleDisplay = document.getElementById(elementId);
    triangleDisplay.innerText = value;
}


document.getElementById('triangle-calculation').addEventListener('click', function () {
    const resultBase = userInput('triangle-base');
    const resultHeight = userInput('triangle-height');
    const result = (.5 * resultBase * resultHeight);
    setDisplayById('triangle-display', result);
    console.log(result);
});

document.getElementById('rectangle-calculation').addEventListener('click', function () {
    const triangleBase = document.getElementById('rectangle-width');
    const triangleBaseElement = parseFloat(triangleBase.value);

    const triangleHeight = document.getElementById('rectangle-length');
    const triangleHeightElement = parseFloat(triangleHeight.value);

    result = (triangleBaseElement * triangleHeightElement);
    const triangleDisplay = document.getElementById('rectangle-display');
    triangleDisplay.innerText = result;

    const display = document.getElementById('rectangle');
    display.style.display = 'block';

});

document.getElementById('parallelogram-calculation').addEventListener('click', function () {
    const triangleBase = document.getElementById('parallelogram-base');
    const triangleBaseElement = parseFloat(triangleBase.innerText);

    const triangleHeight = document.getElementById('parallelogram-height');
    const triangleHeightElement = parseFloat(triangleHeight.innerText);

    result = (triangleBaseElement * triangleHeightElement);
    const triangleDisplay = document.getElementById('parallelogram-display');
    triangleDisplay.innerText = result;

    const display = document.getElementById('parallelogram');
    display.style.display = 'block';
});

document.getElementById('rhombus-calculation').addEventListener('click', function () {
    const triangleBase = document.getElementById('diagonal-one');
    const triangleBaseElement = parseFloat(triangleBase.innerText);

    const triangleHeight = document.getElementById('diagonal-two');
    const triangleHeightElement = parseFloat(triangleHeight.innerText);

    result = (.5 * triangleBaseElement * triangleHeightElement);
    const triangleDisplay = document.getElementById('rhombus-display');
    triangleDisplay.innerText = result;

    const display = document.getElementById('rhombus');
    display.style.display = 'block';
});

document.getElementById('pentagon-calculation').addEventListener('click', function () {
    const triangleBase = document.getElementById('pentagon-perimeter');
    const triangleBaseElement = parseFloat(triangleBase.innerText);

    const triangleHeight = document.getElementById('pentagon-base');
    const triangleHeightElement = parseFloat(triangleHeight.innerText);

    result = (triangleBaseElement * triangleHeightElement);
    const triangleDisplay = document.getElementById('pentagon-display');
    triangleDisplay.innerText = result;

    const display = document.getElementById('pentagon');
    display.style.display = 'block';
});

document.getElementById('ellipse-calculation').addEventListener('click', function () {
    const triangleBase = document.getElementById('ellipse-area');
    const triangleBaseElement = parseFloat(triangleBase.innerText);

    const triangleHeight = document.getElementById('ellipse-base');
    const triangleHeightElement = parseFloat(triangleHeight.innerText);

    result = (3.15 * triangleBaseElement * triangleHeightElement);
    const triangleDisplay = document.getElementById('ellipse-display');
    triangleDisplay.innerText = result;

    const display = document.getElementById('ellipse');
    display.style.display = 'block';
});