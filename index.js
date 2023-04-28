const express = require('express')
const app =express()
var cors = require('cors')
const port = 5000 ;
const categories = require('./data/categories.json')


app.use(cors())

app.get ('/',(req,res)=>{
  res.send('hello world bangladesh')
})

app.get('/categories',(req,res)=>{
  res.send(categories)
})

app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`)
})