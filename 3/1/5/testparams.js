/**
 * Created by harry on 22/02/2017.
 */
var http = require('http');
var httpparams = require('./httpparams.js');

http.createServer(function(req, res){
    console.log(req.method);
    res.writeHead(200, {'Content-Type':'text/plain'});

    httpparams.init(res, req);

    switch (req.method) {
        case 'GET': res.end(httpparams.get('email'));
            break;
        case 'POST':httpparams.post('email',function(data){
            res.end(data);

        });
            break;
        default:
            res.end('can not support method');
            break;
    }
   
}).listen(3000);

console.log('server is running on localhost:3000');