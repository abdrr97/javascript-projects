const cardsContainerEl = document.querySelector('#cards-container')
const colors = ['green', 'red', 'blue', 'black', 'yellow']
const startGameBtn = document.querySelector('#btn')
const cardsListEl = document.querySelectorAll('.card')
let GAME_TIMER = 11
let gameTimerInterval
const gameReset = (e) => {
  clearInterval(gameTimerInterval)
  GAME_TIMER = 10
  cardsListEl.forEach((card, idx) => {
    card.style.backgroundColor = `rgba(204, 204, 204, 0.1${idx})`
  })
}

gameReset()

startGameBtn.addEventListener('click', function (e) {
  startGameBtn.textContent = `Gaming ...`
  e.target.disabled = true

  gameTimerInterval = setInterval(() => {
    console.log(GAME_TIMER)
    GAME_TIMER--
    startGameBtn.textContent = `Timer: 00:${GAME_TIMER}:00`
    e.target.style.color = GAME_TIMER % 2 === 0 ? 'red' : 'white'
    if (GAME_TIMER === -1) {
      // time is up
      alert(`time is up`)
      startGameBtn.textContent = `Restart`
      gameReset(e, true)
      console.log('time is up')
    }
  }, 1000)

  //   card list
  cardsListEl.forEach(function (card, idx) {
    card.style.backgroundColor = 'white'
    card.addEventListener('click', function (e) {
      e.target.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)]
      if (check()) {
        alert('You Won')
      }
    })
  })
})

const check = function () {
  let firstElColor
  let count = 0
  firstElColor = cardsListEl[0].style.backgroundColor

  cardsListEl.forEach(function (card, idx) {
    if (firstElColor == card.style.backgroundColor) {
      count++
    }
  })
  return count === cardsListEl.length
}
