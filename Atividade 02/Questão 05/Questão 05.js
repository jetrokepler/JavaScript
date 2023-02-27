// Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, imprimir o resultado desta operação.

var num = Number(window.prompt("informe um número: "))

if (num % 2 == 0) {

    var result = num + 5
    
    alert("O número informado é par. O resultado é: " + result)

} else {

    var result = num + 8

    alert("O número informado é ímpar. O resultado é: " + result)
    
}