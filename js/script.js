
const form = document.getElementById('formulario')
var email = document.getElementById('email')
var nome = document.getElementById('nome')
var senha = document.getElementById('senha')
var mensagem = ""

form.addEventListener('submit', function() {

    mensagem = mensagem + "Cadastro realizado com sucesso!\n" + 
    "Nome: " + nome.value + "\n" + "Email: " + email.value + 
    "\n" + "Senha: " + senha.value;

    alert(mensagem)

    mensagem = ""
 
});