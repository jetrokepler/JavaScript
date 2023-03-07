// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento
// 1 - À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 - À vista no cartão de crédito, recebe 15% de desconto
// 3 - Em duas vezes, preço normal de etiqueta sem juros
// 4 - Em duas vezes, preço normal de etiqueta mais juros de 10%

var valor = Number(window.prompt("Informe o valor do produto: "))

while (isNaN(valor) || valor <= 0) {
    
    var valor = Number(window.prompt("Valor inválido. Informe o valor do produto: "))

}

var pagamento = Number(window.prompt("Informe o tipo de paragamento (1 - À vista em dinheiro ou cheque (10% Desc.) / 2 - À vista no cartão de crédito (15% Desc.) / 3 - 2x (s/ juros) / 4 - 3x (10% de juros)."))

while (pagamento != 1 && pagamento != 2 && pagamento != 3 && pagamento != 4) {

    var pagamento = Number(window.prompt("Tipo de pagamento inválido. Informe o tipo de paragamento (1 - À vista em dinheiro ou cheque (10% Desc.) / 2 - À vista no cartão de crédito (15% Desc.) / 3 - 2x (s/ juros) / 4 - 3x (10% de juros)."))

}

if (pagamento == 1) {
    
    valor -= (valor * 10/100)

    alert("O valor do produto com desconte de 10% é: R$ " + valor.toFixed(2))

} else if (pagamento == 2) {

    valor -= (valor * 15/100)

    alert("O valor do produto com desconte de 15% é: R$ " + valor.toFixed(2))
    
} else if (pagamento == 3) {
    
    alert("O valor é: R$ " + valor.toFixed(2) + " e será divido em duas prestações.")

} else {

    valorparcelas = valor * (0.10 * (1 + 0.10)**3) / ((1 + 0.10)**3 - 1)
    

    alert("O valor das parcelas será: (3x): R$ " + valorparcelas.toFixed(2))

}