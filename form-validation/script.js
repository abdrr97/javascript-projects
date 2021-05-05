const btn = document.querySelector('#btn')
const username = document.querySelector('#username')
const invalidFeedback = document.querySelector('.invalid-feedback')
const alert = document.querySelector('.alert')

invalidFeedback.style.display = 'none'
alert.style.display = 'none'

const onSubmitClick = function (e) {
    e.preventDefault()

    if (username.value === '' || username.value == null) {
        username.classList.add('shake', 'is-invalid')
        invalidFeedback.style.display = 'block'
    } else {
        alert.style.display = 'block'
        alert.innerHTML += ` <b>${username.value}</b>`
    }
}

username.addEventListener('input', function (e) {

    if (e.target.value !== '' && username.classList.contains('is-invalid')) {
        username.classList.remove('shake', 'is-invalid')
        invalidFeedback.style.display = 'none'
    } else if (username.value === '' || username.value == null) {
        username.classList.add('shake', 'is-invalid')
        invalidFeedback.style.display = 'block'
        alert.style.display = 'none'
        alert.innerHTML = 'form validated'
    }

})

btn.addEventListener('click', onSubmitClick)