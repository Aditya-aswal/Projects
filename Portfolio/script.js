const buttons = document.querySelectorAll(".hi");

const changeBG = () => {
    let colour;
    
    do {
        colour = getRandomColor();
    } while (isColorTooDark(colour));

    document.body.style.background = colour;
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`;
}

function isColorTooDark(color) {
    const hex = color.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

    return brightness < 160;
}

buttons.forEach(button => {
    button.addEventListener("click", changeBG);
});
