const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']

const left = document.querySelector('#left')
const right = document.querySelector('#right')
const pause = document.querySelector('#pause')
const play = document.querySelector('#play')

const imageContainer = document.querySelector('.image-container')

let index = 0


const moveLeft = function () {

    index = index < (images.length - 1) ? index += 1 : 0
    let image = images[index]
    imageContainer.style.backgroundImage = `url(./images/${image})`
    // imageContainer.setAttribute('src', `./images/${image}`)
}

const moveRight = function () {
    if (index <= images.length) {
        if (index === 0) {
            index = images.length
            return
        }
        index--
    }
    let image = images[index]
    imageContainer.style.backgroundImage = `url(./images/${image})`
    // imageContainer.setAttribute('src', `./images/${image}`)
}

left.addEventListener('click', moveLeft)
index = images.length
right.addEventListener('click', moveRight)

let moving

play.addEventListener('click', function () {
    moving = setInterval(moveLeft, 3000)
})
pause.addEventListener('click', function () {
    clearInterval(moving)
})
