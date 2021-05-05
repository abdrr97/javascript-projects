const counterDecrease = document.querySelector('#counter-decrease')
const counterReset = document.querySelector('#counter-reset')
const counterIncrease = document.querySelector('#counter-increase')

const counter = document.querySelector('#counter')

let value = 0

const onCounterIncrease = function () {
    value++
    counter.innerText = value
    if (value > 0) {
        counter.style.color = 'green'
    } else if (value < 0) {
        counter.style.color = 'red'
    } else {
        counter.style.color = 'black'
    }
}
const onCounterDecrease = function () {
    value--
    counter.innerText = value
    if (value < 0) {
        counter.style.color = 'red'
    } else if (value > 0) {
        counter.style.color = 'green'
    } else {
        counter.style.color = 'black'
    }
}
const onCounterReset = function () {
    counter.innerText = 0
}


counterIncrease.addEventListener('click', onCounterIncrease)
counterReset.addEventListener('click', onCounterReset)
counterDecrease.addEventListener('click', onCounterDecrease)