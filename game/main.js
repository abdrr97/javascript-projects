const playerOneEl = document.querySelector('#player-1')
const playerTwoEl = document.querySelector('#player-2')
const pongEl = document.querySelector('#pong')
const boardEl = document.querySelector('#board')

const fps = 15
let gameLoop = null
const rand = () => (Math.random() < 0.5 ? -1 : 1)

const board = {
  width: 800,
  height: 400,
}

const pong = {
  x: board.width / 2,
  y: board.height / 2,
  xSpeed: -15,
  ySpeed: 13,
  width: 20,
  height: 20,
}

const playerOne = {
  y: board.height / 2,
  x: 30, // 10 width & 20 for right
  ySpeed: 30,
  width: 10,
  height: 60,
  score: 0,
}
const playerTwo = {
  y: board.height / 2,
  x: board.width - 30, // 10 width & 20 for right
  ySpeed: 30,
  width: 10,
  height: 60,
  score: 0,
}

gameLoop = setInterval(() => {
  pong.x += pong.xSpeed
  pong.y += pong.ySpeed

  pongEl.style.left = `${pong.x}px`
  pongEl.style.top = `${pong.y}px`

  playerOneEl.style.top = `${playerOne.y}px`
  playerTwoEl.style.top = `${playerTwo.y}px`

  // collision with the players
  // playerOne
  if (
    (pong.x < playerOne.x + playerOne.width &&
      pong.y >= playerOne.y &&
      pong.y <= playerOne.y + playerOne.height) ||
    (pong.x >= playerTwo.x - 30 &&
      pong.y >= playerTwo.y &&
      pong.y <= playerTwo.y + playerTwo.height)
  ) {
    pong.xSpeed *= -1
  }

  //   collision with the board
  if (pong.y >= board.height - pong.height || pong.y <= 0) pong.ySpeed *= -1
  if (pong.x >= board.width - pong.width || pong.x <= 0) {
    pong.x = board.width / 2
    pong.y = board.height / 2
    // pong.xSpeed *= rand()
  }
}, 1000 / fps)

// clearInterval(gameLoop)
document.addEventListener('keydown', (e) => {
  console.log(e.key)
  if (e.code == 'ArrowUp') playerOne.y -= playerOne.ySpeed
  if (e.code == 'ArrowDown') playerOne.y += playerOne.ySpeed
})
document.addEventListener('mousemove', (e) => {
  //   playerTwo.y -= playerTwo.ySpeed
  //   playerTwo.y += playerTwo.ySpeed
  //   if (playerTwo.y <= board.height && playerTwo.y >= 0)
  playerTwo.y = e.y
})
