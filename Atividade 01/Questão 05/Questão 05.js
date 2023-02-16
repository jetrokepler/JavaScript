//Faça uma página web que peça 2 números inteiros e um número real. Calcule e mostre:
//a) o produto do dobro do primeiro com metade do segundo .
//b) a soma do triplo do primeiro com o terceiro.
//c) o terceiro elevado ao cubo.

var num1 = Number(window.prompt("Informe um número inteiro: "))
var num2 = Number(window.prompt("Informe mais um número inteiro: "))
var num3 = Number(window.prompt("Informe um número real: "))

var letraa = (2 * num1) * (num2 / 2)
var letrab = (3* num1) + (num3)
var letrac = (num3 * num3 * num3)

alert("Letra A: " + letraa)
alert("Letra B: " + letrab)
alert("letra C: " + letrac)