const path = require('path')
const http = require('http')
const fs = require('fs')
const url = require('url')
const mime = require('mime')

const server = http.createServer()

function genericSend(code, mess, res){
    res.writeHead(code,{'Content-Type':'text/plain'})
    res.end(mess)
}

server.on('request',function(req,res){
    let urlParams = url.parse(req.url)
    let fileName = path.join('.',urlParams.pathname)
    //fileName có giá trị là 1 đường dẫn tuyệt đối
    //path.exists không còn hỗ trợ thay bằng fs.exists
    fs.exists(fileName,function(exists){
        if(!exists)
            return genericSend(404,'Not Found',res)
        fs.readFile(fileName,'binary',function(err,file){
            if(err)
            return genericSend(500,'Internal Server Error',res)
            //mime.lockup => Dành cho version 1
            //mime.getType => Dành cho version 2
            type = mime.getType(fileName)
            res.writeHead(200,{'Content-Type':type})
            res.write(file,'binary')
            res.end()
        })
    })
})


server.listen(8000)