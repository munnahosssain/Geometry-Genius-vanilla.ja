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

document.getElementById('triangle-calculation').addEventListener('click', function () {
    const resultBase = userInput('triangle-base');
    const resultHeight = userInput('triangle-height');

    const result = (.5 * resultBase * resultHeight);
    setUserValueById('triangle-display', result);
    setUserValueByDisplay('triangle');
});

document.getElementById('rectangle-calculation').addEventListener('click', function () {
    const resultBase = userInput('rectangle-width');
    const resultHeight = userInput('rectangle-length');

    const result = (resultBase * resultHeight);
    setUserValueById('rectangle-display', result);
    setUserValueByDisplay('rectangle');

});

document.getElementById('parallelogram-calculation').addEventListener('click', function () {
    const parallelogramBase = constValue('parallelogram-base');
    const parallelogramHeight = constValue('parallelogram-height');

    result = (parallelogramBase * parallelogramHeight);
    setConstValueById('parallelogram-display', result);
    setConstValueByDisplay('parallelogram');
});

document.getElementById('rhombus-calculation').addEventListener('click', function () {
    const triangleBase = constValue('diagonal-one');
    const triangleHeight = constValue('diagonal-two');

    result = (.5 * triangleBase * triangleHeight);
    setConstValueById('rhombus-display', result);
    setConstValueByDisplay('rhombus');
});

document.getElementById('pentagon-calculation').addEventListener('click', function () {
    const triangleBase = constValue('pentagon-perimeter');
    const triangleHeight = constValue('pentagon-base');

    result = (triangleBase * triangleHeight);
    setConstValueById('pentagon-display', result);
    setConstValueByDisplay('pentagon');
});

document.getElementById('ellipse-calculation').addEventListener('click', function () {
    const triangleBase = constValue('ellipse-area');
    const triangleHeight = constValue('ellipse-base');

    result = (3.15 * triangleBase * triangleHeight);
    setConstValueById('ellipse-display', result);

    setConstValueByDisplay('ellipse');
});