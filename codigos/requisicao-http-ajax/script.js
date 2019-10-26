// Procurar CEP
const form = document.querySelector('#formulario');

async function procurarCEP(evento) {
  evento.preventDefault();
  
  const cep = document.querySelector('#cep').value;
  const cidade = document.querySelector('#cidade');
  
  try {
  	const chamadaHttp = await fetch(`https://api.postmon.com.br/v1/cep/${cep}`);
  	const dados = await chamadaHttp.json();
  	console.log(dados);
  	cidade.innerText = dados.cidade;
  } catch(error) {
  	alert('Erro');
  }
}

form.addEventListener('submit', procurarCEP);