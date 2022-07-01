let color = document.querySelectorAll(".color");
let randcolorData = document.querySelector(".randColor");
let result = document.getElementById("result");
let generate = document.getElementById("generate");
let showcolor = document.querySelector(".showColor")
let colArr = [];
generatecolor();
setColor()
let pickedColor;
checkColorData();

function generatecolor() {
    for (let i = 0; i < color.length; i++) {
        colArr.push(`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`)

    }
}
function setColor() {
    colArr.forEach((colors, index) => {
        color[index].style.background = colors;
        color[index].setAttribute("data-colour", colors)
    })
}

function randomColorPicker() {
    let randomColor = colArr[Math.floor(Math.random() * colArr.length)];
    randcolorData.textContent = randomColor;
    return randomColor;
}
pickedColor = randomColorPicker();
function checkColorData() {
    color.forEach((element) => {
        element.addEventListener("click", (e) => {
            if (e.target.dataset.colour === pickedColor) {
                result.textContent = "correct guess.";
                showcolor.style.background = pickedColor;
                setTimeout(() => {
                    reset();
                }, 4000);
            }
            else {
                console.log(element);
                result.textContent = "oh! sit guessed wrong one."
                element.classList.add("fade");
            }
        })
    });
}

function reset() {

    colArr = [];
    generatecolor();
    color.forEach(element => element.classList.remove("fade"))
    setColor();
    checkColorData();
    pickedColor = randomColorPicker();
    showcolor.style.background = "black";
    result.textContent = "Select any color from the bottom div.";

}

generate.addEventListener("click", reset);