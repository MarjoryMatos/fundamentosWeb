var nome = window.document.getElementById("nome")
var email = document.querySelector("#email")
var assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk= false


function validaNome(){
    let txtNome = document.querySelector("#txtNome")
        if(nome.value.length < 3){
            nome.style.borderBottom = '3px solid red'
            txtNome.innerHTML = "nome inválido!"
            txtNome.style.color = 'red'
            nomeOk = false
        } else {
            txtNome.innerHTML = "Nome Válido"
            txtNome.style.color = 'green'
            nome.style.borderBottom = '3px solid green'
            nomeOk = true
        }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
            txtEmail.innerHTML = 'E-mail inválido'
            txtEmail.style.color = 'red'
            email.style.borderBottom = '3px solid red'
            emailOk = false
        }else{
            txtEmail.style.color = 'green'
            txtEmail.innerHTML = "E-mail válido!"
            email.style.borderBottom = '3px solid green'
            emailOk = true
        }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Text excede o limite máximo de caracteres (100)"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assunto.styleborderBottom = '3px solid red'
        assuntoOk = false
    }else{
        txtAssunto.style.display='none'
        assunto.style.borderBottom= '3px solid green'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }else {
        alert("Preencha todos os dados corretamente antes de enviar!")
    }
}

function mapaZoom(){
    mapa.style.width = '500px'
    mapa.style.height = '350px'
}

function mapaNormal(){
    mapa.style.width = '500px'
    mapa.style.height = '350px'
}


