const createUserButtonElement = document.querySelector('#createUserButton')
const formControlsElements = document.querySelectorAll('.form-control')
// Obtenção de Todos os Inputs do meu HTML em formato de Array
const allInputsElements = document.querySelectorAll('input')

//confereSenha
//const firstKey = document.querySelector('#password')
//const confirKey = document.querySelector('#passwordConfirm')

// código linha 7 até 38 se refere a validação dos campos
var formValidation = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    passwordConfirm: false
}

for (let control of formControlsElements) {

    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {

        let inputValid = event.target.checkValidity()

        formValidation[event.target.id] = inputValid


        if (inputValid) {

            control.classList.remove('error')

        } else {

            control.classList.add('error')

        }

    })

}

//function confereSenha(){

  //  if(confirKey.value === firstKey.value){
  //      confirKey.setCustomValidity('');
   // } else {
    //    confirKey.setCustomValidity('As senhas digitadas não conferem');
  //  }

//}

////password.onchange = validatePassword;
//confirm_password.onkeyup = validatePassword;

for(let input of allInputsElements) {

    input.addEventListener('keyup', event => {

        const inputValue = input.value
        const inputId = input.id

        formData[inputId] = inputValue

        console.log(formData)

    })

}

var formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

var requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

// Variavel que irá conter o nosso objeto de configuração da requisição
var requestPostConfiguration = {
    method: 'POST',
    headers: requestHeaders
}

function createUser() {

    requestPostConfiguration.body = JSON.stringify(formData)

// O Fetch é responsável por fazer uma requisição para um back-end
      // O parametro do fetch serve justamente para especificarmos aonde ele irá fazer a requisição
      fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/users', requestPostConfiguration).then(

        response => {

            response.json().then(

                info => {

                    if(response.ok == true) {

                        alert('Parabens! Usuário criado com sucesso.')

                    } else {

                        if(info === 'El usuario ya se encuentra registrado') {

                            alert('O e-mail digitado ja esta cadastrado')

                        }

                    }

                }

            )

        }

    )

}

createUserButtonElement.addEventListener('click', event => {

    event.preventDefault()

    let formValid = Object.values(formValidation).every(Boolean)

    if (formValid) {

        createUser()
        

    } else {

        alert('crash')
    }
})

