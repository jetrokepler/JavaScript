// 3 - Refaça o exercício abaixo (agora eum JavaScript), mas desta vez utilizando as estruturas de reptição, onde o programa deverá finalizar quando o usuário digitar 0, caso contrário ficará cadastrando os pedidos, agora vai poder acumular mais de um produto e ao final deverá ser dada a soma dos pedidos.

// O cardápio de uma casa de lanches é dado pela tabela abaixo:

// Escreva um algoritmo que leia o código do item adiquirido pelo consumidor e a quantidade, calculando e mostrando o valor a pagar. Não será necessário exibir o produto e o valor, somente o valor final.

var codigo = [100, 101, 102, 103, 104, 105]
var preco_unitario = [1.7, 2.3, 2.6, 2.4, 2.5, 1]
var contador = 1
var total = 0

while (contador != 0) {
    
    pedido = Number(window.prompt("Informe número do pedido: \n 100 - Cachorro quente \n 101 - Bauru simples \n 102 - Bauru com ovo \n 103 - Hambúrguer \n 104 - Cheeseburguer \n 105 - Refrigerante"))

    contador = Number(window.prompt("Se quiser mais alguma coisa, digite 1. \n Caso queira encerrar seu pedido, digite 0."))

    if (pedido == 100) {

        total += preco_unitario[0]
        
    } else if (pedido == 101) {

        total += preco_unitario[1]
        
    } else if (pedido == 102) {

        total += preco_unitario[2]
        
    } else if (pedido == 103) {

        total += preco_unitario[3]
        
    } else if (pedido == 104) {

        total += preco_unitario[4]
        
    } else {

        total += preco_unitario[5]

    }

    if (contador == 0) {

        alert(`O total é igual a: ${total.toFixed(2)}`)
        
    }

}