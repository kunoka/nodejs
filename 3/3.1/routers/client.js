/**
 * Created by harry on 11/13/16.
 */
var http = require('http'),
    url = require('url'),
    querystring = require('querystring');

http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;

    if(pathname === '/favicon.ico'){
        return;
    }
    var module = pathname.substr(1),
        str = url.parse(req.url).query,
        controller = querystring.parse(str).c,
        classObj = '';

    try {
        classObc = require('./' + module);
    }
    catch(err){
        console.log('chdir: ' + err); //打印错误信息
    }
    if(classObj){
        classObj.init(res, req);
        classObj[controller].call();
    }else{
        res.writeHead(404,{'Content-type':'text/plain'});
        res.end('can not find source');
    }
}).listen(1337);
console.log('Server running at http:\\127.0.0.1:1337');

