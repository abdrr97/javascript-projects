let DOM_PROJECTS_URL = './dom-projects.json', API_PROJECTS_URL = './api-projects.json'

const projectSection = document.querySelector('#projects-section')
const darkModeBtn = document.querySelector('#dark-mode')
const domTagBtn = document.querySelector('.dom-tag'), apiTagBtn = document.querySelector('.api-tag')


const loadAPI = async (url) => {
    projectSection.classList.add('is-loading')

    const promise = await fetch(url)
    const data = await promise.json()

    data.map(({ project_title, project_path }) => {
        projectSection.innerHTML += `
        <a target="_blank" href="${project_path}" class="project">
            <h5>${project_title.toUpperCase()}</h5>
            <span>view project</span>
        </a>
        `
    })

    projectSection.classList.remove('is-loading')
}

const loadDOMProjects = async () => {
    if (domTagBtn.classList.contains('active')) {
        return
    }

    projectSection.innerHTML = '<div class="loading"></div>'
    domTagBtn.classList.add('active')
    apiTagBtn.classList.remove('active')

    loadAPI(DOM_PROJECTS_URL)
}

const loadAPIProjects = async () => {
    if (apiTagBtn.classList.contains('active')) {
        return
    }

    projectSection.innerHTML = '<div class="loading"></div>'
    domTagBtn.classList.remove('active')
    apiTagBtn.classList.add('active')

    loadAPI(API_PROJECTS_URL)
}




// events
domTagBtn.addEventListener('click', loadDOMProjects)
apiTagBtn.addEventListener('click', loadAPIProjects)
darkModeBtn.addEventListener('click', () => alert("I'm sill working on it 😋"))

loadDOMProjects()