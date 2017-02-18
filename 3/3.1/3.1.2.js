/**
 * Created by harry on 12/13/16.
 */
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
    console.log('pathname: ' + pathname);

    //根据路径不同 进行不同的处理
   var param = pathname.substr(2),
       firstParam = pathname.substr(1,1).toUpperCase();
    var functionName = 'res' + firstParam + param;
    response = res;

    if(pathname == '/'){
        resDefault(res);
    }else if(pathname == '/favicon.ico'){
        return;
    }else{
        eval(functionName + ' (response) ');
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