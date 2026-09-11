const campoUsuario = document.getElementById("usuario");
const campoSenha = document.getElementById("senha");
const campoBotao = document.querySelector(".botao-entrar");
const campoMensagem = document.querySelector(".mensagem");

campoBotao.addEventListener("click", function () {
    const usuario = campoUsuario.value.trim();
    const senha = campoSenha.value.trim();

    if (usuario === "" || senha === "") {
        campoMensagem.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(function (usuarioCadastrado) {
        return usuarioCadastrado.usuario === usuario;
    });

    if (!usuarioEncontrado) {
        campoMensagem.textContent = "Usuário não encontrado.";
        return;
    }

    if (usuarioEncontrado.senha !== senha) {
        campoMensagem.textContent = "Senha incorreta.";
        return;
    }

    campoMensagem.textContent = "";
    sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
    window.location.href = "TelaPerfil.html";
});