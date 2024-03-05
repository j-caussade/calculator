const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operators")
let autoClear = true;

// NUMBERS
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", writingNumbers);
};
function writingNumbers(event) {
    if (autoClear == false) {
        clearDisplay();
    } 
    autoClear = true;
    let text = event.target.innerText;
    display.innerText = display.innerText + text;
};

// OPERATORS
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", writingOperators);
};
function writingOperators(event) {
    if (display.innerText == "La tête à Toto !") {
        clearDisplay();
    }
    autoClear = true;
    let text = event.target.innerText;
    display.innerText = display.innerText + text;
    
};

// CALCULATION
const equal = document.querySelector("#equal");
equal.addEventListener("click", calculation);
function calculation() {
    if (display.innerText == "0+0") {
        autoClear = false;
        display.innerText = "La tête à Toto !";
    } else if (display.innerText == "La tête à Toto !") {
        clearDisplay();
    } else {
    result = eval(display.innerText);
    autoClear = false;
    display.innerText = result;
    }
};

// CLEAR
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearDisplay);
function clearDisplay() {
    display.innerText = '';
};

//KEYBOARD
document.addEventListener("keyup", keyboard);
function keyboard(e) {
    console.log(e.code);
    if (e.code == "Numpad1" || e.code == "Numpad2" || e.code == "Numpad3" || e.code == "Numpad4" || e.code == "Numpad5" || e.code == "Numpad6" || e.code == "Numpad7" || e.code == "Numpad8" || e.code == "Numpad9" || e.code == "Numpad0") {
        if (autoClear == false) {
            clearDisplay();
            autoClear = true;
            display.innerText = display.innerText + e.key;
        } else {
            autoClear = true;
            display.innerText = display.innerText + e.key;
        }
    } else if (e.code == "NumpadAdd" || e.code == "NumpadSubtract" || e.code == "NumpadMultiply" || e.code == "NumpadDivide") {
        if (display.innerText == "La tête à Toto !") {
            clearDisplay();
        }
        autoClear = true;
        display.innerText = display.innerText + e.key;
    } else if (e.code == "NumpadEnter") {
        calculation();
    } else if (e.code == "Escape") {
        clearDisplay();
    }
}