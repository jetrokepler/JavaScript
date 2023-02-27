// O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.
// A fórmula é IMC = peso / (altura)². Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.
// IMC em adultos: Condição
// Abaixo de 18,5: Abaixo do peso
// Entre 18,5 e 25: Peso normal
// Entre 25 e 30: Acima do peso
// Acima de 30: Obeso

alert("Esse site calcula o índice de massa coporal (IMC).")

var peso = Number(window.prompt("Informe o peso (Kg): "))
var altura = Number(window.prompt("Informe a altura (m): "))

var imc = peso / (altura) ** 2

if (imc < 18,5) {
    
    alert("Abaixo de peso.")

} else if (18,5 < imc < 25) {
    
    alert("Peso normal.")

} else if (25 < imc < 30) {
    
    alert("Acima do peso.")

} else if (imc > 30) {
    
    alert("Obeso.")

}