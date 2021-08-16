const canvaEl = document.querySelector('.canva')
const boxEl = document.querySelector('#box')
const btnEl = document.querySelector('#btn')

let fps = 15,
  x = 0,
  y = 0,
  xs = 3,
  ys = 15,
  cw = 800,
  ch = 500,
  bw = 50,
  bh = 50
boxEl.style.width = `${bw}px`
boxEl.style.height = `${bh}px`

let gameSetup,
  gameStarted = false

btnEl.onclick = (e) => {
  gameStarted = !gameStarted

  if (gameStarted) {
    init()
    e.target.textContent = `Gaming...`
  } else {
    clearInterval(gameSetup)
    e.target.textContent = `Game Start`
  }
}

const init = () => {
  boxEl.style.width = `${bw}px`
  boxEl.style.height = `${bh}px`
  gameSetup = setInterval(() => {
    x += xs
    y += ys

    boxEl.style.top = `${y}px`
    boxEl.style.left = `${x}px`

    if (y >= ch - bh || y <= 0) ys = ys * -1
    if (x >= cw - bw || x <= 0) xs = xs * -1
  }, 1000 / fps)
}

// const xSpeedEl = document.querySelector('.x-speed')
// const ySpeedEl = document.querySelector('.y-speed')
// const boxWidthEl = document.querySelector('.box-width')
// const boxHeightEl = document.querySelector('.box-height')

// xSpeedEl.addEventListener('input', (e) => {
//   xs = parseInt(e.target.value)
// })
// ySpeedEl.addEventListener('input', (e) => {
//   ys = parseInt(e.target.value)
// })
// boxWidthEl.addEventListener('input', (e) => {
//   bw = parseInt(e.target.value)
// })
// boxHeightEl.addEventListener('input', (e) => {
//   bh = parseInt(e.target.value)
// })
