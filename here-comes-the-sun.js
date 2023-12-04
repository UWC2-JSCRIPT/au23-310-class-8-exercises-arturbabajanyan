let x = 0;

const bodyColor = function() {
    x++;
    if (x <= 255) {
        const color = `rgb(${x}, ${x}, ${x})`;
        document.body.style.backgroundColor = color;
        requestAnimationFrame(bodyColor);
    }
}

requestAnimationFrame(bodyColor);