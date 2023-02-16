//Faça uma página web que peça as 4 notas bimestrais e mostre a média.

var nota1 = Number(window.prompt("Informe a 1° nota: "))
var nota2 = Number(window.prompt("Informe a 2° nota: "))
var nota3 = Number(window.prompt("Informe a 3° nota: "))
var nota4 = Number(window.prompt("Informe a 4° nota: "))

var media = (nota1 + nota2 + nota3 + nota4) / 4

alert("A média é: " + media)