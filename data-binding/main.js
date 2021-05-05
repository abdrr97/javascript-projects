const textInput = document.querySelector('#textInput')
const text = document.querySelector('#text')

textInput.addEventListener('input', function (e) {
    text.innerText = e.target.value
})