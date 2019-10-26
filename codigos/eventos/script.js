// onClick
const botao = document.querySelector('#botao');

function abrirAlerta() {
  alert('Ola!');
}

botao.addEventListener('click', abrirAlerta);

// onSubmit
const form = document.querySelector('#formulario');

function mostrarTexto(evento) {
  evento.preventDefault();
  const texto = document.querySelector('#texto');
  alert(texto.value);
}

form.addEventListener('submit', mostrarTexto);