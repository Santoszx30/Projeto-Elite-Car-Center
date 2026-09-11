const campoUsuario = document.getElementById("usuario");
const campoSenha = document.getElementById("senha");
const campoBotao = document.querySelector(".botaoEntrar");
const campoMensagem = document.querySelector(".mensagem");

campoBotao.addEventListener("click", function() {
    const usuario = campoUsuario.value;
    const senha = campoSenha.value;

})
if (usuario === "" || senha === ""){
    campoMensagem.textContent = "Por favor, preencha todos os campos.";
    return;
}

fetch("/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ usuario: usuario, senha: senha})
})

.then(function (resposta) {
    return resposta.json(); .then(function (dados) {

return {status :resposta.status, dados: dados};

});
})

.then(function (resultado) {
    if(resultado.status >= 400) {
        campoMensagem.textContent = resultados.dados.erro;
        return;
    }

    sessionStorage.setItem("usuarioLogado", JSON.stringify(resultado.dados));
    window.location.href = "/TelaPrincipal.html";

});

