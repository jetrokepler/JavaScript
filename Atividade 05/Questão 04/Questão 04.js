// Faça um algoritmo que leia um conjunto de 15 valores, um de cada vez, acompanhados de um código 1 ou 2. O valor representa o número de cobaias utilizadas em uma das 15 experiências feitas e os códigos 1 e 2 reperesentam respectivamente coelhos e ratos. Mostre no final, o total de cobaias utilizadas, o total de coelhos, total de ratos, e o percentual de coelhos e ratos.

var total_cobaias = 0
var total_coelhos = 0
var total_ratos = 0

for (let i = 1; i < 16; i++) {
    
    var num_cobaias = parseInt(window.prompt(`Informe o nº de cobaias uilizadas na ${i}º experiência: `))

    total_cobaias += num_cobaias

    animal = parseInt(window.prompt('Informe o(s) animal(s) usado(s): \n "1" para coelhos; \n "2" para ratos.'))

    if (animal == 1) {
        
        total_coelhos += num_cobaias;

    } else {

        total_ratos += num_cobaias;

    }
    
}

percentual_coelhos = (total_coelhos / total_cobaias) * 100;
percentual_ratos = (total_ratos / total_cobaias) * 100;

alert(`RELATÓRIO \n Total de cobaias: ${total_cobaias} \n Total de coelhos: ${total_coelhos} \n Percentual de coelhos: ${percentual_coelhos.toFixed(2)}% \n Total de ratos: ${total_ratos} \n Percentual de ratos: ${percentual_ratos.toFixed(2)}%`)