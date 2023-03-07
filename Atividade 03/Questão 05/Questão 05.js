// Escrever se um ano informado pelo usuário é bissexto ou não. Um ano é bissexto quando é (divisível por 400) ou é (divisível por 4 e não por 100).

alert("Esse site diz se um ano é bissexto ou não.")
var ano = parseInt(window.prompt("Informe o ano: "))

switch (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
    case true:

        alert("O ano " + ano + " é bissexto.")
        
        break;

    default:

        alert("O ano " + ano + " não é bissexto.")

        break;
}