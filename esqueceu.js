
var campoEmail = document.querySelector(".emailEsqueceu");


var mensagemElement = document.getElementById("mensagem");


var botao = document.getElementById("btn");


botao.addEventListener("click", function() {
    var valorDigitado = campoEmail.value;


    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorDigitado);

    if (emailValido) {
        mensagemElement.textContent = "Email válido: " + valorDigitado;
        alert("Foi Enviado um codigo de recuperação para seu email!");
    } else {
        mensagemElement.textContent = "Email inválido";
    }
});
