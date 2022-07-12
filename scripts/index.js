

var loginValidation = {
    mail: false,
    password: false
}


const inputsElements = document.querySelectorAll('input')
var loginButtomElement = document.querySelector('#loginButton')

let loginPersonal = {
    email: '',
    password: ''
}

loginButtomElement.addEventListener('click', event => {

    event.preventDefault()
    loginAutentication()

})

for (let input of inputsElements) {

    input.addEventListener('keyup', event => {
        loginPersonal[input.id] = input.value
    })


}
var requestHeaderslogin = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

function loginAutentication() {

    let requestConfigurationLogin = {
        method:'POST',
        headers: requestHeaderslogin,
        body: JSON.stringify(loginPersonal)
    }

    fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/users/login', requestConfigurationLogin).then(


    response => {

        if(response.ok === true){

            response.json().then(

                info => {
                    localStorage.setItem('token', info.jwt)
                    window.location.href = './../pages/tarefas.html'
                }
            )


        } else {

            alert('No existe')
        }


    }

    )


}
    