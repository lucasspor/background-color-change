let colorInput = document.querySelector("#colorButton")
let colorDisplay = document.querySelector("#colorFill")
let body = document.body

colorInput.addEventListener('input', event => {
    const hexColor = event.target.value.toUpperCase()

    if (hexColor === "#000000") {
        colorInput.style.outline = "1px solid #ffffff"
    } else {
        colorInput.style.outline = "1px solid #030303"
    }

    body.style.backgroundColor = hexColor
    colorDisplay.textContent = hexColor

    localStorage.setItem('backgroundColor', hexColor)
})

window.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('backgroundColor')

    if (savedColor) {
        colorInput.value = savedColor
        body.style.backgroundColor = savedColor
        colorDisplay.textContent = savedColor
    }

})