let highNumber = 255;
let lowNumber = 0;

const bodyEl = document.body;
const h1El = document.querySelector('h1');

const setDarker = setInterval(function() {
    if (highNumber > 0) {
        bodyEl.style.backgroundColor = `rgb(${highNumber}, ${highNumber}, ${lowNumber})`;
        h1El.style.color = `rgb(${lowNumber}, ${lowNumber}, ${highNumber})`;
        highNumber --;
        lowNumber ++;
    } else {
        clearInterval(setDarker);
        alert('Done');
    }
}, 10);
