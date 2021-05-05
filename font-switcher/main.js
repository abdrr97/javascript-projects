const text = document.querySelector('#text')
const fontSwitch = document.querySelector('#fontSwitch')
const fontSlider = document.querySelector('#fontSlider')
const fontColors = document.querySelector('#fontColor')
const yourText = document.querySelector('#your-text')
const generate = document.querySelector('#generate')

const fontFamily = document.querySelector('#font-family')
const fontSize = document.querySelector('#font-size')
const fontColor = document.querySelector('#font-color')

let family = '', size = '', color = ''

const updateDisplay = function () {
    fontFamily.innerText = family
    fontFamily.style.fontFamily = family
    fontSize.innerText = size
    fontColor.innerText = color
}

const fonts = ['Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif']

fonts.forEach(function (font) {
    const option = document.createElement('option')
    option.setAttribute('value', font)
    option.innerText = font
    fontSwitch.appendChild(option)
})

fontColors.addEventListener('input', function (e) {
    let value = e.target.value
    text.style.color = value
    color = value
})
fontSwitch.addEventListener('input', function (e) {
    let value = e.target.value
    text.style.fontFamily = value
    family = value
})
fontSlider.addEventListener('input', function (e) {
    let value = e.target.value
    text.style.fontSize = `${value}px`
    size = value
})
yourText.addEventListener('input', function (e) {
    let value = e.target.value
    text.innerText = value
})

generate.addEventListener('click', function () {
    updateDisplay()
})