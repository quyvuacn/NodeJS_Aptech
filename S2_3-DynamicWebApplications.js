const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const articles = require('./S2_3-controller')

let posts = []

// app.use(express.logger()) 
app.use(morgan('combined'))

// app.use(express.bodyParser())
app.use(express.urlencoded())
app.use(express.json())
// npm i body-parser
// const urlencoded = bodyParser.urlencoded({extended : false})

const notImplimented = function(req, res) {
    res.sendStatus(501)
}

app.get('/articles',articles.index)
app.get('/articles/new',articles.new)
app.post('/articles',articles.create)
app.get('/articles/:articleId',notImplimented)

app.put('/articles/:articleId',notImplimented)
app.delete('/articles/:articleId',notImplimented)

app.post('/articles/:articleId/comments',notImplimented)
app.delete('/articles/:articleId/comments',notImplimented)


app.listen(8080,function(){
    console.log('Listen port 8080');
})



