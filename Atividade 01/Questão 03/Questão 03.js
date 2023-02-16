//Faça uma página web que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

var vphr = Number(window.prompt("Informe quanto você ganha por hora: "))
var horas = Number(window.prompt("Informe quantas horas você trabalha no mês: "))

var sal = vphr * horas

alert("O total do seu salário é igual a: " + sal)