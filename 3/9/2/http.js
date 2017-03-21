/**
 * Created by harry on 21/03/2017.
 */
/**
 * Created by harry on 20/02/2017.
 */
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var http_param = require('./http_param');

function gotoIndex(res, req) {
    var indexPath = __dirname + '/index.html';
    var file = fs.readFileSync(indexPath);

    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(file)
}
function calculate(res, req) {
    var pathname = url.parse(req.url).pathname;
    var query = querystring.parse(url.parse(req.url).query);

    http_param.init(res, req);

    var first = http_param.GET('firstValue');
    var second = http_param.GET('secondValue');

    var type = http_param.GET('type');

    var total = 0;
    switch (type) {
        case '1':
            total = first + second;
            break;
        case '2':
            total = first - second;
            break;
        case '3':
            total = first * second;
            break;
        case '4':
            total = first / second;
            break;
        default:
            console.log('can not recognize the type');
            break;
    }
    console.log('total: ' + total);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(total.toString())

}
http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    var query = querystring.parse(query);
    console.log(query);

    if(pathname === '/') {
        gotoIndex(res, req);
    }else if(pathname === '/calculate') {
        calculate(res, req);
    }else if(pathname === '/favicon.ico') {
        return;
    }else{
        console.log('pathname: ' + pathname);
    }

}).listen(3000);
console.log('server is running on localhost:3000');