/**
 * Created by harry on 18/02/2017.
 */
var http = require('http');
var router = require('./router');

http.createServer(function(req, res){
    req.setEncoding('utf8');
   // console.log(url.parse('index.html')) ;
    var pathname = req.url;
    // console.log('pathname: ' + pathname);
    res.writeHead(200, {'Content-Type':'text/html'});
    router.router(res, req, pathname);
    // console.log(pathname);
}).listen(3000);