const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

const port = 3000
//Static file
app.use(express.static(path.join(__dirname,'public')))
//Set View engine
app.set('view engine','ejs')
app.set('views','./views')
//Body Parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
//Router
app.get('/',function(req,res){
    res.render('pages/three',{
        title : 'Page Three',
        message : 'Page Three by EJS!'
    })
})

app.get('/basicform',function(req,res){
    res.render('pages/five',{
        title : 'Page Five',
    })
})
app.post('/basicform',function(req,res){
    console.log(req.body)
    res.send('Login successful')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))