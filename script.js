const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
    span.addEventListener('mouseover', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });

    // Initial animation
    setTimeout(() => {
        span.classList.add('active');
    }, 1000 * (idx + 1))
});


const main = document.querySelector('#main')

const links = [
    {
        label: 'circle',
        link: './circle',
    },
    {
        label: 'switch',
        link: './color-switch',
    },
    {
        label: 'counter',
        link: './counter',
    },
    {
        label: 'switcher',
        link: './font-switcher',
    },
    {
        label: 'list',
        link: './list',
    },
    {
        label: 'emoji',
        link: './emoji',
    },
    {
        label: 'data binding',
        link: './data-binding',
    },
    {
        label: 'dark mode',
        link: './dark-mode',
    },
    {
        label: 'squad info',
        link: './squad-info',
    },
    {
        label: 'change the box pos',
        link: './change-the-box-pos',
    },
    {
        label: 'form validation',
        link: './form-validation',
    },
    {
        label: 'carousel',
        link: './carousel',
    }
]

links.forEach(({ link, label }, index) => {
    console.log(index);
    const a = document.createElement('a')
    const h5 = document.createElement('h5')
    a.setAttribute('href', link)
    a.className = 'btn-link col-4 col-sm-4 col-lg-3 card my-4 mx-2 p-3'
    h5.innerText = label.toUpperCase()
    a.appendChild(h5)
    main.appendChild(a)
})