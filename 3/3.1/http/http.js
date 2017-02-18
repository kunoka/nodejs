/**
 * Created by harry on 11/13/16.
 */

var http = require('http'),
    fs = require('fs'),
    url = require('url');
//使用nodejs原来http模块来创建server
http.createServer(function(req, res){
    //获取客户端请求路径
    var pathname = url.parse(req.url).pathname;
    console.log('============ Start ============');
    console.log(url.parse(req.url));
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    //根据路径不同 进行不同的处理
    switch (pathname){
        case '/index' : resIndex(res);
            break;
        case '/img' : resImg(res);
            break;
        default: resDefault(res);
            break;
    }

}).listen(1337);
console.log('Server running at http:\\127.0.0.1:1337');

function resIndex(res){
    var readPath = __dirname + '/' + url.parse('index.html').pathname;
    console.log('readPath: ' + readPath);
    var indexPage = fs.readFileSync(readPath);
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(indexPage);
}

function resImg(res){
    var readPath = __dirname + '/' + url.parse('logo.png').pathname;
    console.log('readPath: ' + readPath);
    var indexPage = fs.readFileSync(readPath);
    res.writeHead(200, {'Content-type':'image/png'});
    res.end(indexPage);
}

function resDefault(res){
    var readPath = __dirname + '/' + url.parse('index.html').pathname;
    console.log('readPath: ' + readPath);
    var indexPage = fs.readFileSync(readPath);
    res.writeHead(404, {'Content-type':'text/plain'});
    res.end('can not find source');
}