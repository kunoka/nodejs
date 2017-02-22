/**
 * Created by harry on 20/02/2017.
 */
var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req, res){

    var pathname = url.parse(req.url).pathname; //直接使用req.url也可以 url.parse是把req.url解析成对象返回
    // console.log(url.parse(req.url));
    var module = pathname.substr(1);
    console.log('moduleName: ' + module);
    var controller = querystring.parse(url.parse(req.url).query).c;
    console.log('controller: ' + controller);
    classObj = '';

    try {
        var classObj = require('./'+module);

    }catch(error){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('chdir: ' + error);
    }

    if(classObj){
        classObj.init(res, req);
        classObj[controller].call();
    }else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('can not find source')
    }

}).listen(3000);
console.log('server is running at localhost:3000');