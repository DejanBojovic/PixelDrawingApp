// selecting div that holds all the rows with pixel divs
const mainDiv = document.querySelector(".main");
// default color for the drawing is black
let color = "#000";
// adding event listener to the window object too wait for "space" key to be pressed in order to start drawing
window.addEventListener("keydown", function(event) {
    // checking if "space is pressed"
    // keyCode for "space" is 32
    if(event.keyCode === 32) {
        mainDiv.addEventListener("mouseover", function(e) {
            // if "space" is pressed add value of "color" variable to the div that user hovers over with their mouse
            e.target.style.background = color;
        })
    }
})

// adding event listener to window object to look for keyup of "space" key
// when that happens mouse turns into eraser tool
window.addEventListener("keyup", function() {
    mainDiv.addEventListener("mouseover", function(e) {
        // removing value of background property for the pixel div on mouseover - mimics the eraser tool
        e.target.style.background = "";
    })
})

// button that reset the whole main and removes all background color values of the pixels
// selecting button reset - eraser image
const buttonReset = document.querySelector(".button-reset");
// selecting all the divs that have "square" class - pixels
const divsSquare = document.querySelectorAll(".square");
// removing value of background property for all the pixels
buttonReset.addEventListener("click", function() {
    for(let i = 0; i < divsSquare.length; i++) {
        divsSquare[i].style.background = "";
    }
})

// button that changes color of the pen
const colorButton = document.querySelector(".color-picker");
// getting color value form color pickerinput and adding that to the color variable
colorButton.addEventListener("input", function(e) {
    // color is updated and user can draw with selected color
    color = e.target.value;
})