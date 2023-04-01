// 1 - Leia 20 valores reais e calcule seu somatório utilizando a instrução while.

var i = 0;
var somatorio = 0;

while (i < 20) {
    
    i++;

    var num = Number(window.prompt(`Informe o ${i}º número:`));

    somatorio += num;

}

window.prompt(`O total é: ${somatorio}`)