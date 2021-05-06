// Project HOVER
const hover = document.querySelector('#hover')

const onMouseOver = function (e) {
    hover.style.transform = 'scale(1.5)'
}
const onMouseOut = function (e) {
    hover.style.transform = 'scale(1)'
}

hover.addEventListener('mouseover', onMouseOver)
hover.addEventListener('mouseout', onMouseOut)