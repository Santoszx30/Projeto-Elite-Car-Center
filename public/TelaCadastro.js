const camponome = document.getElementById("nome");
const campocpf = document.getElementById("cpf");
const campoemail = document.getElementById("email");
const campousuario = document.getElementById("usuario");
const campotelefone = document.getElementById("telefone");
const camposenha = document.getElementById("senha");

const campobotao = document.querySelector(".botaoCadastrar");


if (campobotao) {

    campobotao.addEventListener("click", function () {

        const nome = camponome.value.trim();
        const email = campoemail.value.trim();
        const cpf = campocpf.value.trim();
        const senha = camposenha.value.trim();
        const telefone = campotelefone.value.trim();
        const usuario = campousuario.value.trim();

        if (
            nome === "" ||
            email === "" ||
            cpf === "" ||
            senha === "" ||
            telefone === "" ||
            usuario === ""
        ) {

            alert("Preencha todos os campos para criar sua conta!");

            return;
        }

        let usuarios = JSON.parse(
            localStorage.getItem("usuarios")
        ) || [];


        const usuarioExiste = usuarios.some(function (usuarioCadastrado) {

            return usuarioCadastrado.usuario === usuario;

        });


        if (usuarioExiste) {

            alert("Esse usuário já está cadastrado!");

            return;
        }


        const emailExiste = usuarios.some(function (usuarioCadastrado) {

            return usuarioCadastrado.email === email;

        });


        if (emailExiste) {

            alert("Esse e-mail já está cadastrado!");

            return;
        }

        const novoUsuario = {

            nome: nome,

            email: email,

            cpf: cpf,

            senha: senha,

            telefone: telefone,

            usuario: usuario

        };


        usuarios.push(novoUsuario);

        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );

        alert("Conta criada com sucesso!");


        window.location.href = "TelaLogin.html";

    });

}