let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let number of numbers) {
  console.log(number);
}

// 2-Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;

for (let number of numbers) {
  soma += number;
}

console.log(soma);

// 3-Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
const media = soma / numbers.length;

console.log(media);

// 4-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20".

if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

// 5-Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorNumero = numbers[0];

for (let number of numbers) {
  if (number > maiorNumero) {
    maiorNumero = number;
  } else {
    maiorNumero = maiorNumero;
  }
}

console.log(maiorNumero);

// 6-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado".

let quantidadeDeImpares = 0;

for (let number of numbers) {
  if (number % 2 !== 0) {
    quantidadeDeImpares += 1;
  }
}

if (quantidadeDeImpares === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(quantidadeDeImpares);
}

// 7-Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for (let number of numbers) {
  if (number < menorNumero) {
    menorNumero = number;
  } else {
    menorNumero = menorNumero;
  }
}

console.log(menorNumero);

// 8-Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

const meuArray = [];

for (let i = 1; i <= 25; i += 1) {
  meuArray.push(i);
}

console.log(meuArray);

// 9-Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let item of meuArray) {
  console.log(item / 2);
}