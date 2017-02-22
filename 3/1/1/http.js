/**
 * Created by harry on 20/02/2017.
 */
var http = require('http');
http.createServer(function(req, res){
    var path = req.url;
    console.log(path);
    console.log(req.method);
    console.log(req.headers);
    switch (path){
        case'/index': resIndex(res);
            break;
        case '/img' : resImage(res);
            break;
        default:
            path = resDefault(res);
            break;

    }
    // res.writeHead(200,{'Content-Type':'text/plain'});
    // res.end(path);
}).listen(3000);
console.log('server is running at localhost:3000');

function resIndex(res){
    var fs = require('fs');
    var filePath = __dirname + '/index.html';
    console.log(filePath);
    var file =fs.readFileSync(filePath);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(file);
}
function resImage(res){
    var fs = require('fs');
    var filePath = __dirname + '/end.png';
    var file =fs.readFileSync(filePath);
    res.writeHead(200,{'Content-Type':'image/png'});
    res.end(file);
}

function resDefault(res){
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end('Could not find the path.');
}