/**
 * Created by harry on 11/13/16.
 */
 var res, req,
    fs = require('fs'),
    url = require('url');

exports.init = function(response, request){
    res = response;
    req = request;
}

exports.index = function(){
    var readpath = __dirname + '/' + url.parse('logo.png').pathname;
    var indexpage = fs.readFileSync(readpath);
    res.writeHead(200,{'Content-type':'image/png'});
    res.end(indexpage);
}