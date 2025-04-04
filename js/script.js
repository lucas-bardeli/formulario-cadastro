
const form = document.getElementById('formulario')
var email = document.getElementById('email')
var nome = document.getElementById('nome')
var senha = document.getElementById('senha')
var valida_senha = document.getElementById('valida-senha')
var mensagem = ""

const valida_email = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z.]+$/;     // Expressão Regular para validar o Email digitado

form.addEventListener('submit', function(event) {
    // Evita que o formulário seja enviado e a página recarregada
    event.preventDefault();

    // trim() remove os espaços vazios do começo e do fim do texto
    if (senha.value.trim() != valida_senha.value.trim()) { 
        alert("Confirmação de senha inválida!")
    }
    else if (!valida_email.test(email.value.trim())) { // Verifica se o email encaixa na Expressão
        alert("Aviso: O Email não está digitado no padrão correto!")
    }
    else {
        mensagem = mensagem + "Cadastro realizado com sucesso!\n" + 
        "Nome: " + nome.value + "\n" + "E-mail: " + email.value + 
        "\n" + "Senha: " + senha.value;

        alert(mensagem)

        mensagem = ""
    }
 
});