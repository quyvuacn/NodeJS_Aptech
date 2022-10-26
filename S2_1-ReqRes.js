const http = require('http')
const url = require('url')
const server = http.createServer()


server.on('request',function(req,res){
    console.log('Có 1 request gửi tới server',req.url)
    let incomingUrl = url.parse(req.url)
    console.log(incomingUrl)
    if(incomingUrl.path=='/hello'){
        res.writeHead(200,{'Content-Type': 'text/plain'})
        res.end('Hello')
    }if(incomingUrl.path=='/goodbye'){
        res.writeHead(200,{'Content-Type': 'text/plain'})
        res.end('Good Bye')
    }else{
        res.writeHead(404,{'Content-Type': 'text/plain'})
        res.end('Not Found')
    }
    // res.writeHead(200,{'Content-Type': 'text/plain'})
    // res.end('Hello world')
})

server.listen(8000)