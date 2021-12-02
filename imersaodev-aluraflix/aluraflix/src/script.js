var listagem = ["https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BODcxMzY3ODY1NF5BMl5BanBnXkFtZTgwNzg1NDY4MTE@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i = 0; i < listagem.length; i++){
 document.write("<img src=" + listagem[i] + ">")
}

//for (var i = listagem.length; i >= 0; i--){
//  console.log(listagem[i])}
// não funciona pq o lenght vai mandar a quantidade de elementos, e o arry [] se inicia com o 0