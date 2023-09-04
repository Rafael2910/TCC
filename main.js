function mostraSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = ducument.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
}