/**
 * Created by harry on 22/02/2017.
 */

var url = require('url');
// var querystring = require('querystring');
var _req, _res;

module.exports.init = function(res, req){
    _req = req;
    _res = res;
};

module.exports.get = function(key){
    var path = url.parse(_req.url).query;
    console.log(path);
    var keys = querystring.parse(path)[key];
    console.log(keys);
    return keys? keys : '';
};

module.exports.post = function(key, callback){
    var postData = '';

    _req.addListener('data', function(postDataChunk){
        postData += postDataChunk;
    });

    _req.addListener('end', function(){
        var keys =  JSON.parse(postData)[key];
        return keys? callback(keys) : '';
    });
};