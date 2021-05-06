const decrease = document.querySelector('#decrease')
const reset = document.querySelector('#reset')
const increase = document.querySelector('#increase')

let value = 0

decrease.addEventListener('click', function () {
    value--
    text.innerText = value

    text.style.color = value < 0 ? 'red' : value === 0 ? 'blue' : 'green'
    // if (value < 0) {
    //     text.style.color = 'red'
    // } else if (value === 0) {
    //     text.style.color = 'blue'
    // }
    console.log('decrease')
})
reset.addEventListener('click', function () {
    value = 0
    text.innerText = value

    if (value === 0)
        text.style.color = 'blue'

    console.log('reset')
})
increase.addEventListener('click', function () {
    value++
    text.innerText = value

    text.style.color = value > 0 ? 'green' : value === 0 ? 'blue' : 'red'

    // if (value > 0) {
    //     text.style.color = 'green'
    // } else if (value === 0) {
    //     text.style.color = 'blue'
    // }
    console.log('increase')
})