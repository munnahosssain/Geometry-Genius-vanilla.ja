document.getElementById('goto-blog').addEventListener('click', function () {
    window.location.href = 'blog.html';
});

const element = document.getElementsByClassName('random-colors');
for (const colorRandom of element) {
    colorRandom.addEventListener("mouseenter", function () {
        colorRandom.style.backgroundColor = randomColor();
    })
}

document.getElementById('triangle-calculation').addEventListener('click', function () {
    const resultBase = userInput('triangle-base');
    const resultHeight = userInput('triangle-height');
    if (isNaN(resultBase) || isNaN(resultHeight) || resultBase < 0 || resultHeight < 0) {
        return alert("Please enter valid number");
    }
    else {
        const result = (.5 * resultBase * resultHeight).toFixed(2);
        setUserValueById('triangle-display', result);
        setUserValueByDisplay('triangle');
    }

});

document.getElementById('rectangle-calculation').addEventListener('click', function () {
    const resultBase = userInput('rectangle-width');
    const resultHeight = userInput('rectangle-length');

    if (isNaN(resultBase) || isNaN(resultHeight) || resultBase < 0 || resultHeight < 0) {
        return alert("Please enter valid number");
    }

    const result = (resultBase * resultHeight);
    setUserValueById('rectangle-display', result);
    setUserValueByDisplay('rectangle');

});

document.getElementById('parallelogram-calculation').addEventListener('click', function () {
    const parallelogramBase = constValue('parallelogram-base');
    const parallelogramHeight = constValue('parallelogram-height');

    result = (parallelogramBase * parallelogramHeight).toFixed(2);
    setConstValueById('parallelogram-display', result);
    setConstValueByDisplay('parallelogram');
});

document.getElementById('rhombus-calculation').addEventListener('click', function () {
    const triangleBase = constValue('diagonal-one');
    const triangleHeight = constValue('diagonal-two');

    result = (.5 * triangleBase * triangleHeight).toFixed(2);
    setConstValueById('rhombus-display', result);
    setConstValueByDisplay('rhombus');
});

document.getElementById('pentagon-calculation').addEventListener('click', function () {
    const triangleBase = constValue('pentagon-perimeter');
    const triangleHeight = constValue('pentagon-base');

    result = (triangleBase * triangleHeight).toFixed(2);
    setConstValueById('pentagon-display', result);
    setConstValueByDisplay('pentagon');
});

document.getElementById('ellipse-calculation').addEventListener('click', function () {
    const triangleBase = constValue('ellipse-area');
    const triangleHeight = constValue('ellipse-base');

    result = (3.15 * triangleBase * triangleHeight).toFixed(2);
    setConstValueById('ellipse-display', result);

    setConstValueByDisplay('ellipse');
});