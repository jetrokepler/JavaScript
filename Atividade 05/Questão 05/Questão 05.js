// Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 a 100.

for (let i = 1; i < 101; i++) {
    
    if (i % 2 == 0) {

        quadrado = i ** 2;

        alert(`${i}² = ${quadrado}`)
        
    }

}