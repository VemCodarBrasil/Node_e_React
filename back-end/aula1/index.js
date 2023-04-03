const express = require("express")
const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>Ola mundo</h1>')

})

app.get('/sobre', (req, res)=>{
    res.send('<h3>Vem Codar Brasil<h3>')
})



app.listen(3001, ()=>{
    console.log('server está usando a porta 3001')
})