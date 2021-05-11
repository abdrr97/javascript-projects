// const toggleDarkMode = document.querySelector('#toggleDarkMode')

// const body = document.body


// if (localStorage.getItem('dark_mode') === 'on') {
//     body.classList.add('dark')
// }

// toggleDarkMode.addEventListener('click', function (e) {
//     body.classList.toggle('dark')
//     if (body.classList.contains('dark') == false) {
//         localStorage.setItem('dark_mode', 'off')
//     } else {
//         localStorage.setItem('dark_mode', 'on')
//     }
// })



// const div = document.createElement('div')
// div.className = 'col mb-4'
// const card = document.createElement('div')
// card.className = 'card'
// const cardBody = document.createElement('div')
// cardBody.className = 'card-body'
// const cardTitle = document.createElement('h5')
// cardTitle.className = 'card-title'
// const cardText = document.createElement('p')
// cardText.className = 'card-text'

// cardBody.appendChild(cardTitle)
// cardBody.appendChild(cardText)

// card.appendChild(cardBody)

// div.appendChild(card)

// main.appendChild(div)


// const users = [
//     {
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz",
//         address: {
//             street: "Kulas Light",
//             suite: "Apt. 556",
//             city: "Gwenborough",
//             zipcode: "92998-3874",
//         }
//     },
//     {
//         id: 2,
//         name: "Ervin Howell",
//         username: "Antonette",
//         email: "Shanna@melissa.tv",
//         address: {
//             street: "Victor Plains",
//             suite: "Suite 879",
//             city: "Wisokyburgh",
//             zipcode: "90566-7771",
//             geo: {
//                 lat: "-43.9509",
//                 lng: "-34.4618"
//             }
//         }
//     },
//     {
//         id: 3,
//         name: "Clementine Bauch",
//         username: "Samantha",
//         email: "Nathan@yesenia.net",
//         address: {
//             street: "Douglas Extension",
//             suite: "Suite 847",
//             city: "McKenziehaven",
//             zipcode: "59590-4157",
//             geo: {
//                 lat: "-68.6102",
//                 lng: "-47.0653"
//             }
//         }
//     },
//     {
//         id: 4,
//         name: "Patricia Lebsack",
//         username: "Karianne",
//         email: "Julianne.OConner@kory.org",
//         address: {
//             street: "Hoeger Mall",
//             suite: "Apt. 692",
//             city: "South Elvis",
//             zipcode: "53919-4257",
//             geo: {
//                 lat: "29.4572",
//                 lng: "-164.2990"
//             }
//         }
//     },
//     {
//         id: 5,
//         name: "Chelsey Dietrich",
//         username: "Kamren",
//         email: "Lucio_Hettinger@annie.ca",
//         address: {
//             street: "Skiles Walks",
//             suite: "Suite 351",
//             city: "Roscoeview",
//             zipcode: "33263",
//             geo: {
//                 lat: "-31.8129",
//                 lng: "62.5342"
//             }
//         }
//     }
// ]


// const main = document.querySelector('main')

// users.forEach(function (user) {


//     main.innerHTML += `
//         <div class="col mb-4">
//             <div class="card">
//                 <div class="card-body">
//                     <h5 class="card-title d-flex justify-content-between">
//                     ${user.name} <small>@${user.username}</small>
//                     </h5>
//                     <p class="card-text">
//                         <div className="">
//                             ${user.address.street}
//                         </div>
//                         <div className="">
//                             ${user.address.city}
//                         </div>
//                         <div className="">
//                             ${user.address.zipcode}
//                         </div> 
//                         ${user.email}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     `
// })


// const body = document.body
// const box = document.querySelector('#box')

// let array = [
//     'hey wsaap',
//     '👉',
//     '😊',
//     '✏',
//     '🙉',
//     '💘'
// ]


// body.addEventListener('click', function (e) {

//     box.style.top = e.clientY + 'px'
//     box.style.left = `${e.clientX}px`

//     let r = array[Math.floor(Math.random() * (array.length - 1))]

//     box.innerText = r
// })


const quiz = [
    {
        question: 'What the DOM stands for',
        answers: [
            {
                value: 'Document Oriented Model',
                correct: false,
            },
            {
                value: 'Document Object Model',
                correct: true,
            }
        ]
    },
    {
        question: 'What HTML stands for?',
        answers: [
            {
                value: 'Hyper Transform M Language',
                correct: false,
            },
            {
                value: 'Hyrogliphic Transform Markup Language',
                correct: false,
            },
            {
                value: 'Hyper Text Markup Language',
                correct: true,
            },
        ]
    },
    {
        question: 'what is php release year ?',
        answers: [
            {
                value: '1992',
                correct: false,
            },
            {
                value: '1998',
                correct: false,
            },
            {
                value: '1991',
                correct: true,
            },
        ]
    },
]


const nextQuestionBtn = document.querySelector('#next-question')
const question = document.querySelector('#question')
const answers = document.querySelector('.answers')
const quizElement = document.querySelector('.quiz')
let index = 0
let correctAnswers = 0
let endOfQuiz = false

quizQ(index)
nextQuestionBtn.addEventListener('click', function (e) {
    if (endOfQuiz) {
        window.location.reload()
    }
    if (validateForm()) {
        checkAnswers()
        if (index < quiz.length - 1) {
            index++
            quizQ(index)
        } else {
            nextQuestionBtn.innerText = 'Reset'
            nextQuestionBtn.background = 'green'
            quizElement.innerHTML = `
                <h1>
                    Your score is  ${correctAnswers} / ${quiz.length}
                </h1>
            `
            endOfQuiz = true
        }
    }

})

function checkAnswers() {
    let radios = document.getElementsByName("answer");

    radios.forEach(function (radio) {
        if (radio.checked) {
            let label = document.querySelector(`label[for="${radio.id}"]`);
            let a = label.innerText;

            quiz[index].answers.forEach(function (answer) {
                if (answer.value === a && answer.correct) {
                    correctAnswers++
                }
            })
        }
    })
}

function quizQ(index = 0) {
    answers.innerHTML = ''
    question.innerText = quiz[index].question
    quiz[index].answers.forEach(function (answer, index) {
        answers.innerHTML += `
        <li>
            <input 
                class="answer-input" 
                id="answer-${index}" 
                name="answer" 
                type="radio">
            <label class="answer" for="answer-${index}">
                ${answer.value}
            </label>
        </li>
        `
    })
}

// -------------------------
function validateForm() {
    let radios = document.getElementsByName("answer");
    let formValid = false
    radios.forEach(function (radio) {
        if (radio.checked) return formValid = true
    })
    if (!formValid) alert("Must check some option!");
    return formValid;
}
