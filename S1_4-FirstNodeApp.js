const http = require('http')

http.createServer(function (req, res) {
    res.end('Hello World');
}).listen(8081)

console.log('Server running at http://127.0.0.1:8081/');