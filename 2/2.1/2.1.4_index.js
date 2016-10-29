/**
 * Created by harry on 10/9/16.
 */
var fs = require('fs'),
    url = require('url');

 module.exports.goIndex = function(res, req){
    /*获取当前index.html的路径*/
    //var readPath = __dirname + '/' + url.parse('index.html').pathname;
    var readPath = './' + url.parse('index.html').pathname;
    //console.log("url.parse('index.html').pathname: " + url.parse('index.html').pathname);
    var indexPage = fs.readFileSync(readPath);
    /*返回*/
    res.end(indexPage);
}