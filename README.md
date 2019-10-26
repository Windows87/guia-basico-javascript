<p align="center">
  <img src="imagens/javascript-logo.png" width="40%">
</p>

# Guia Básico de Javascript

## Introdução
Javascript é uma linguagem de programação que primariamente é usada em navegadores, mas pode ser utilizada em outros ambientes, como em servidores com o NodeJS, em aplicações mobile com o Ionic ou React-Native e em aplicações para desktop com Electron ou Nwjs.

O Javascript é uma linguagem simples, com uma sintaxe parecida com outras linguagens, como o C++. A sua versão mais atual, ES2015 ou ES6+ traz novas features que tornam o Javascript mais simples, independente de frameworks como o jQuery e mais fácil para desenvolver aplicações mais complexas. O ES2015 apresenta classes, métodos de tratar funções assíncronas (async e await), Ajax nativo e facilitado (fetch) e outras features.

O resultado final de cada tópico estará dentro da pasta códigos.

## Conteúdo
O guia aborda os seguintes assuntos:

- [Utilizar Javascript no HTML](#utilizar-javascript-no-html)
- [Console e Debug](#console-e-debug)
- [Variáveis, Objetos e Funções](#variaveis-objetos-e-funcoes)
	- [Variáveis](#variaveis)
	- [Objetos e Arrays](#objetos-e-arrays)
	- [Funções](#funcoes)
- [If, else, for, while e forEach](#if-else-for-while-foreach)
	- [If e Else](#if-e-else)
		- [Operadores de Comparação](#operadores-de-comparacao)
		- [Operadores Lógicos](#operadores-logicos)
	- [For, While e forEach](#for-while-e-foreach)
- [Manipulação do DOM](#manipulacao-do-dom)
	- [Modificar Elementos](#modificar-elementos)
		- [Modificar o Texto e o HTML](#modificar-o-texto-e-o-html)
		- [Modificar o Estilo do Elemento](#modificar-o-estilo-do-elemento)
		- [Modificar todos os Elementos de uma Classe ou Tag](#modificar-todos-os-elementos-de-uma-classe-ou-tag)
		- [Modificar outros Valores do Elemento](#modificar-outros-valores-do-elemento)
	- [Criar Elementos](#criar-elementos)
- [setInterval e setTimeout](#setinterval-e-settimeout)
	- [setInterval](#setinterval)
	- [setTimeout](#settimeout)
- [Eventos](#eventos)
	- [onClick](#onclick)
	- [onSubmit](#onsubmit)
- [Requisições HTTP (Ajax)](#requisicoes-http-ajax)
- [O que é Node, React, Electron e Outros](#o-que-e-node-react-electron-e-outros)

## Utilizar Javascript no HTML

Para importar o Javascript é necessário utilizar a tag `<script>`, normalmente é utilizado no fim da tag `<body>`. Para importar é necessário do parâmetro `src` linkando o arquivo Javascript, como no exemplo:

```html
<body>
  <!-----
    Resto do Código HTML
  ------>
  <script type="text/javascript" src="script.js"></script>
</body>
```

Também é possível utilizar códigos javascript sem a necessidade de importar um arquivo javascript dentro do HTML utilizando os códigos dentro da tag `<script>`:

```html
<body>
  <!-----
    Resto do Código HTML
  ------>
  <script type="text/javascript">
    // Código Javascript
    // Isso é um comentário
  </script>
</body>
```

O recomendado é criar um arquivo javascript separado do arquivo HTML para manter uma boa organização do código. Além disso, é recomendado também criar uma pasta para colocar todos os arquivos de scripts javascript.

## Console e Debug
Dentro do arquivo javascript linkado no HTML, insira esse código:

```javascript
console.log('Hello World');
```

Se atualizar a página HTML, verá que não aconteceu absolutamente nada. Mas se clicar com o botão direito do mouse e clicar em "Inspecionar" ou utilizar o atalho `Ctrl + Shift + I` e clicar na aba do console, irá ver uma mensagem:

<kbd>
  <img src="imagens/console.png" width="100%">
</kbd>

Esse código mostra uma mensagem no console. Isso pode ser útil para tentar resolver algum bug do código. E o console também é extremamente útil para esse propósito, nele você pode ver valores de variáveis, elementos HTML e utilizar códigos de Javascript.

Tente trocar o texto do console ou adicionar mais textos para visualizar dentro do console.

## Variáveis, Objetos e Funções

### Variáveis
Diferente de outras linguagens, o Javascript apresenta apenas dois tipos de variáveis, o tipo `const`, que é uma variável constante, ou seja, seu valor não pode mudar, e o tipo `let`, que é uma variável que o valor pode ser modificado. Não é necessário escrever o tipo da variável (string, int) como no C++ ou Java. Exemplo:

```javascript
const x = "O valor é de";
let y = 10;

console.log(x);
console.log(y);

y = 20;

console.log(y);
```

Ao atualizar a página e ver o console, será possível ver a saída com os valores das variáveis. Como disse, é possível ver o valor de uma variável pelo console, apenas digite o nome da variável e aperte enter. Resultado:

<kbd>
  <img src="imagens/console-variaveis.png" width="100%">
</kbd>

Para se concatenar variáveis, existem dois métodos:

```javascript
console.log(x + " " + y);
console.log(`${x} ${y}`);
```

### Objetos e Arrays
Objetos são tipos de variáveis que podem armazenar vários tipos de dados, que podem ser modificados, como o seguinte exemplo:

```javascript
const pessoa = {
  nome: 'Terry',
  sobrenome: 'Martin',
  idade: 38
};

console.log(`Olá ${pessoa.nome} ${pessoa.sobrenome}, sua idade é de ${pessoa.idade}`);

pessoa.idade = 39;

console.log(`Olá ${pessoa.nome}, sua nova idade é ${pessoa.idade}`);
```

Arrays são listas, que começam com a posição zero. Para se acessar o valor de um array se usa o `array[posicao]` e para adicionar novos valores aos arrays, é utilizado a função `.push(valorDaVariavel)`. Exemplo de código:

```javascript
const alfabeto = ['a', 'b', 'c', 'd', 'e'];

console.log(`Segunda letra do alfabeto: ${alfabeto[1]}`);

console.log('Array do Alfabeto:');
console.log(alfabeto);

alfabeto.push('f');

console.log('Array do Alfabeto depois do Push:');
console.log(alfabeto);
```

### Funções
Diferente do C++ ou Java, não é necessário declarar o retorno. Existem dois métodos de declarar funções:

```javascript
function funcao() {
  console.log('olá');
}

const segundaFuncao = () => {
  console.log('olá');
}

function funcaoComParametro(nome) {
  console.log(`olá ${nome}`);
}
```

E para executar a função, coloque o nome da função acompanhada de `()` e se a função necessitar parâmetros, passe os valores divididos por vírgula, igual em outras linguagens:

```javascript
funcao();
segundaFuncao();
funcaoComParametro('Terry');
```

Para retornar valores, utilize o comando `return`, exemplo:

```javascript
function soma(x, y) {
  return x + y;
}

console.log(soma(10, 5)); // 15
```


Tente declarar novas variáveis, objetos e arrays e procurar e utilizar novas funções de Arrays por meio da documentação do Javascript, como de remover o último elemento da lista ou cortar parte do array:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array.

## If, else, for, while e forEach
Os comandos de seleção e laços de repetição do Javascript são semelhantes aos de outras linguagens, como C/C++ e Java. 

### If e Else
O `if` e `else`, igual ao C++, quando apresenta apenas uma linha, não é necessário utilizar das chaves, como no exemplo:

```javascript
const x = 10;

if(x > 10)
  console.log('Maior que 10');
else if (x == 10)
  console.log('Igual a 10');
else
  console.log('Menor que 10');
```

O `else if` no código é o mesmo que o `else if` do C++. se o primeiro `if` estiver errado, seguirá até os outros `else if`s até um funcionar e parar a seleção. Se nenhum funcionar, entrará no `else`.

Mas quando é necessário um bloco de código, é necessário utilizar chaves, como no exemplo:

```javascript
const senha = 'abc123';

if(senha === 'abc123') {
  console.log('Senha Correta!');
  console.log('Entrando no Sistema..');
} else {
  console.log('Senha Inválida.');
}
```

#### Operadores de Comparação
Segue uma tabela de operadores de comparação, como igual, maior ou igual igual aos do C++.

| Operador     | Nome                   |
|--------------|------------------------|
| `==`         | Igual                  |
| `!=`         | Diferente              |
| `===`        | Igual Estritamente     |
| `!==`        | Diferente Estritamente |
| `>`          | Maior que              |
| `>=`         | Maior ou igual que     |
| `<`          | Menor que              |
| `<=`         | Menor ou igual que     |

A diferença do Igual e Igual Estritamente é que o Igual não compara tipos, ou seja, `3 == "3"` dá `true`, mas o Igual Estritamente daria `false`, mas daria `true` com a comparação `3 === 3`. Exemplos:

```javascript
const a = 10;
const b = '10';
const c = 20;

console.log(a == b); // true
console.log(a === b); // false

console.log(a != b); // false
console.log(a !== b); // true

console.log(a > c); // false
console.log(a < c); // true
console.log(a >= b); // true
```

#### Operadores Lógicos
Segue uma tabela de operadores lógicos, iguais ao do C++.

| Operador     | Nome     |
|--------------|----------|
| `&&`         | e        |
| `||`         | ou       |
| `!`          | inversor |

Exemplos:

```javascript
const y = 10;
const z = 20;
const p = true;

console.log(y === 10 && z > 10); // true
console.log(y === 10 && z < 10); // false

console.log(y === 10 || z > 10); // true
console.log(y === 10 || z < 10); // true

console.log(!p); // false
console.log(!!p); // true
```

### For, While e ForEach
Os laços de repetição são também iguais do C++, o novo é o `forEach`, que é uma função nova dos arrays, junto com o `map` e `filter`. Exemplos:

```javascript
for(let i = 0; i < 10; i++)
  console.log(`Numero ${i}`);

let i = 0;
while(i < 10) {
  console.log(`Numero ${i}`);
  i++;
}

let array = ['a', 'b', 'c', 'd', 'e'];

array.forEach(letra => {
  console.log(letra);
});
```

O `for` e o `while` tem saídas iguais, dando um output de 0 a 9. O `forEach` imprime todos os valores do array no console.

## Manipulação do DOM
Até agora foi passado apenas os fundamentos do Javascript. A parte interessante do Javascript é manipular o DOM, ou seja, manipular os elementos da página.

Com o Javascript é possível modificar o texto e o HTML de elementos, modificar o estilo de um elemento, modificar o source de uma imagem, modificar as classes de um elemento ou criar um novo elemento pelo código. Ou seja, é possível modificar todas as propriedades da página.

### Modificar Elementos

#### Modificar o Texto e o HTML
Primeiramente, para modificar um elemento, é necessário selecionar o elemento que você quer modificar e guardar em uma variável. Utilizamos a função `document.querySelector()` para selecionar apenas um elemento utilizando seletores CSS. Por exemplo, para pegar um elemento com o id `elemento`, seria usado `document.querySelector('#elemento')`, mas se fosse uma classe, seria utilizado `document.querySelector('.elemento')`. Mas como classes podem ser usadas em mais de um elemento, o querySelector retornaria apenas o primeiro elemento encontrado com essa classe.

Para modificar o texto, se utiliza a propriedade `innerText` do elemento. Exemplo de modificação de texto de uma `div`:

**HTML**:
```html
<!----
  Resto do Código HTML
----->
<div id="elemento">
</div>
<!----
  Resto do Código HTML
----->
```

**Javascript**:
```javascript
const elemento = document.querySelector('#elemento');
elemento.innerText = 'Hello World!';
```

Como pode ser visto, apareceu a palavra "Hello World" na página. Mas caso quisessemos mostrar o "Hello World" como elemento `h1`, podemos utilizar o `innerHTML` para modificar todo o HTML dentro do elemento.

**HTML**:
```html
<!----
  Resto do Código HTML
----->
<div id="elemento-2">
</div>
<!----
  Resto do Código HTML
----->
```

**Javascript**:
```javascript
const elemento2 = document.querySelector('#elemento-2');
elemento2.innerHTML = '<h1>Hello World!</h1>';
```

**Resultado**:
<kbd>
  <img src="imagens/manipulacao-helloworld.png" width="100%">
</kbd>

#### Modificar o Estilo do Elemento
Para modificar o estilo, você pode utilizar a propriedade `elemento.style['nomeDaPropriedadeCSS'] = 'valorDaPrpriedade';`. Para modificar a cor de um parágrafo, seria usado esses códigos:

**HTML**:
```html
<!----
  Resto do Código HTML
----->
<p id="elemento-3">
  lorem ipsum dolor sit amet
</p>
<!----
  Resto do Código HTML
----->
```

**Javascript**:
```javascript
const elemento3 = document.querySelector('#elemento-3');
elemento3.style['color'] = 'red';
```

**Resultado**:
<kbd>
  <img src="imagens/manipulacao-css.png" width="100%">
</kbd>

Também é possível adicionar uma classe utilizando a função `elemento.classList.add('nomeDaClasse');` para editar o CSS.

#### Modificar todos os Elementos de uma Classe ou Tag
A função `document.querySelectorAll('nomeDaClasseOuTag')` seleciona todos os elementos de uma classe ou tag e retorna um array, então, para modificar todos os elementos é necessário modificar os elementos um por um. Por isso pode ser utilizado o `forEach` mostrado acima. Exemplo:

**HTML**:
```html
<!----
  Resto do Código HTML
----->
<p class="classe">a</p>
<p class="classe">b</p>
<p class="classe">c</p>
<p class="classe">d</p>
<p class="classe">e</p>
<!----
  Resto do Código HTML
----->
```

**Javascript**:
```javascript
const elementos = document.querySelectorAll('.classe');

elementos.forEach(elemento => {
  elemento.style['color'] = 'green';
});
```

**Resultado**:
<kbd>
  <img src="imagens/manipulacao-elementos.png" width="100%">
</kbd>

#### Modificar outros Valores do Elemento
Como dito, é possível modificar outros valores do elemento, como a source de uma imagem: `img.src = 'linkDaImagem'` ou o valor de um input: `input.value = 'valorDoInput'`.

### Criar Elementos
Mas modificar elementos é muito limitado. Por isso, é possível criar elementos por meio do javascript utilizando a função `novoElemento = document.createElement('tipoDeElemento')`, mas para o elemento aparecer na página é necessário adicionar dentro de um elemento pai com a função `elementoPai.appendChild(novoElemento)`. Exemplo:

```javascript
const novoElemento = document.createElement('div');
const body = document.querySelector('body');

novoElemento.innerText = 'novo elemento';

body.appendChild(novoElemento);
```

O exemplo mostra a criação de um novo elemento, a seleção do elemento pai, que no caso é o elemento `body`, a modificação do texto do novo elemento e a adição dele no `body`. Todos os elementos podem serem criados, como `img` e `p`.

**Resultado:**
<kbd>
  <img src="imagens/criacao-elemento.png" width="100%">
</kbd>

## setInterval e setTimeout
Essas duas funções são funções de tempo. O setInterval é uma função que executa a cada x milisegundos (1s = 1000ms) até você parar esse código. já o setTimeout espera x milisegundos e executa.

### setInterval
A função abaixo modifica o elemento a cada segundo:

**HTML**:
```html
<!----
  Resto do Código HTML
----->
<p id="elemento">0</p>
<!----
  Resto do Código HTML
----->
```

**Javascript**:
```javascript
let i = 1;

function modificarElemento() {
  const elemento = document.querySelector('#elemento');
  novoElemento.innerText = i;
  i++;
}

setInterval(modificarElemento, 1000);
```

### setTimeout
A função abaixo cria um elemento depois de cinco segundos:

```javascript
function criarElemento() {
  const novoElemento = document.createElement('p');
  const body = document.querySelector('body');

  novoElemento.innerText = 'Elemento';
  body.appendChild(novoElemento);

  i++;
}

setTimeout(criarElemento, 5000);
```

## Eventos
Eventos são funções que são executadas ao por exemplo, clicar em um elemento, submeter um formulário, entre outros. Para declarar um evento, é usada a função `elemento.addEventListener('evento', funcaoQueOcorrera)`;

### onClick
O onClick é um evento que pode ser utilizado em todos os elementos. Ele é executado quando o usuário clica no elemento. Exemplo de função de onClick:

**HTML**:
```html
<!----
  Resto do Código HTML
----->
<button id="botao">Clique Aqui</button>
<!----
  Resto do Código HTML
----->
```

**Javascript**:
```javascript
const botao = document.querySelector('#botao');

function abrirAlerta() {
  alert('Olá!');
}

botao.addEventListener('click', abrirAlerta);
```

### onSubmit
O onSubmit é um evento que pode ser utilizado em formulários, que quando esse formulário é submetido, o evento é disparado. Para a página não dar um refresh, é necessário pegar a variável `event` na função e usar a função `event.preventDefault()`. Exemplo:

**HTML**:
```html
<!----
  Resto do Código HTML
----->
<form id="formulario">
  <input type="text" id="texto">
  <input type="submit" value="Submeter">
</form>
<!----
  Resto do Código HTML
----->
```

**Javascript**:
```javascript
const form = document.querySelector('#formulario');

function mostrarTexto(evento) {
  evento.preventDefault();
  const texto = document.querySelector('#texto');
  alert(texto.value);
}

form.addEventListener('submit', mostrarTexto);
```

O código acima, ao submeter o formuĺário (clicando no botão de submeter ou dando enter no input), irá mostrar o valor do input.

## Requisições HTTP (Ajax)
Requisição HTTP é fazer uma chamada a um website e pode receber um valor em texto ou em forma de um objeto (json). Iremos usar uma API, que é um website que você envia por exemplo, uma informação para o website e ele retornará informações brutas.

Será usada uma API de CEP gratuita (https://postmon.com.br/) que será passada um CEP pela url e será retornada informações sobre esse CEP. Para descobrir como se deve usar uma API, deve-se ler a documentação da API.

A função usada para requisição será o `fetch`, que deve estar dentro de uma função assíncrona, que deve ter o comando `async` na frente da `function` e `await` na frente da função `fetch`. Códigos de uma simples aplicação fazendo a requisição obtendo os dados do CEP, mostrando os dados no console e o nome da cidade na página:

**HTML**:
```html
<!----
  Resto do Código HTML
----->
<form id="formulario">
  <input type="text" id="cep">
  <input type="submit" value="Procurar">
</form>

<p id="cidade"></p>
<!----
  Resto do Código HTML
----->
```

**Javascript**:
```javascript
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
```

Como pode ser visto, utilizou os comandos `try` e `catch`, ele é utilizado caso o usuário não tenha internet ou dê um erro, irá parar o código do `try` e ir pro bloco de código do `catch`. Outra coisa que pode ser observada é o `chamadaHttp.json()`, nela, é retornada um objeto, caso fosse `chamadaHttp.text()`, seria retornado o valor em string.

## O que é Node, React, Electron e Outros
<p align="center">
  <img src="imagens/nodejs.png" width="60%">
</p>

Node, React, Vue, Angular, Electron e NWjs são tecnologias que utilizam da linguagem Javascript.

Node é o Javascript para um lugar fora do Browser. Com isso, ele pode ser usado para vários objetivos, como servidor, criar pequenos programas para console ou automatizar tarefas, como postar em redes sociais de tempos em tempos. Existem diversos módulos para diferentes propósitos. Você pode procurar esses módulos no site do <a href="https://www.npmjs.com/">npm</a>.

React, Vue e Angular são bibliotecas e frameworks (no caso do Angular) ppara desenvolver aplicações web SPA (Single Page Applications, páginas que não precisam ir para outra url do site, já que todo site está em apenas uma página). React-Native é uma versão do React para mobile, que gera código para Android e iOS.

Electron e NWjs são frameworks para criar aplicações desktop para Windows, Linux e Mac utilizando de HTML, CSS, Javascript e NodeJS. É possível criar aplicações grandes com essas duas tecnologias, como sistemas com banco de dados locais ou online.

Com mais de um milhão de módulos, o npm apresenta módulos específicos para cada coisa além das bibliotecas citadas acima. Por exemplo, é possível programar um Arduino, IoT, realizar testes de software, jogos e utilizar para diversos objetivos. Mesmo o Javascript sendo quase "onipotente", ele pode ser não ser uma boa opção para CMS que devem ser desenvolvidos rapidamente ou com pouco orçamento, para criação de jogos, para programas que necessitam de uma performance e por aí vai, ou seja, ele é muito bom, mas em alguns casos, linguagens como PHP, C#, Java ou C++ são melhores opções.

**Principais Bibliotecas para Frontend**

- <a href="https://reactjs.org/">ReactJS</a>
- <a href="https://vuejs.org/">VueJS</a>
- <a href="https://angular.io/">Angular</a>

**Principais Bibliotecas para Backend**

- <a href="https://expressjs.com/">Express</a>
- <a href="https://adonisjs.com/">AdonisJS</a>
- <a href="https://mongoosejs.com/">Mongoose (se utilizar MongoDB, que é algo comum)</a>
- Json Web Token (Autenticação)
- OAuth (Autenticação)

**Principais Bibliotecas para Mobile**

- <a href="https://facebook.github.io/react-native/">React-Native</a>
- <a href="https://ionicframework.com/">Ionic (Híbrido)</a>

**Princpais Bibiliotecas para Desktop**

- <a href="https://electronjs.org/">Electron</a>
- <a href="https://nwjs.io/">NWjs</a>
