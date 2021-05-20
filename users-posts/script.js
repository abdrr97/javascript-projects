const userSelectElement = document.querySelector('#users-select')
const postsElement = document.querySelector('#posts')

let USER_API = 'https://jsonplaceholder.typicode.com/users'
let POST_API = 'https://jsonplaceholder.typicode.com/posts'

// this function load users from API
loadUsers()
loadPosts(POST_API)

userSelectElement.addEventListener('change', function (e) {
    console.log(e.target.value)

    let url = POST_API + '?userId=' + e.target.value
    postsElement.innerHTML = `
            <div class="my-5 d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            `
    loadPosts(url)
})

function loadPosts(url) {

    fetch(url)
        .then(function (res) {
            return res.json()

        })
        .then(function (posts) {
            postsElement.innerHTML = ''
            posts.forEach(function (post) {
                postsElement.innerHTML += `
                         <div class="card my-5">
                            <div class="card-header">${post.userId} ${post.title} </div>
                            <div class="card-body">
                                <p class="card-text">${post.body}</p>
                            </div>
                        </div>
                        `
            })
        })

}

function loadUsers() {
    fetch(USER_API)
        .then(function (res) {
            return res.json()
        })
        .then(function (users) {
            users.forEach(function (user) {
                userSelectElement.innerHTML +=
                    `
                        <option value="${user.id}" > ${user.name} </option>
                    `
            })
        })
}
