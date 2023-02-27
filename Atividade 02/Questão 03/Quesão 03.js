// Faça um algoritmo que leia dois valores inteiros A e B e se os valores forem iguais deverá somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.

alert("Se os valores informados forem iguais, serão somados. Se forem diferentes, serão multiplicados.")

var a = Number(window.prompt("Informe o valor de A: "))
var b = Number(window.prompt("Informe o valor de B: "))

if (a == b) {

    c = a + b

    alert("Os valores foram somados. O resultado é: " + c)

} else {

    c = a * b

    alert("Os valores foram multiplicados. O resultado é: " + c)

}