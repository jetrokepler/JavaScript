// 3 - Faça um programa que leia a idade de 5 pessoas e imprima a média das idades usando a estrutra de repetição do..while.

let i = 0;
let somaIdades = 0;

do {
  let idade = parseInt(prompt("Digite a idade da pessoa " + (i+1) + ":"));
  somaIdades += idade;
  i++;
} while (i < 5);

let mediaIdades = somaIdades / 5;
console.log("A média das idades é: " + mediaIdades);