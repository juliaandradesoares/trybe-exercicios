//  1-crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;

for (let i = 1; i <= 10; i += 1) {
  fatorial *= i;
}

console.log(fatorial);

// 2-Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'julia';
let meuArray = [];

for (let letter of word) {
  meuArray.push(letter);
}

let palavraInvertida = '';

for (let i = (meuArray.length - 1); i >= 0; i -= 1) {
  palavraInvertida = palavraInvertida + meuArray[i];
}

console.log(palavraInvertida);

// 3-Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];

for (let palavra of array) {
  if (palavra.length > maiorPalavra.length) {
    maiorPalavra = palavra;
  }
}

console.log(maiorPalavra);

// 4-Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let numeroPrimo = 2;

for (let i = 3; i <= 50; i += 1) {
  let ePrimo = true;

  for (let j = 2; j < i; j += 1) {
    if (i % j === 0) {
      ePrimo = false;
    }
  }

  if (ePrimo) {
    numeroPrimo = i;
  }
}

console.log(numeroPrimo);

// BÔNUS

// 1-Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

const n = 5;

for (let i = 1; i <= n; i += 1) {
  let linha = '';
  for (let j = 1; j <= n; j += 1) {
    linha = linha + '*';
  }

  console.log(linha);
}

// 2-Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

for (let i = 1; i <= n; i += 1) {
  let linha = '';
  for (let j = 1; j <= i; j += 1) {
    linha = linha + '*';
  }

  console.log(linha);
}

// 3-Agora inverta o lado do triângulo. Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

for (let i = 1; i <= n; i += 1) {
  let linha = '';
  for (let j = n; j - i >= 1; j -= 1) {
    linha = linha + ' ';
  }

  for (let k = 1; k <= i; k += 1) {
    linha = linha + '*';
  }

  console.log(linha);
}

// 4-Depois, faça uma pirâmide com n asteriscos de base:

// 5-Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// 6-Faça um programa que diz se um número definido numa variável é primo ou não.

const numero = 100;
let ePrimo = true;

for (let i = 2; i < numero; i += 1) {
  if (numero % i === 0) {
    ePrimo = false;
  }
}

if (ePrimo) {
  console.log('O número ' + numero + ' é primo');
} else {
  console.log('O número ' + numero + ' não é primo');
}