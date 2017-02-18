/**
 * Created by harry on 18/02/2017.
 */

var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    debugger;
    res.end('you are so good');
});

server.listen('2000');