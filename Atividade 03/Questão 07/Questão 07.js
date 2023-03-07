// Ler 3 números fracionários do teclado e informar se o primeiro é maior do que a soma dos dois últimos;

var num1 = parseFloat(window.prompt("Informe o valor do 1º número: "))
var num2 = parseFloat(window.prompt("Informe o valor do 2º número: "))
var num3 = parseFloat(window.prompt("Informe o valor do 3º número: "))

switch (num1 > ( num2 + num3)) {
    case true:

        alert("O 1º número (" + num1 + ") é maior que a soma do 2º (" + num2 + ") e do 3º (" + num3 + ").")
        
        break;

    case false:

        alert("O 1º número (" + num1 + ") não é maior que a soma do 2º (" + num2 + ") e do 3º (" + num3 + ").")

        break;
}