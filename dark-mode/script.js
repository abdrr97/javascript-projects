const body = document.body
const darkModeToggle = document.querySelector('#dark-mode-toggle')


// load dark mode from local storage
let isDarkMode = localStorage.getItem('dark_mode')
if (isDarkMode === 'on') {
    body.classList.add('dark-mode')
    console.log(isDarkMode)
}


darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode')

    let toggle = body.classList.contains('dark-mode') ? 'on' : 'off'

    localStorage.setItem('dark_mode', toggle)

    // if (body.classList.contains('dark-mode')) {
    //     localStorage.setItem('dark_mode', 'on')
    // } else {
    //     localStorage.setItem('dark_mode', 'off')
    // }
})