// Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de aproveitamento, usando a fórmula:
// M = (nota1 + nota 2 * 2 + nota 3 * 3 + ME) / 7
// A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.
// Média de aproveitamento Conceito
// >= 90 A
// >= 75 e < 90 B
// >= 60 e < 75 C
// >= 40 e < 60 D
// < 40 E

var numid = Number(window.prompt("Informe o seu número de identificação (chamada): "))
var nota1 = Number(window.prompt("Informe a 1º nota: "))
var nota2 = Number(window.prompt("Informe a 2º nota: "))
var nota3 = Number(window.prompt("Informe a 3º nota: "))
var mdex = Number(window.prompt("Informe a média dos exercícios: "))

mdap = ((nota1 + nota2 * 2 + nota3 * 3 + mdex) / 7)

alert("Número do Aluno: " + numid)
alert("1º nota: " + nota1.toFixed(2))
alert("2º nota: " + nota2.toFixed(2))
alert("3º nota: " + nota3.toFixed(2))
alert("Média dos exercícios: " + mdex.toFixed(2))
alert("Méida de aproveitamento: " + mdap.toFixed(2))

if (mdap >= 9) {
    
    var conceito = "a"
    alert("APROVADO (A)")

} else if (mdap >= 7.5) {
    
    var conceito = "b"
    alert("APROVADO (B)")

} else if (mdap >= 6) {
    
    var conceito = "c"
    alert("APROVADO (C)")

} else if (mdap >= 4) {
    
    var conceito = "d"
    alert("REPROVADO (D)")

} else {
    
    var conceito = "e"
    alert("REPROVADO (E)")

}