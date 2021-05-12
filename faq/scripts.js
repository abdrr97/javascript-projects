const toggleVisibilityBtns = document.querySelectorAll('.toggle-visibility')

toggleVisibilityBtns.forEach(function (toggleVisibilityBtn) {

    toggleVisibilityBtn.addEventListener('click', function (e) {
        toggleVisibilityBtn.parentElement.classList.toggle('expanded')
        let isExpanded =
            toggleVisibilityBtn.parentElement.classList.contains('expanded')

        toggleVisibilityBtn.innerHTML = isExpanded
            ? '<i class="fa fa-times-circle"></i>'
            : '<i class="fa fa-chevron-down"></i>'

    })
})

