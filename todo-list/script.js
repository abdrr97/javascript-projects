console.log('Todo List')

// todo (input)
// btn (button)
// todos (list)


// todo input
const todo = document.querySelector('#todo')

// add todo button
const addTodoBtn = document.querySelector('#btn')

// todos list
const todosList = document.querySelector('#todos')

// todos array of todo object

let todos = []



// on add todo click
const onAddTodoClick = function (e) {
    e.preventDefault()

    if (todo.value !== '') {

        // -------------------

        let obj = {
            id: new Date().getTime(),
            todo: todo.value,
            completed: false
        }
        todos.push(obj)

        localStorage.setItem('todos', JSON.stringify(todos))

        // -------------------

        createTodoListElement(todo.value)
    }
}

const onDeleteTodoClick = function (e) {

    if (e.target.parentElement.classList.contains('delete-todo')) {

        todos.forEach(function (todoElement, index) {
            if (todoElement.todo === e.target.parentElement.parentElement.innerText) {
                todos.splice(index, 1)
                localStorage.setItem('todos', JSON.stringify(todos))
            }
        })

        e.target.parentElement.parentElement.remove()
    }
}

const loadTodos = function (e) {

    if (JSON.parse(localStorage.getItem('todos')) == null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    // todos = JSON.parse(localStorage.getItem('todos'))

    todos.forEach(function (todoElement) {
        createTodoListElement(todoElement.todo)
    });

}

const createTodoListElement = function (value) {
    // create todo element
    const li = document.createElement('li')
    const a = document.createElement('a')
    const icon = document.createElement('i')

    li.classList.add('todo')
    li.innerText = value
    a.classList.add('delete-todo')
    a.setAttribute('href', '#')
    icon.className = 'fas fa-trash'

    a.appendChild(icon)
    li.appendChild(a)

    todosList.appendChild(li)
    todo.value = ''
}

document.addEventListener('DOMContentLoaded', loadTodos)

addTodoBtn.addEventListener('click', onAddTodoClick)

todosList.addEventListener('click', onDeleteTodoClick)
