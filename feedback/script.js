const cardDeck = document.querySelector('.card-deck')
const result = document.querySelector('.result')
const reviewSelection = document.querySelector('.review-selection')
const review = document.querySelector('#review')
const refresh = document.querySelector('#refresh')
const exit = document.querySelector('.exit')


exit.addEventListener('click', function (e) {

    exit.parentElement.style.display = 'none'

})

refresh.addEventListener('click', function () {
    window.location.reload()
})

const feedbacks = [
    {
        emoji: '😢',
        message: 'UnHappy'
    },
    {
        emoji: '😐',
        message: 'Neutral'
    },
    {
        emoji: '😀',
        message: 'Satisfied'
    },
    {
        emoji: '😡',
        message: 'Angry'
    },
    {
        emoji: '🤮',
        message: 'Sick'
    },
]

feedbacks.forEach(function (feedback) {

    cardDeck.innerHTML += `
    <div class="card">
    <div class="emoji">${feedback.emoji}</div>
    <div class="message">${feedback.message}</div>
    </div>
    `
})

// selected all cards after creation
const cards = document.querySelectorAll('.card')

cards.forEach(function (card) {

    card.addEventListener('click', function (e) {

        cards.forEach(function (card) {
            card.classList.remove('selected')
        })
        card.classList.toggle('selected')
    })

})

const sendReview = document.querySelector('#send-review')


sendReview.addEventListener('click', function (e) {
    const selectedReview
        = document.querySelector('.selected')


    if (selectedReview != null) {
        result.style.display = 'block'
        reviewSelection.style.display = 'none'
        review.innerText = selectedReview.children[1].innerText
    } else {
        exit.parentElement.style.display = 'block'
    }
})