const fs = require('fs')

function gatTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function gatLivrosPorID(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    
    const livrosFiltrado = livros.filter(livro=> livro.id === id)[0]
    return livrosFiltrado
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListadeLivros = [...livros, livroNovo]

    fs.writeFileSync('livros.json', JSON.stringify(novaListadeLivros))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado]  = conteudoMudado

    fs.writeFileSync('livros.json',JSON.stringify(livrosAtuais))
}
function  deleteLivroPorId(id){
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))

    const livrosFiltrado = livrosAtuais.filter(livro => livro.id !== id)
    fs.writeFileSync('livros.json', JSON.stringify(livrosFiltrado))
}


module.exports ={
    gatTodosLivros,
    gatLivrosPorID,
    insereLivro,
    modificaLivro,
    deleteLivroPorId
}