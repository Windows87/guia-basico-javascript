// Modificar Texto
const elemento = document.querySelector('#elemento');
elemento.innerText = 'Hello World!';

// Modificar HTML
const elemento2 = document.querySelector('#elemento-2');
elemento2.innerHTML = '<h1>Hello World!</h1>';

// Modificar o estilo css do elemento
const elemento3 = document.querySelector('#elemento-3');
elemento3.style['color'] = 'red';

// Modificar todos os Elementos de uma Classe
const elementos = document.querySelectorAll('.classe');

elementos.forEach(elemento => {
  elemento.style['color'] = 'green';
});

// Criar elemento
const novoElemento = document.createElement('div');
const body = document.querySelector('body');

novoElemento.innerText = 'novo elemento';

body.appendChild(novoElemento);