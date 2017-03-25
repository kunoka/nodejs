/**
 * Created by harry on 25/03/2017.
 */

var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    static = require('./static_module');

http.createServer(function (req, res) {
    var filepath = url.parse(req.url).pathname;
console.log('filepath: ' + filepath);
    switch (filepath) {
        case '/':
            gotoIndex(res, req);
            break;
        case '/favicon.ico':
            return;
        default:
            static.getStaticFile(filepath, res, req, __dirname);
            break;
    }

    function gotoIndex(res, req) {

        var filepath = __dirname + '/index.html';
        var file = fs.readFileSync(filepath);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(file)
    }
}).listen(3000);
console.log('server is running on localhost:3000');