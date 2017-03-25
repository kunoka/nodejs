/**
 * Created by harry on 24/03/2017.
 */

var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    querystring = require('querystring'),
    index = require('./index');

http.createServer(function(req, res) {
    var pathname = req.url;
    console.log(pathname);
    global.pathArr = pathname.split('/');
    pathArr.shift();
    var realpath = pathArr.shift();
    switch (realpath) {
        case '/', 'index':
            index.gotoIndex(res, req);
            break;
        case '/favicon.ico':
            return;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('resource could not find');
    }


}).listen(1331);
console.log('server is running on localhost:1331');

