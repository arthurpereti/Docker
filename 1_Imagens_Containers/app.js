const express = require("express")
const app = express()
const PORT = 3000

app.get('/', (req,res)=>{
    res.send("Olá, minha imagem")
})

app.listen(PORT, ()=>{
    console.log(`Executando na porta ${PORT}`)
})