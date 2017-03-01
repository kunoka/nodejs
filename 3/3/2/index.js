/**
 * Created by harry on 20/02/2017.
 */
var fs = require('fs');
var url = require('url');
var req, res;

exports.init = function(respond, request){
    req = request;
    res = respond;
};

exports.defaultIndex = function(){
    var filePath = __dirname + url.parse('/index.html').pathname;
    var file =fs.readFileSync(filePath);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(file);
};