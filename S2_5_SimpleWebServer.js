var http = require('http')
var url = require('url')

var server =  http.createServer(function (req,res) {
    var queryObj  = url.parse(req.url,true).query
    var greeting = queryObj.greeting || 'Default greeting'
    res.end('This is my first node app. '+ greeting);
})

server.listen(8080,function(){
    console.log("Server listening on port 8080");
})
