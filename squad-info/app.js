let data = [
    {
        name: 'Mateo',
        age: '30'
    },
    {
        name: 'Sarah',
        age: '32'
    },
    {
        name: 'John',
        age: '20'
    },
    {
        name: 'Tim',
        age: '27'
    },
    {
        name: 'Sam',
        age: '22'
    },
    {
        name: 'Joey',
        age: '34'
    }
];

const info = document.querySelector('#info');

data.forEach(function (item) {
    info.innerHTML += `<div>${item.name} is ${item.age} years old</div>`
});