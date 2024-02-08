document.addEventListener('DOMContentLoaded', function() {
    // Make variables for slider things and the body of page
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const pageBody = document.body;

    // Make function for changing color of background
    function changeBackgroundColor() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        // Make color string of RGB
        const bgColor = `rgb(${red}, ${green}, ${blue})`;

        // Change color of page body background
        pageBody.style.backgroundColor = bgColor;
    }

    // Make slider things do the color change when move them
    redSlider.addEventListener('input', changeBackgroundColor);
    greenSlider.addEventListener('input', changeBackgroundColor);
    blueSlider.addEventListener('input', changeBackgroundColor);
});