const colors = ['green', 'red', 'blue', 'black', 'yellow']
const btn = document.querySelector('#btn')
const generatedCardsListEl = document.querySelectorAll('.card.random')
const cardsListEl = document.querySelectorAll('.card.result')

let patternList = [],
  init = null,
  diffucltyCount = 16

btn.addEventListener('click', (e) => {
  init = setInterval(() => {
    // setTimeout(() => (generatedCardsListEl[i].style.background = 'white'), 200)

    let i = Math.floor(Math.random() * generatedCardsListEl.length)
    let rc = Math.floor(Math.random() * colors.length)
    if (patternList.length !== diffucltyCount) {
      while (patternList.find((p) => p.i === i)) {
        i = Math.floor(Math.random() * generatedCardsListEl.length)
      }
    }
    generatedCardsListEl[i].style.background = colors[rc]
    patternList.push({ i, rc })

    e.target.textContent = `Generating ... | ${patternList.length}`
    if (patternList.length === diffucltyCount) {
      e.target.textContent = `Done !`
      clearInterval(init)
      patternList = []
      // generatedCardsListEl.forEach((card) => {
      //   card.style.background = 'white'
      // })
    }
  }, 100)
})

cardsListEl.forEach((card, idx) => {
  card.addEventListener('click', (e) => {
    const i = Math.floor(Math.random() * colors.length)

    e.target.style.background = colors[i]
  })
})
