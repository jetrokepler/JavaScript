//Faça uma página web que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

var lado = Number(window.prompt("Informe a medida do lado do quadrado: "))

area = lado * lado

window.alert("A área é: " + area)

var dobro = area * 2

window.alert("O dobro da área é: " + dobro)