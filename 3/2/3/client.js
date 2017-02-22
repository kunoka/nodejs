/**
 * Created by harry on 22/02/2017.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var staticModule = require('./static_module');

console.log(staticModule);
http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log('pathname: ' + pathname);
    if(pathname == '/index' || pathname == '/') {
        goIndex(res, __dirname + req.url);
    }else{
        staticModule.getStaticFile(pathname, res);
    }
}).listen(3000);
console.log('server is running on localhost:3000');

function goIndex(res, realPath){
    console.log(realPath);
    res.writeHead(200, {'Content-Type':'text/html'});
    var file = fs.readFileSync(realPath+'.html');
    res.end(file);

}