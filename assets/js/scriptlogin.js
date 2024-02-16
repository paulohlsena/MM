function acesso(){
    varUsu = document.getElementById("usu").value;
    varSenha = document.getElementById("senha").value;
   
    switch (true) {
        case varUsu === "agendamento" && varSenha === "123":
            alert("Acesso permitido");
            location.href = "page1.html";
            break;

        case varUsu === "poscirurgico" && varSenha === "1234":
            alert("Acesso permitido");
            location.href = "page2.html";
            break;

        default:
            alert("Acesso negado");
    }
}
