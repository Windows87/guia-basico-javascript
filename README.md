<div style="text-align: center;">
  <img src="imagens/javascript-logo.png" width="40%">
</div>

# Guia Básico de Javascript

## Introdução
Javascript é uma linguagem de programação que primariamente é usada em navegadores, mas pode ser utilizada em outros ambientes, como em servidores com o NodeJS, em aplicações mobile com o Ionic ou React-Native e em aplicações para desktop com Electron ou Nwjs.
{: style="text-align: justify"}

O Javascript é uma linguagem simples, com uma sintaxe parecida com outras linguagens, como o C++. A sua versão mais atual, ES2015 ou ES6+ traz novas features que tornam o Javascript mais simples, independente de frameworks como o jQuery e mais fácil para desenvolver aplicações mais complexas. O ES2015 apresenta classes, métodos de tratar funções assíncronas (async e await), Ajax nativo e facilitado (fetch) e outras features.
{: style="text-align: justify"}

O resultado final de cada tópico estará dentro da pasta códigos.
{: style="text-align: justify"}

## Conteúdo
O guia aborda os seguintes assuntos:
{: style="text-align: justify"}

- [Utilizar Javascript no HTML](#utilizar-javascript-no-html)
- [Console e Debug](#console-e-debug)
- [Variáveis, Objetos e Funções](#variaveis-objetos-e-funcoes)
	- [Variáveis](#variaveis)
	- [Objetos e Arrays](#objetos-e-arrays)
- If, else, for, while e forEach
- Manipulação do DOM
- setInterval e setTimeout
- Eventos
- Requisições HTTP (Ajax)
- LocalStorage
- O que é Node, React, Electron e Outros
{: style="text-align: justify"}

## Utilizar Javascript no HTML

Para importar o Javascript é necessário utilizar a tag `<script>`, normalmente é utilizado no fim da tag `<body>`. Para importar é necessário do parâmetro `src` linkando o arquivo Javascript, como no exemplo:
{: style="text-align: justify"}

```html
<body>
  <!-----
    Resto do Código HTML
  ------>
  <script type="text/javascript" src="script.js"></script>
</body>
```

Também é possível utilizar códigos javascript sem a necessidade de importar um arquivo javascript dentro do HTML utilizando os códigos dentro da tag `<script>`:
{: style="text-align: justify"}

```html
<body>
  <!-----
    Resto do Código HTML
  ------>
  <script type="text/javascript">
    // Código Javascript
  </script>
</body>
```

O recomendado é criar um arquivo javascript separado do arquivo HTML para manter uma boa organização do código. Além disso, é recomendado também criar uma pasta para colocar todos os arquivos de scripts javascript.
{: style="text-align: justify"}

## Console e Debug
Dentro do arquivo javascript linkado no HTML, insira esse código:
{: style="text-align: justify"}

```javascript
console.log('Hello World');
```

Se atualizar a página HTML, verá que não aconteceu absolutamente nada. Mas se clicar com o botão direito do mouse e clicar em "Inspecionar" ou utilizar o atalho `Ctrl + Shift + I` e clicar na aba do console, irá ver uma mensagem:
{: style="text-align: justify"} 

<kbd>
  <img src="imagens/console.png" width="100%">
</kbd>

Esse código mostra uma mensagem no console. Isso pode ser útil para tentar resolver algum bug do código. E o console também é extremamente útil para esse propósito, nele você pode ver valores de variáveis, elementos HTML e utilizar códigos de Javascript.
{: style="text-align: justify"} 

Tente trocar o texto do console ou adicionar mais textos para visualizar dentro do console.
{: style="text-align: justify"} 

## Variáveis, Objetos e Funções

### Variáveis
Diferente de outras linguagens, o Javascript apresenta apenas dois tipos de variáveis, o tipo `const`, que é uma variável constante, ou seja, seu valor não pode mudar, e o tipo `let`, que é uma variável que o valor pode ser modificado. Não é necessário escrever o tipo da variável (string, int) como no C++ ou Java. Exemplo:
{: style="text-align: justify"}

```javascript
const x = "O valor é de";
let y = 10;

console.log(x);
console.log(y);

y = 20;

console.log(y);
```

Ao atualizar a página e ver o console, será possível ver a saída com os valores das variáveis. Como disse, é possível ver o valor de uma variável pelo console, apenas digite o nome da variável e aperte enter. Resultado:
{: style="text-align: justify"}

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
{: style="text-align: justify"}

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
{: style="text-align: justify"}

```javascript
const alfabeto = ['a', 'b', 'c', 'd', 'e'];

console.log(`Segunda letra do alfabeto: ${alfabeto[1]}`);

console.log('Array do Alfabeto:');
console.log(alfabeto);

alfabeto.push('f');

console.log('Array do Alfabeto depois do Push:');
console.log(alfabeto);
```

Tente declarar novas variáveis, objetos e arrays e procurar e utilizar novas funções de Arrays por meio da documentação do Javascript, como de remover o último elemento da lista ou cortar parte do array:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array.
{: style="text-align: justify"}