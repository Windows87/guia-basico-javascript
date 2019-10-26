// Variáveis
const x = "O valor é de";
let y = 10;

console.log(x);
console.log(y);

y = 20;

console.log(y);

// Métodos de Concatenação
console.log(x + " " + y);
console.log(`${x} ${y}`);

// Objetos
const pessoa = {
  nome: 'Terry',
  sobrenome: 'Martin',
  idade: 38
};

console.log(`Olá ${pessoa.nome} ${pessoa.sobrenome}, sua idade é de ${pessoa.idade}`);

pessoa.idade = 39;

console.log(`Olá ${pessoa.nome}, sua nova idade é ${pessoa.idade}`);

// Arrays
const alfabeto = ['a', 'b', 'c', 'd', 'e'];

console.log(`Segunda letra do alfabeto: ${alfabeto[1]}`);

console.log('Array do Alfabeto:');
console.log(alfabeto);

alfabeto.push('f');

console.log('Array do Alfabeto depois do Push:');
console.log(alfabeto);