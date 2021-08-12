const faqs = [
  {
    title: 'Q 1?',
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque dolore incidunt, repellendus odio vitae quasi exceptu`,
  },
  {
    title: 'Q 2?',
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque dolore incidunt, repellendus odio  ullam. Dolorum illo soluta at ipsum?`,
  },
  {
    title: 'Q 3?',
    content: `Lorem ipsum dolor sit, amet vitae quasi excepturi eum voluptate vero ullam. Dolorum illo soluta at ipsum?`,
  },
  {
    title: 'Q 4?',
    content: `Lorem ipsum dol olorum illo soluta at ipsum?`,
  },
]

const cardList = document.querySelector('#card-list')
faqs.forEach(function (faq) {
  cardList.innerHTML += `
        <div class="card">
            <div class="card-header">
                <h3>${faq.title}</h3>
                <button class="btn-toggle">
                    <i class="fa fa-chevron-down"></i>
                </button>
            </div>
            <div class="card-body">
                <p>${faq.content}</p>
            </div>
        </div>
    `
})

const btnsToggle = document.querySelectorAll('.btn-toggle')

btnsToggle.forEach(function (btnToggle) {
  btnToggle.addEventListener('click', function () {
    btnsToggle.forEach(function (btnToggle) {
      btnToggle.innerHTML = '<i class="fa fa-chevron-down"></i>'
      btnToggle.parentElement.parentElement.classList.remove('expanded')
    })
    btnToggle.parentElement.parentElement.classList.add('expanded')

    let isExpanded =
      btnToggle.parentElement.parentElement.classList.contains('expanded')

    // if (isExpanded) {
    //     btnToggle.innerHTML = '<i class="fa fa-times-circle"></i>'
    // } else {
    //     btnToggle.innerHTML = '<i class="fa fa-chevron-down"></i>'
    // }

    btnToggle.innerHTML = isExpanded
      ? '<i class="fa fa-times-circle"></i>'
      : '<i class="fa fa-chevron-down"></i>'
  })
})
