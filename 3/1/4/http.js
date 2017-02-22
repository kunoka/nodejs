/**
 * Created by harry on 20/02/2017.
 */
var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req, res){
    var query = url.parse(req.url).query;
    var param = querystring.parse(query);
    console.log(param);

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(JSON.stringify(param))
}).listen(3000);
console.log('server is running on localhost:3000');