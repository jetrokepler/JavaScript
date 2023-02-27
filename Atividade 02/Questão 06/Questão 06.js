// Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// ● para homens: (72.7 * h) – 58;
// ● para mulheres: (62.1 * h) – 44.7

var genero = window.prompt("Informe o sexo (M/F): ")
var altura = Number(window.prompt("Informe a sua altura: "))

if (genero == "M") {
    
    result = (72.7 * altura) - 58

    alert("O reslutado é: " + result)

} else if (genero == "F") {
    
    result = (62.1 * altura) - 44.7

    alert("O resultado é: " + result)

} else {
    
    alert("Sexo inválido. Informe M para masculono e F para feminino.")

}