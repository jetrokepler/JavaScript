// Calcular a multa: Leia a velocidade de um carro e a velocidade máxima para a rua: 1.Informe 50 reais se estiver até 10km/h acima; 2.Informe 100 reais se estiver entre 11km/h e 30km/h acima; 3.Informe 300 reais se estiver acima de 31km/h acima;

var velcarro = Number(window.prompt("Informe a velocidade que o carro estava: "))
var velmax = Number(window.prompt("Informe a velocidade máxima permitida da na rua: "))

var difvel = velcarro - velmax

switch (true) {
    case difvel > 0 && difvel <= 10:

        alert("Multa de R$50,00.")

        break;

    case difvel > 10 && difvel <= 30:

        alert("Multa de R$100,00.")

        break;

    case difvel > 30:

        alert("Multa de R$300,00.")

        break;

    default:

        alert("Não há multa.")

        break;
}