var conta = prompt("Digite o tipo de operação que deseja realizar: soma (1) , subtração (2) , multiplicação (3) , divisão (4) , potência (5) , log comum (6) ou log natural (7)")

if (conta == 6) {
  var valorLogComum = parseInt(prompt("Digite o logaritmando: "))
  var resultado = (Math.log10(valorLogComum)).toFixed(2)
  document.write ("<h2>" + "log"+ valorLogComum + " = " + resultado + "</h2>")
} else if (conta == 7) {
   var valorLogNat = parseInt(prompt("Digite o logaritmando: "))
  var resultado = (Math.log(valorLogNat)).toFixed(3)
  document.write ("<h2>" + "ln"+ valorLogNat + " = " + resultado + "</h2>")
} else { 
var valor1 = parseFloat(prompt("Digite o primeiro valor: "))
var valor2 = parseFloat(prompt("Digite o segundo valor: "))
}

if (conta == 1) {
    var resultado = (valor1 + valor2).toFixed(2)
    document.write ("<h2>" + valor1 + " + " + valor2 + " = " + resultado + "</h2>")
  } else if (conta == 2) {
    var resultado = (valor1 - valor2).toFixed(2)
    document.write ("<h2>" + valor1 + " - " + valor2 + " = " + resultado + "</h2>")
} else if (conta == 3) {
    var resultado = (valor1 * valor2).toFixed(2)
    document.write ("<h2>" + valor1 + " x " + valor2 + " = " + resultado + "</h2>")
} else if (conta == 4) {
    var resultado = (valor1 / valor2).toFixed(2)
    document.write ("<h2>" + valor1 + " ÷ " + valor2 + " = " + resultado + "</h2>")
} else if (conta == 5) {
    var resultado = (Math.pow (valor1, valor2)).toFixed(2)
    document.write ("<h2>" + valor1 + "^" + valor2 + " = " + resultado + "</h2>")
// utilizar ** ou Math.pow() para realizar cálculo de potência
} else { 
document.write ("<h2>Operação inválida</h2>")
}