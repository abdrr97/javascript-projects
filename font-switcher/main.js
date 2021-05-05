const text = document.querySelector('#text')
const fontSwitch = document.querySelector('#fontSwitch')
const fontSlider = document.querySelector('#fontSlider')
const fontColor = document.querySelector('#fontColor')
const yourText = document.querySelector('#your-text')

const fonts = ['Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif']

fonts.forEach(function (font) {
    const option = document.createElement('option')
    option.setAttribute('value', font)
    option.innerText = font
    fontSwitch.appendChild(option)
})

fontColor.addEventListener('input', function (e) {
    let value = e.target.value
    text.style.color = value
})
yourText.addEventListener('input', function (e) {
    let value = e.target.value
    text.innerText = value
})
fontSwitch.addEventListener('input', function (e) {
    let value = e.target.value
    text.style.fontFamily = value
})
fontSlider.addEventListener('input', function (e) {
    let value = e.target.value
    text.style.fontSize = `${value}px`
})