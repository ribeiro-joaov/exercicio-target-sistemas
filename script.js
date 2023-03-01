/* int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}

imprimir(SOMA); */

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

//IMPORTANTE:
//Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let numero = parseInt(prompt("Digite um número:"));

let a = 0;
let b = 1;

while (b <= numero) {
  if (numero === b) {
    console.log(numero + " pertence à sequência de Fibonacci.");
    break;
  }
  let temp = b;
  b = a + b;
  a = temp;
}

if (b > numero) {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}

//3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
//• O menor valor de faturamento ocorrido em um dia do mês;
//• O maior valor de faturamento ocorrido em um dia do mês;
//• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

//IMPORTANTE:
//a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
//b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

fetch("./faturamento.json")
  .then((response) => response.json())
  .then((faturamentoMensal) => {
    let menorValor = Infinity;
    let maiorValor = -Infinity;

    for (let i = 0; i < faturamentoMensal.length; i++) {
      const valor = faturamentoMensal[i].valor;
      if (valor < menorValor) {
        menorValor = valor;
      }
      if (valor > maiorValor) {
        maiorValor = valor;
      }
    }

    console.log(`Menor valor de faturamento diário: ${menorValor}`);
    console.log(`Maior valor de faturamento diário: ${maiorValor.toFixed(2)}`);

    const diasComFaturamento = faturamentoMensal.filter(
      (dia) => dia.valor > 0
    ).length;
    let somaValores = 0;
    const mediaMensal = somaValores / diasComFaturamento;
    let diasAcimaDaMedia = 0;
    for (let i = 0; i < faturamentoMensal.length; i++) {
      const valor = faturamentoMensal[i].valor;
      if (valor > mediaMensal) {
        diasAcimaDaMedia++;
      }
    }
    console.log(
      `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
    );
  });

//4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

//SP – R$67.836,43
//RJ – R$36.678,66
//MG – R$29.229,88
//ES – R$27.165,48
//Outros – R$19.849,53

//Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const valorTotalMensal = Object.values(faturamentoEstados).reduce(
  (acc, valor) => acc + valor,
  0
);

for (let estado in faturamentoEstados) {
  const percentual = (faturamentoEstados[estado] / valorTotalMensal) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

//5) Escreva um programa que inverta os caracteres de um string.

//IMPORTANTE:
//a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
//b) Evite usar funções prontas, como, por exemplo, reverse;

let str = prompt("Digite uma palavra:");
let strInvertida = "";

for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}

console.log("String original: " + str);
console.log("String invertida: " + strInvertida);
