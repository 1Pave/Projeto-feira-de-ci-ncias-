let user = document.querySelector('#user')
let labelUser = document.querySelector('#labelUser')
let validUser = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelCsenha = document.querySelector('#labelCsenha')
let validCsenha = false

let error = document.querySelector('#error')
let success = document.querySelector('#success')

user.addEventListener('keyup', () => {
    if(user.value.length <= 5){
     labelUser.innerHTML = 'Usuário *Insira no minímo 6 caracteres'
     labelUser.setAttribute('style', 'color:red')
     validUser = false
    } 
    else {
        labelUser.innerHTML = 'Usuário'
        labelUser.setAttribute('style', 'color:white')
        validUser = true
    } 
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
     labelSenha.innerHTML = 'Senha *Insira no minímo 6 caracteres'
     labelSenha.setAttribute('style', 'color:red')
     validSenha = false
    } 
    else {
        labelSenha.innerHTML = 'Senha'
        labelSenha.setAttribute('style', 'color:white')
        validSenha = true
    } 
})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value){
     labelCsenha.innerHTML = 'Confirmar senha *As senhas não coincidem'
     labelCsenha.setAttribute('style', 'color:red')
     validCsenha = false
    } 
    else {
        labelCsenha.innerHTML = 'Confirmar senha'
        labelCsenha.setAttribute('style', 'color:white')
        validCsenha = true
    } 
})

function cadastro() {
 if(validUser && validSenha && validCsenha){
  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

  listaUser.push(
    {
        userCad: user.value,
        senhaCad: senha.value
    }
  )

  localStorage.setItem('listauser', JSON.stringify(listaUser))

    success.setAttribute('style', 'display: block')
    success.innerHTML = '<strong> Cadastrando Usuário... </strong>'
    error.setAttribute('style', 'display: none')
    error.innerHTML = ''

    setTimeout(() =>{
      window.location.href = 'index.html'
    }, 3000)
    
 } else {
    error.setAttribute('style', 'display: block')
    error.innerHTML = '<strong> Preencha todos os campos <br>corretamente</strong>'
    success.setAttribute('style', 'display: none')
    success.innerHTML = ''
 }
}

function acessar() {
    let user = document.querySelector('#user')
    let labelUser = document.querySelector('#labelUser2')

    let senha = document.querySelector('#senha')
    let labelSenha = document.querySelector('#labelSenha2')

    let error = document.querySelector('#error')
    let listauser = [] 

     let userValid = {
        user: '',
        senha: ''
     }

     let admin = {
        user: 'admin1',
        senha: 'admin1'
     }

    listauser = JSON.parse(localStorage.getItem('listauser'))

    listauser.forEach((item) => {
        if(user.value == item.userCad && senha.value == item.senhaCad){
           userValid = {
            user: item.userCad,
            senha: item.senhaCad
           }
        }
    })

    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)

   if(user.value == userValid.user && senha.value == userValid.senha) {
    window.location.href = 'siteAluno.html'
    localStorage.setItem('token', token)

} else if(user.value == admin.user && senha.value == admin.senha) {
    window.location.href = 'site.html'
    localStorage.setItem('token', token)
}
   else {
   labelUser.innerHTML = 'Usuário'
   labelUser.setAttribute('style', 'color: red')
   labelSenha.setAttribute('style', 'color: red')
   error.setAttribute('Style', 'display: block')
   error.innerHTML = 'Usuário ou senha incorretos'
   user.focus()
   }
}




