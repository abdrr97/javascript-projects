const toggleBtn = document.querySelector('#toggle-sidebar')
const main = document.querySelector('main')

toggleBtn.addEventListener('click', function () {
    main.classList.toggle('active')

    let isMainActive = main.classList.contains('active')

    toggleBtn.innerHTML = isMainActive ? '<i class="fas fa-times"></i>' : ' <i class="fas fa-bars"></i>'
})