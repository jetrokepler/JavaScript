// 2 - Leia 20 valores reais e calcule seu somatório utilizando a instrução do...while.

var i = 0;
var somatorio = 0;

do {

    i++;

    var num = Number(window.prompt(`Informe o ${i}º número:`));

    somatorio += num;
    
} while (i < 20);

window.prompt(`O resultado é: ${somatorio}`)