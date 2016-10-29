/**
 * Created by harry on 9/13/16.
 */

var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/plain' });
    res.end('You are good');
    //res.end(req);
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');