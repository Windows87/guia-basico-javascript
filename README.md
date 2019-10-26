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
- Variáveis, Objetos e Funções
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