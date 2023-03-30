// 10 - Escreva um programa que leia um número inteiro positivo e imprima todos os números primos até esse número usando uma estrutura de repetição.

let numero = parseInt(prompt("Digite um número inteiro positivo:"));

for(let i = 2; i <= numero; i++) {
  let primo = true;
  for(let j = 2; j < i; j++) {
    if(i % j == 0) {
      primo = false;
      break;
    }
  }
  if(primo) {
    console.log(i);
  }
}