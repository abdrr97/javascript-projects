console.log('todos')

// todo input
const todo = document.querySelector('#todo')

// add todo button
const addTodoBtn = document.querySelector('#btn')

// todos list
const todosList = document.querySelector('#todos')

// clear all todos button
const clearAll = document.querySelector('#clearAll')

// filter
const filter = document.querySelector('#filter')

// todos array of todo object
let todos = []


const onAddTodoClick = function (e) {
    e.preventDefault()

    if (todo.value !== '') {

        let obj = {
            todo: todo.value,
            completed: false
        }
        todos.push(obj)

        localStorage.setItem('todos', JSON.stringify(todos))

        createTodoListElement(todo)
    }
}

const onDeleteTodoClick = function (e) {
    if (e.target.classList.contains('todo')) {
        todos.forEach(function (todoElement, index) {
            if (todoElement.todo === e.target.innerText) {
                todoElement = {
                    todo: todoElement.todo,
                    completed: todoElement.completed ? false : true
                }
                todos[index] = todoElement
                e.target.classList.toggle('completed')
                localStorage.setItem('todos', JSON.stringify(todos))
            }
        })
        console.log(todos);
    }
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
    todos.forEach(function (todoElement) {
        createTodoListElement(todoElement)
    });

}

const createTodoListElement = function (value) {
    // create todo element
    const li = document.createElement('li')
    const a = document.createElement('a')
    const icon = document.createElement('i')

    li.classList.add('todo', 'slidedown')
    li.innerText = value.value || value.todo
    if (value.completed) {
        li.classList.add('completed')
    }
    a.classList.add('delete-todo')
    a.setAttribute('href', '#')
    icon.className = 'fas fa-trash'

    a.appendChild(icon)
    li.appendChild(a)

    todosList.appendChild(li)
    todo.value = ''


    setTimeout(function () {
        li.classList.add('show')
    }, 100);
}

const onClearAllClick = function (e) {
    todo.value = ''
    todosList.innerHTML = ''
    localStorage.clear()
}

// this loads all todos from localStorage and show them 
document.addEventListener('DOMContentLoaded', loadTodos)

// add todo
addTodoBtn.addEventListener('click', onAddTodoClick)

// deleting or completing a todo
todosList.addEventListener('click', onDeleteTodoClick)

// clearing all todos form LS
clearAll.addEventListener('click', onClearAllClick)

// filtring todos
filter.addEventListener('input', (e) => {

    let keyword = e.target.value.toLowerCase()

    let filterdTodos = todos.filter(function (val) {
        if (keyword != '' && val.todo.includes(keyword)) {
            return val
        }
    })
    todosList.innerHTML = ''
    filterdTodos.forEach(function (todoElement) {
        createTodoListElement(todoElement)
    });
    if (keyword === '') {
        filterdTodos = []
        todos.forEach(function (todoElement) {
            createTodoListElement(todoElement)
        });
    }
})
