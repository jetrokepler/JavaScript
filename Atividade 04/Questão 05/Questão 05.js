// 5 - Crie um programa que imprima a tabuada de um número digitado pelo usuário usando uma estrutura de repetição.

let numero = prompt("Digite um número para a tabuada:");

for(let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}