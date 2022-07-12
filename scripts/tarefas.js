let token = localStorage.getItem('token')
const userDados = document.querySelector('#nameUser')
const createTaskButtonElement = document.querySelector('#createTaskButton')
const skeletonElement = document.querySelector('#skeleton')
const listTasks = document.querySelector('.tarefas-pendentes')
const closePage = document.querySelector('#closeApp')
const headersAuthRequest = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
    }

function getInfoUser() {
    
    fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/users/getMe', {headers: headersAuthRequest} ).then(

        response => {

            if(response.ok) {

                response.json().then (

                    user => {
                     userDados.innerText = `${user.firstName} ${user.lastName}`
                    }

                )
            
        
            } else {
        
                 localStorage.clear()
                 window.location.href = './../index.html'
        }
    }
)

}

// é aqui que recebemos e executamos as tarefas
function getTasks() {

    fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks', {headers: headersAuthRequest}).then(

        response => {

            response.json().then(

                tasks => {

                    skeletonElement.style.display = 'none'

                    listTasks.innerHTML = ''
                    
                    for(let task of tasks){
                        console.log(task)


                        listTasks.innerHTML += `
                          <li class="tarefa">
                          <div class="not-done"></div>
                          <div class="descricao">
                          <p class="nome">${task.descripition}</p>
                          <p class="timestamp">Criada em: ${task.createAt}</p>
                          </div>
                          </li>
                        `
                    }

                }
            )

        }
    )

}

function createTask() {

    let data = {
        description: 'Tarefa Teste',
             completed: false
    }

    let postrequestConfiguration = {
        method: 'POST',
        headers: headersAuthRequest,
        body: JSON.stringify (data)
    }

    fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks', {headers: headersAuthRequest}).then(
        
        response => {

            if(response.ok){
                getTasks()
            }
        }
    )

}


if(token === null) {

    window.location.href = './../index.html'

} else {

    getInfoUser()
    getTasks()
}


createTaskButtonElement.addEventListener('click', event => {

	event.preventDefault()
    createTask()

    fetch().then(
    
        response => {
    
             if(response.ok) {
    
            }
    
        }
    
    )
    
})



//fechar app
closePage.addEventListener('click', event => {

        localStorage.clear()
        window.location.href = './../index.html'


})
