/**
 * Created by harry on 22/02/2017.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){

    var pathname = url.parse(req.url).pathname;
    var realPath = __dirname + pathname;

    var indexPage = fs.readFileSync(realPath);
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(indexPage)
}).listen(3000);
console.log('server is running on localhost:3000');
