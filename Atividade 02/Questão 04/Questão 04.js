// Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.

alert("Se o valor informado for positivo, será dobrado. Se negativo, será triplicado.")

var num = Number(window.prompt("Informe um número: "))

while (num == 0) {

    var num = Number(window.prompt("Zero é um número neutro. Informe outro número: (se o valor informado for positivo, será dobrado. Se negativo, será triplicado) "))
    
}

if (num > 0) {

    result = num * 2

    alert("O númer é positivo e foi dobrado. O resultado é: " + result)

} else {
    
    result = num * 3

    alert("O númer é negativo e foi triplicado. O resultado é: " + result)

}