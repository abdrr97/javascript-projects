const generate = document.querySelector('#generate')
const colorCode = document.querySelector('#color-code')
colorCode.innerText = '#FFFFFF'

generate.addEventListener('click', function () {

    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    const color = `rgb(${r},${g},${b})`
    document.body.style.background = color
    colorCode.innerText = color
})

