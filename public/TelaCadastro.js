    const camponome = document.getElementById("nome");
    const campocpf = document.getElementById("cpf");
    const campoemail = document.getElementById("email");
    const campousuario = document.getElementById("usuario");
    const campotelefone = document.getElementById("telefone");
    const camposenha = document.getElementById("senha");
    const campobotao = document.getElementById("botaoCadastrar");

if (botao) {

    botao.addEventListener("click", function () {

        const nome = camponome.value.trim();
         const email = camponome.value.trim();
          const cpf = camponome.value.trim();
          const senha = camponome.value.trim();
          const telefone = camponome.value.trim();
          const usuario = camponome.value.trim();

          if (nome === "" || email === "" || cpf === "" || senha === "" || telefone === "" || usuario === "" )
            alert("Preenhca todos os campos de cadastro para realiza-lo!");
        return
    })

    const novoUsuario = {
        nome: nome,
        email: email,
        cpf: 
    }
}