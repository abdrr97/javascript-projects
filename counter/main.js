const counterDecrease = document.querySelector('#counter-decrease')
const counterReset = document.querySelector('#counter-reset')
const counterIncrease = document.querySelector('#counter-increase')

const counter = document.querySelector('#counter')

let value = 0

counterIncrease.addEventListener('click', function () {
    value++
    counter.innerText = value
})
counterReset.addEventListener('click', function () {
    counter.innerText = 0
})
counterDecrease.addEventListener('click', function () {
    value--
    counter.innerText = value
})