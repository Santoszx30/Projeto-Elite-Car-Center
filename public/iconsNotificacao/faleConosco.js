
const mensagem = document.getElementById('mensagem');
const contador = document.querySelector('.contador');

mensagem.addEventListener('input', function () {
  const tamanho = mensagem.value.length;
  contador.textContent = tamanho + '/200 caracteres';
});


const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.querySelector('input[name="nome"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const telefone = document.querySelector('input[name="telefone"]').value;
  const assunto = document.getElementById('assunto').value;
  const texto = mensagem.value;

  if (!nome || !email || !assunto || !texto) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  console.log({ nome, email, telefone, assunto, mensagem: texto });

  alert('Mensagem enviada com sucesso!');

  form.reset();
  contador.textContent = '0/200 caracteres';
});


const backBtn = document.querySelector('.back-btn');

backBtn.addEventListener('click', function () {
  window.history.back();
});