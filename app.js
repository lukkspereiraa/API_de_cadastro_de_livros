const express = require('express')  
const rotaLivro = require("./routes/livros")

const app =  express()
app.use(express.json())

const port = 8000

app.use('/livros', rotaLivro)

app.listen(port, ()=> {
    console.log(`escutando a porta ${port}`)
})