function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector ('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.startsWith('https')){
   listarFilmesNaTela(filmeFavorito)
  } else {
    alert("Vídeo Inválido")
  }
  campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<iframe src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}