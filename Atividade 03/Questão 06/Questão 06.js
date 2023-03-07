// Ler 3 valores em qualquer ordem e escrever eles em ordem crescente;

alert("Esse site coloca números em ordem crecente.")
var num1 = Number(window.prompt("Informe o 1º número: "))
var num2 = Number(window.prompt("Informe o 2º número: "))
var num3 = Number(window.prompt("Informe o 3º número: "))

switch (true) {
    case num1 > num2 && num2 > num3:
        
        alert("A ordem é: " + num3 + ", " + num2 + ", " + num1)

        break;

    case num1 > num3 && num3 > num2:

        alert("A ordem é: " + num2 + ", " + num3 + ", " + num1)

        break;

    case num2 > num1 && num1 > num3:

        alert("A ordem é: " + num3 + ", " + num1 + ", " + num2)

        break;

    case num2 > num3 && num3 > num1:

        alert("A ordem é: " + num1 + ", " + num3 + ", " + num2)

        break;

    case num3 > num2 && num2 > num1:

        alert("A ordem é: " + num1 + ", " + num2 + ", " + num3)

        break;

    case num3 > num1 && num1 > num2:

        alert("A ordem é: " + num2 + ", " + num1 + ", " + num3)

        break;
}