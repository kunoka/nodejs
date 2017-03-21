/**
 * Created by harry on 03/03/2017.
 */
var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    staticModule = require('./static_module');

console.log(staticModule);
http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log('pathname: ' + pathname);
    if(pathname == '/index' || pathname == '/') {
        // goIndex(res, __dirname + req.url);
        goIndex(res, __dirname + '/index.html');
    }else{
        console.log('<<<<<<<<< create server >>>>>>>>')
        staticModule.getStaticFile(pathname, req, res);
    }
}).listen(3000);
console.log('server is running on localhost:3000');

function goIndex(res, realPath){
    // console.log(realPath);
    res.writeHead(200, {'Content-Type':'text/html'});
    var file = fs.readFileSync(realPath);
    res.end(file);

}