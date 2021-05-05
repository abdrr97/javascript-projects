
const body = document.body
const box = document.querySelector('#box')
const btn = document.querySelector('.btn')

const quotes =
    [
        'im here',
        'and here',
        'you know me very well 💘',
        'click any where 😊',
        'ta fi9 m3aya',
        'waili tamalk',
        'bchwia asa7bi'
    ]

body.addEventListener('click', function (e) {
    box.style.top = `${e.clientY}px`
    box.style.left = `${e.clientX}px`

    const rnd = Math.floor(Math.random() * quotes.length)

    box.innerText = quotes[rnd]
})