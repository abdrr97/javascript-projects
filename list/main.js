const btnGroup = document.querySelector('#btn-group')
const contianer = document.querySelector('#contianer')
const list = document.querySelector('#list')
const grid = document.querySelector('#grid')


btnGroup.addEventListener('click', function (e) {
    const target = e.target

    if (target.id === 'list' || target.parentElement.id === 'list') {
        list.classList.toggle('btn-dark')
        grid.classList.toggle('btn-dark')
    }
    if (target.id === 'grid' || target.parentElement.id === 'grid') {
        grid.classList.toggle('btn-dark')
        list.classList.toggle('btn-dark')
    }

    contianer.classList.toggle('grid')
})