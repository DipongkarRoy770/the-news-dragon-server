const express = require('express')
const app =express()
var cors = require('cors')
const port = 5000 ;
const categories = require('./data/categories.json')
const news = require('./data/news.json')


app.use(cors())

app.get ('/',(req,res)=>{
  res.send('hello world bangladesh')
})

app.get('/categories',(req,res)=>{
  res.send(categories)
})
app.get('/news',(req ,res)=>{
  res.send(news)
})
app.get('/news/:id',(req ,res)=>{
  const id = req.params.id 
  console.log(id)
  const selectedNews=news.find(n=>n._id===id)
  res.send(selectedNews)
})
app.get('/categories/:id',(req,res)=>{
  const id =parseInt(req.params.id)
  //console.log(id)
  if(id===0){
    res.send(news)
  }
  else{
    const categories = news.filter(n=>parseInt(n.category_id) ===id)
    res.send(categories)
  }
 
})

app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`)
})