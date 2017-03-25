/**
 * Created by harry on 24/03/2017.
 */

var http = require('http'),
    url = require('url'),
    crypto = require('./crpto'),
    http_param = require('./http_param');

http.createServer(function(req, res) {

    var filepath = url.parse(req.url).pathname;
    // console.log(filepath);

    http_param.init(res, req);
    crypto.init(res, req);
   switch (filepath) {
        case '/':
            crypto.index(res, req);
            break;
        case '/favicon.ico':
            return;
        case '/encrypt':
            crypto.encrypt();
            break;
        case '/decrypt':
            crypto.decrypt();
            break;
        default:
            crypto.index(res, req);
            break;
    }

}).listen(3000);

console.log('server is running on localhost:3000');