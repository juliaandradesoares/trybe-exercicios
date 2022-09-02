// 1-Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. 
const a = 10;
const b = 5;

const soma = a + b;
const subtração = a - b;
const multiplicação = a * b;
const divisão = a / b;
const modulo = a % b;

// 2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const c = 10;
const d = 5;

if (c >= d) {
  return c;
} else {
  return d;
}

// 3-Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const e = 10;
const f = 5;
const g = 2;

if (e >= f && e >= g) {
  return e;
} else if (f >= g && f >= e) {
  return f;
} else {
  return g;
}

// 4-Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".
const h = 10;

if (h > 0) {
  return 'positive';
} else if (h < 0) {
  return 'negative';
} else {
  return 'zero';
}

// 5-Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const i = 30;
const j = 60;
const k = 90;

if (i < 0 || j < 0 || k < 0) {
  return 'Os ângulos devem ser maiores do que 0';
} else {
  if ( i + j + k === 180) {
    return true;
  } else {
    return false;
  }
}

// 6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
const nome = bispo;
const peca = nome.toLowerCase();

switch (peca) {
  case 'rei':
    return 'Rei-> Uma casa apenas para qualquer direção.';
    break;
  case 'bispo':
    return 'Bispo-> Diagonal.';
    break;
  case 'rainha':
    return 'Rainha-> Diagonal, horizontal e vertical.';
    break;
  case 'cavalo':
    return 'Cavalo -> "L" pode pular sobre as peças.';
    break;
  case 'torre':
    return 'Torre -> Horizontal e vertical.';
    break;
  case 'peão':
    return "Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.";
    break;
  default:
    return 'Erro, peça inválida!';
    break;
};

// 7-Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
const nota =  87;

if (nota < 0 || nota > 100) {
  return 'A nota deve ser maior ou igual a 0 e menor ou igual a 100'
} else if (nota >= 90) {
  return 'A';
} else if (nota >= 80 && nota < 90) {
  return 'B';
} else if (nota >= 70 && nota < 80) {
  return 'C';
} else if (nota >= 60 && nota < 70) {
  return 'D';
} else if (nota >= 50 && nota < 60) {
  return 'E';
} else if (nota < 50) {
  return 'F';
}

// 8-Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
const l = 10;
const m = 5;
const n = 2;

if (l % 2 === 0 || m % 2 === 0 || n % 2 === 0) {
  return true;
} else {
  return false;
}

// 9-Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
const o = 10;
const p = 5;
const q = 2;

if (o % 2 !== 0 || p % 2 !== 0 || q % 2 !== 0) {
  return true;
} else {
  return false;
}

// 10-Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
const custo = 100;
const custoComImposto = 120;
const venda = 200;

if (custo < 0 || venda < 0) {
  return 'Os valores devem ser maiores do que 0'
} else {
  return 1000 * (venda - custo)
}

// 11-Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

const salarioBruto = 4850;

if (salarioBruto <= 1556.94) {
  const INSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  const INSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  const INSS = salarioBruto * 0.11;
} else {
  const INSS = 570.88;
}

if (salarioBruto <= 1903.98) {
  const IR = 0;
  const parcela = 0;
} else if (salarioBruto <= 2826.65) {
  const IR = salarioBruto * 0.75;
  const parcela = 142.80;
} else if (salarioBruto <= 3751.05) {
  const IR = salarioBruto * 0.15;
  const parcela = 354.80;
} else if (salarioBruto <= 4664.68) {
  const IR = salarioBruto * 0.225;
  const parcela = 636.13;
} else {
  const IR = salarioBruto * 0.275;
  const parcela = 869.36;
}

const salarioLiquido = salarioBruto - INSS - IR + parcela;