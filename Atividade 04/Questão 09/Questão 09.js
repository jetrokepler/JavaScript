// 9 - Faça um programa que leia a altura de 5 pessoas e imprima a altura média das pessas usando uma estrutura de repetição.

let somaAlturas = 0;

for(let i = 1; i <= 5; i++) {
  let altura = parseFloat(prompt("Digite a altura da pessoa " + i + ":"));
  somaAlturas += altura;
}

let mediaAlturas = somaAlturas / 5;
console.log("A altura média das pessoas é: " + mediaAlturas.toFixed(2));