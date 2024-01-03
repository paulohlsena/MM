function acesso(){
    varUsu = document.getElementById("usu").value;
    varSenha = document.getElementById("senha").value;
    if (varUsu == "agendamento" && varSenha == "123") {
    alert("Acesso permitido")
    location.href = "page1.html"
    } else{
     alert ("Acesso negado") }
    }