//Faça uma página web que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius.
//C = (5 * (F-32) / 9).

var farenheit = Number(window.prompt("Informe a temperatura em graus Farenheit: "))

var celsius = 5 * (farenheit-32) / 9

window.alert("A temperatura em celsius é: " + celsius)