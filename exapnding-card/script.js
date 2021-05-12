const panels = document.querySelectorAll('.panel')


panels.forEach(function (panel) {
    panel.addEventListener('click', function (e) {
        panels.forEach(function (panel) {
            panel.classList.remove('active')
        })
        e.target.classList.toggle('active')
    })
})
