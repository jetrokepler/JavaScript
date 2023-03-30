// 8 - Crie um programa que calcule a média de um conjunto de números digitados pelo usuário até que ele digite um núemero negativo usando uma estrutura de repetição.

let soma = 0;
let quantidade = 0;
let numero = 0;

do {
  numero = parseInt(prompt("Digite um número (digite um número negativo para sair):"));
  if(numero >= 0) {
    soma += numero;
    quantidade++;
  }
} while(numero >= 0);

let media = soma / quantidade;
console.log("A média dos números digitados é: " + media);