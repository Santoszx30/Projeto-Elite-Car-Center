function entrar() {

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    if (usuario === "" || senha === "") {
        alert("Digite seu usuário e sua senha.");
        return;
    }

  
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    
    const usuarioEncontrado = usuarios.find(
        function (user) {
            return (
                user.usuario.toLowerCase() === usuario.toLowerCase() &&
                user.senha === senha
            );
        }
    );

    if (usuarioEncontrado) {

        localStorage.setItem(
            "usuarioLogado",
            JSON.stringify(usuarioEncontrado)
        );

        alert("Login realizado com sucesso!");

        window.location.href = "index.html";

    } else {

        alert("Usuário ou senha incorretos.");

    }
}