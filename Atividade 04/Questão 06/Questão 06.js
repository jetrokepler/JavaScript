// 6 - Faça um programa que leia 10 números e exiba o maior número digitado usando uma estrutura de repetição.

let maior = 0;

for(let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt("Digite um número:"));
  if(numero > maior) {
    maior = numero;
  }
}

console.log("O maior número digitado é: " + maior);