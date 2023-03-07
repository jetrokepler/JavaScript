// Ler 2 valores fracionários e perguntar qual operação aritmética o usuário quer fazer com eles. Usar switch..case. Informar o resultado da operação.

alert("Esse site faz operações entre dois valores fracionários.")
var num1 = parseFloat(window.prompt("Informe o 1º número: "))
var num2 = parseFloat(window.prompt("Informe o 2º número: "))
var operacao = window.prompt("Informe a operação (+ ou - ou x ou /)")

while (operacao != "+" && operacao != "-" && operacao != "x" && operacao != "/") {

    var operacao = window.prompt("Operação inválida. Informe a operação (+ ou - ou  x ou /)")
    
}

switch (operacao) {
    case "+":

        soma = num1 + num2

        alert("Operação: adição. O resultado é: " + soma.toFixed(2))
        
        break;

    case "-":

        subtracao = num1 - num2

        alert("Operação: subtração. O resultado é: " + subtracao.toFixed(2))
        
        break;

    case "x":

        multiplicacao = num1 * num2

        alert("Operação: multiplicação. O resultado é: " + multiplicacao.toFixed(2))
        
        break;

    default:

        divisao = num1 / num2

        alert("Operação: divisão. O resultado é: " + divisao.toFixed(2))

        break;
}