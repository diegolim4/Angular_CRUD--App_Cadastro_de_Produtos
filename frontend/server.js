const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/frontend'))
app.get('/*', (req, res)=>{
    res.sendFile(_dirname +'/dist/frontend/index.htm')
})

app.listen(PORT, ()=>{
    console.log('Servidor rodando na porta '+PORT)
})
