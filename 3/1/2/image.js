/**
 * Created by harry on 20/02/2017.
 */

var fs = require('fs');
var url = require('url');
var req, res;

module.exports.init = function(respond, request){
    req = request;
    res = respond;
};

module.exports.img = function(){
    var filePath = __dirname + url.parse('/end.png').pathname;
    var file =fs.readFileSync(filePath);
    res.writeHead(200,{'Content-Type':'image/png'});
    res.end(file);
};
