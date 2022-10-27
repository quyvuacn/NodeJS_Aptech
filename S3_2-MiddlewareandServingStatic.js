const express = require('express')
const path = require('path')
const app = express()

const port = 3000
//Static file
app.use(express.static(path.join(__dirname,'public')))

//Member
const memberAPI = express.Router()
app.get('/api/member',function(req, res){
    res.send('Member Page')
})
app.get('/api/member/profile',function(req, res){
    res.send('Member profile Page')
})
app.get('/api/member/changepassword',function(req, res){
    res.send('Member change password Page')
})

//Admin
const adminAPI = express.Router()
app.get('/api/admin',function(req, res){
    res.send('Admin Page')
})


app.use('/api/member',memberAPI)
app.use('/api/admin',adminAPI)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))