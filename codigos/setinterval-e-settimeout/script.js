// Modificar elemento
let i = 1;

function modificarElemento() {
  const elemento = document.querySelector('#elemento');
  elemento.innerText = i;
  i++;
}

setInterval(modificarElemento, 1000);

// Criar elemento
function criarElemento() {
  const novoElemento = document.createElement('p');
  const body = document.querySelector('body');

  novoElemento.innerText = 'Elemento';
  body.appendChild(novoElemento);

  i++;
}

setTimeout(criarElemento, 5000);