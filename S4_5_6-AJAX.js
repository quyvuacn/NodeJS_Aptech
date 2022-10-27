const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())
app.use(express.json())
let data = [
    {
        id : 1,
        name : 'Vũ Viết Quý'
    },
    {
        id : 2,
        name : 'Nguyễn Đắc Dũng'
    },
    {
        id : 3,
        name : 'Tạ Duy Linh'
    }
]

app.get('/ajaxcall',function(req, res){
    res.send(data)
})

app.post('/ajaxcall',function(req,res,next){
    if(!data.find(el=>el.id==req.body.id)){
        data.push(req.body)
        res.send(data)
    }else{
        next('ID đã tồn tại')
    }
    
})
app.delete('/ajaxcall/:id',function(req,res){
    let id = req.params.id
    data = data.filter(el=>el.id != id)
    res.send(data)
})
app.put('/ajaxcall/:id',function(req,res){
    let name = req.body.name
    let id = req.params.id
    data.find(el=>el.id == id).name = name
    res.send(data)
})

//S4_5-AJAX.html
app.listen(port, () => console.log(`Example app listening on port ${port}!`))