var numeroSecreto = parseInt(Math.random() * 10)
var tentativa = 3
    
while (tentativa) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))
  if (numeroSecreto == chute){
    alert ("Acertou")
    break
  } else if (chute > numeroSecreto){
    alert ("O número secreto é menor")
    tentativa = tentativa - 1
  }  else if (chute < numeroSecreto){
    alert ("O número secreto é maior")
    tentativa = tentativa - 1
  } else {
    alert ("Errou. O número secreto era " + numeroSecreto)
  }
}

if (chute != numeroSecreto){
  alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto)
}