const x = 10;

// If e else de apenas uma linha
if(x > 10)
  console.log('Maior que 10');
else if (x == 10)
  console.log('Igual a 10');
else
  console.log('Menor que 10');

// If e else com mais de uma linha
const senha = 'abc123';

if(senha === 'abc123') {
  console.log('Senha Correta!');
  console.log('Entrando no Sistema..');
} else {
  console.log('Senha Inválida.');
}

// Operadores de Comparação
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

// Operadores Lógicos
const y = 10;
const z = 20;
const p = true;

console.log(y === 10 && z > 10); // true
console.log(y === 10 && z < 10); // false

console.log(y === 10 || z > 10); // true
console.log(y === 10 || z < 10); // true

console.log(!p); // false
console.log(!!p); // true

// For, While e forEach

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