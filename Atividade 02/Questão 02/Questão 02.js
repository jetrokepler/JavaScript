// Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.

var num = Number(window.prompt("Informe um número: "))

if (num % 2 == 0) {

    alert("O número " + num + " é par.")

} else {

    alert("O número " + num + " é ímpar.")
    
}