const http = require('http');

const server = http.createServer( function (req, res){

    res.writeHead(200);
    res.end('kola');

});

server.listen(3000, '127.0.0.1', function() {
    console.log('server in port 3000')
});
