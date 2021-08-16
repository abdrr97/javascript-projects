const btnLeftEl = document.querySelector('.left')
const btnRightEl = document.querySelector('.right')
const circlEl = document.querySelector('#circle')
const degEl = document.querySelector('#deg')
const body = document.body
let intLeft,
  intRight,
  rotationAngle = 0

const rotateCircle = () => {
  degEl.textContent = `${rotationAngle}deg`
  circlEl.style.transform = `rotate(${rotationAngle}deg)`
  body.style.backgroundColor = `rgb(${rotationAngle},200,200 )`
  if (rotationAngle >= 360 || rotationAngle <= -360) rotationAngle = 0
}

btnRightEl.addEventListener('click', () => {
  clearInterval(intLeft)
  intRight = setInterval(() => {
    rotationAngle++
    rotateCircle()
    circlEl.style.borderTopColor = `green`
  }, 1)
})
btnLeftEl.addEventListener('click', () => {
  clearInterval(intRight)
  intLeft = setInterval(() => {
    rotationAngle--
    rotateCircle()
    circlEl.style.borderTopColor = `red`
  }, 1)
})
