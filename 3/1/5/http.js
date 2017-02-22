/**
 * Created by harry on 20/02/2017.
 */
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

http.createServer(function(req, res){
    var method = req.method;
    console.log(method);
    var pathname = url.parse(req.url).pathname;
    switch (pathname) {
        case '/add' : resAdd(res, req);
            break;
        default : resDefault(res);
            break;
    }

}).listen(3000);
console.log('server is running on localhost:3000');

function resDefault(res){
    var pathname = __dirname + url.parse('/index.html').pathname;
    console.log(pathname);
    var file = fs.readFileSync(pathname);
    res.writeHead(200, {'Content-TYpe':'text/html'});
    res.end(file);
}

function resAdd(res, req){
    var postdata = '';
    req.addListener('data', function(postdatachunk){
        postdata += postdatachunk;
    });
    req.addListener('end', function(){
        console.log(querystring.parse(postdata));
        res.writeHead(200, {'Content-TYpe':'text/plain'});
        res.end(JSON.stringify(querystring.parse(postdata)));
    });
}