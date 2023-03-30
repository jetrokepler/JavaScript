// 4 - Escreva um programa que calcule a soma de todos os números ímpares de 1 a 50 usando uma estrutura de repetição.

let sum = 0;

for(let i = 1; i <= 50; i++) {
  if(i % 2 !== 0) { // Verifica se o número é ímpar
    sum += i; // Adiciona o número à soma
  }
}

console.log("A soma de todos os números ímpares de 1 a 50 é: " + sum);