var express = require('express')
var app = express()
var url = require('url')
var morgan = require('morgan')

app.use(morgan('short'))

app.get('/',function(req,res){
    res.send('Home')
})

app.get('/greet/:statement',function(req, res){
    let greeting = req.params.statement || 'Default greeting'
    res.setHeader('token','my.litter.secret')
    res.send('This is my node app. '+ greeting)
})

app.use(function(req, res){
    res.status(404).send('Page not found. Try author')
})
app.listen(8080,function(){
    console.log("Server listening on port 8080");
})
