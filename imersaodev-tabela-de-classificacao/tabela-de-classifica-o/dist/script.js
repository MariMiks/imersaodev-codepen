var mariana = {
  nome: 'Mariana',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
}

var levi = {
  nome: 'Levi',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
}

mariana.pontos = calculaPontos(mariana)
levi.pontos = calculaPontos(levi)

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias*3)+jogador.empates
  return pontos
}

var jogadores = [mariana, levi]

exibirNaTela (jogadores)

function exibirNaTela (jogadores){
  var html = ""
  for (var i = 0; i < jogadores.length; i++){
    //+= -> var html = !html! + ...
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>" + "</tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria (i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirNaTela(jogadores)
}

function adicionarEmpate (i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirNaTela(jogadores)
}

function adicionarDerrota (i){
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirNaTela(jogadores)
}