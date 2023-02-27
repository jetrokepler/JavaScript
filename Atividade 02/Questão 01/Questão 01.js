// Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.

var a = Number(window.prompt("Informe o valor de A: "))
var b = Number(window.prompt("Informe o valor de B: "))
var c = Number(window.prompt("Informe o valor de C: "))

if (a + b < c) {

    alert("a + b < c")

} else if (a + b == c) {

    alert("a + b = c")

} else {

    alert("a + b > c")
    
}