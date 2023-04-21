const fs =  require("fs")
const { gatTodosLivros, gatLivrosPorID, insereLivro, modificaLivro, deleteLivroPorId } = require("../services/livros")

 
function gatLivros(req, res) {
        try{
            const livros = gatTodosLivros()
            res.send(livros)
        } catch (error){
            res.status(500)
            res.send(error.message)
        }
        
    }
function gatLivro(req, res) {
        try{   
            const id = req.params.id

            if (id && Number(id)){
                const livro = gatLivrosPorID(id)
                res.send(livro)
            } else {
                res.status(422)
                res.send("id nâo valido")
            }

        } catch (error){
            res.status(500)
            res.send(error.message)
        }
        
    }    


function postLivros(req, res){
    try{
        const livroNovo = req.body
        if(req.body.nome){
            insereLivro(livroNovo)
            res.send("livro novo ensirido com sucesso")
            res.status(201)
        }else{
            res.status(422)
            res.send("coloque um nome para seu livro")
        }
      
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try{
        const  id = req.params.id
        
        if (id && Number(id)){
            const body = req.body
            modificaLivro(body, id)
        } else {
            res.status(422)
            res.send("id nâo valido")
        }


        
        res.send('item modificado com sucesso')
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try{
        const id = req.params.id
        
        if (id && Number(id)){
            deleteLivroPorId(id)
            res.send('livro deletado com sucesso')
        } else {
            res.status(422)
            res.send("id nâo valido")
        }
     
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}
    module.exports = {
        gatLivros,
        gatLivro,
        postLivros,
        patchLivro,
        deleteLivro
    }