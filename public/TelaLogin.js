javascript


function entrar() {


    const campoUsuario = document.getElementById("usuario");
    const campoSenha = document.getElementById("senha");

    if (!campoUsuario || !campoSenha) {
        console.error("Campos de login não encontrados.");
        return;
    }

    const usuario = campoUsuario.value.trim();
    const senha = campoSenha.value;


    if (usuario === "" || senha === "") {

        alert("Digite seu usuário e sua senha.");

        return;
    }


    let usuarios = [];

    try {

        usuarios = JSON.parse(
            localStorage.getItem("usuarios")
        ) || [];

    } catch (erro) {

        console.error(
            "Erro ao carregar os usuários:",
            erro
        );

        usuarios = [];
    }


    if (!Array.isArray(usuarios) || usuarios.length === 0) {

        alert(
            "Nenhuma conta cadastrada. Cadastre-se primeiro."
        );

        return;
    }


    const usuarioEncontrado = usuarios.find(
        function (user) {

            if (!user) {
                return false;
            }

            return (
                typeof user.usuario === "string" &&
                typeof user.senha === "string" &&
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


        alert(
            "Login realizado com sucesso!"
        );


        window.location.href = "index.html";

        return;
    }


    alert(
        "Usuário ou senha incorretos."
    );

}



document.addEventListener(
    "DOMContentLoaded",
    function () {

        const linkCadastro = document.querySelector(
            '.links a[href="Cadastro.html"]'
        );


        if (linkCadastro) {

            linkCadastro.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    window.location.href = "Cadastro.html";

                }
            );

        }

    }
);


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            const campoUsuario =
                document.getElementById("usuario");

            const campoSenha =
                document.getElementById("senha");


            if (
                campoUsuario &&
                campoSenha &&
                (
                    document.activeElement === campoUsuario ||
                    document.activeElement === campoSenha
                )
            ) {

                entrar();

            }

        }

    }
);

