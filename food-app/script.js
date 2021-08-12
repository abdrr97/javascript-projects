const imageContainer = document.querySelector('.image-container')
const generateBtn = document.querySelector('#generate')
let API_URL = 'https://foodish-api.herokuapp.com/api/'

generateBtn.addEventListener('click', getImage)

getImage()

function getImage() {
  generateBtn.classList.add('is-loading')

  fetch(API_URL)
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      let picture = data.image
      imageContainer.style.backgroundImage = `url(${picture})`
      generateBtn.classList.remove('is-loading')
    })
}
