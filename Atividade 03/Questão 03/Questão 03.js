// Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente.

alert("Esse site mostra números em ordem decrescente.")
var num1 = parseInt(window.prompt("Informe o 1º número: "))
var num2 = parseInt(window.prompt("Informe o 2º número: "))
var num3 = parseInt(window.prompt("Informe o 3º número: "))


if (num1 > num2 && num2 > num3) {

    alert("A ordem decrescente é: " + num1 + ", " + num2 + ", " + num3 + ".");

} else if (num1 > num3 && num3 > num2) {

    alert("A ordem decrescente é: " + num1 + ", " + num3 + ", " + num2 + ".");

} else if (num2 > num1 && num1 > num3) {

    alert("A ordem decrescente é: " + num2 + ", " + num1 + ", " + num3 + ".");

} else if (num2 > num3 && num3 > num1) {

    alert("A ordem decrescente é: " + num2 + ", " + num3 + ", " + num1 + ".");

} else if (num3 > num1 && num1 > num2) {

    alert("A ordem decrescente é: " + num3 + ", " + num1 + ", " + num2 + ".");

} else {

    alert("A ordem decrescente é: " + num3 + ", " + num2 + ", " + num1 + ".");

}