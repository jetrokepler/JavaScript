// 7 - Escreva um programa que leia o nome e a idade de 5 pessoas e imprima o nome da pessoa mais velha usando uma estrutura de repetição.

let nomeMaisVelho;
let idadeMaisVelho = 0;

for(let i = 1; i <= 5; i++) {
  let nome = prompt("Digite o nome da pessoa:");
  let idade = parseInt(prompt("Digite a idade da pessoa:"));
  
  if(idade > idadeMaisVelho) {
    idadeMaisVelho = idade;
    nomeMaisVelho = nome;
  }
}

console.log("A pessoa mais velha é: " + nomeMaisVelho);