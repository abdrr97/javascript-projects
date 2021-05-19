const listEl = document.querySelector('#list')
const textInput = document.querySelector('#text')
const amountInput = document.querySelector('#amount')
const addTransBtn = document.querySelector('#btn')
let deleteBtnElements


const balanceEl = document.querySelector('#balance')
const moneyPlusEl = document.querySelector('#money-plus')
const moneyMinusEl = document.querySelector('#money-minus')

let balance = 0, income = 0, expense = 0

addTransBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let listClass = ''
    if (textInput.value !== '' && amountInput.value !== '') {
        let amount = parseFloat(amountInput.value)

        if (amount !== 0) {
            listClass = amount > 0 ? 'plus' : 'minus'

            addBalance(amount)

            listEl.innerHTML += `
                <li class="${listClass}">
                    ${textInput.value} 
                    $<span>${amountInput.value}</span> 
                    <button class="delete-btn">x</button>
                </li>
            `
            deleteTransactions()
        }
        else {
            alert('give poisitive/negative value')
        }
    } else {
        alert('Enter some transaction')
    }

    textInput.value = ''
    amountInput.value = ''
})

function addBalance(amount) {
    if (amount > 0) {
        income += amount
        moneyPlusEl.innerHTML = `+$${income}`
    }
    if (amount < 0) {
        expense += amount
        moneyMinusEl.innerHTML = `-$${expense}`
    }

    balance = income + expense
    balanceEl.innerHTML = `$${balance}`
}

function removeBalance(amount) {
    if (amount > 0) {
        income -= amount
        moneyPlusEl.innerHTML = `+$${income}`
    }
    if (amount < 0) {
        expense -= amount
        moneyMinusEl.innerHTML = `-$${expense}`
    }
    balance = income + expense
    balanceEl.innerHTML = `$${balance}`
}

function deleteTransactions() {
    deleteBtnElements = document.querySelectorAll('.delete-btn')

    deleteBtnElements.forEach(function (deleteBtnElement) {
        deleteBtnElement.addEventListener('click', function () {
            let amount = parseFloat(deleteBtnElement.previousElementSibling.innerText)
            removeBalance(amount)
            deleteBtnElement.parentElement.remove()
        })
    })
}
