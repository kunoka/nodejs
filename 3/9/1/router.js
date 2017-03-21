/**
 * Created by harry on 21/03/2017.
 */

var http = require('http');
var url = require('url');

global.BASE_PATH = __dirname;
http.createServer(function(req, res) {
    var pathname = decodeURI(url.parse(req.url).pathname);
    console.log(pathname);
    if (pathname === '/favicon.ico') {
       return;
    }
    // var pathStr = pathname.substr(1);
    // var pathArr = pathStr.split('/');
    // var model = pathArr[0];
    // var controller = pathArr[1];

    var pathArr = pathname.split('/');
    pathArr.shift();
    console.log('pathname: ' + pathname);
    var model = pathArr.shift();
    console.log('model: ' + model);
    var controller = pathArr.shift();
    console.log('controller: ' + controller);
    if(!model || !controller) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('can not find source!');
    }

    try {
        var Class = require('./' + model);

    }catch (err) {
        console.log('<<<<<<<<<<< 404 >>>>>>>>>' + err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('can not find source!');
    }

    if (Class) {
        var Obj = new Class();
        Obj.init(res, req);
        try{
            Obj[controller].call();
        }catch (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('can not find source!');
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('can not find source!');
    }

}).listen(1337);

console.log('server is running on localhost:1337');