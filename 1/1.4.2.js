/**
 * Created by harry on 9/13/16.
 */

var http = require('http');
http.createServer(function(req,res){
    var html = '<html><head><title>Node.js TEst</title></head><body>' +
        '<div style="color:red">Hi Node, I like you so much</div></body></html>';
    res.writeHead(200, {'Content-Type' : 'text/html' });
    res.end(html);
    //res.end(req);
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');