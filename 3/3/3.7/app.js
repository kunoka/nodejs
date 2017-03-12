/**
 * Created by gao on 2017/3/12.
 */
global.BASE_DIR = __dirname;
global.CON = "./controller/"
global.lib = {
    fs : require('fs'),
    http : require('http'),
    url : require('url'),
    jade : require('jade'),
    router : require('./lib/router.js'),
    querystring : require('querystring')
};
lib.http.createServer(function(req, res) {
    res.render = function(){
        var template = arguments[0]; // Users/gary/git/nodejs/3/7/view/index.jade
        var options = arguments[1]; // option
        var str = lib.fs.readFileSync(template, 'utf8');
        var fn = lib.jade.compile(str, { filename: template, pretty: true });   // jade module 功能
        var page = fn(options);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page);
    };
    req.setEncoding("utf-8");
    var postData = '';
    req.addListener("data", function(postDataChunk) {
        postData += postDataChunk;
    });

    req.addListener("end", function() {
//        console.log(postData);
//        var param = lib.querystring(postData);
    });
    lib.router.init(res, req);
    var path = lib.url.parse(req.url).path;
    var pathName = lib.url.parse(req.url).pathname;
    console.log( lib.url.parse(req.url));
    var index = path.lastIndexOf('\/');
//    console.log("index: " + index);
    var target = path.substring(index+1);
    var modelArr = target.split("?");
    if(modelArr) {
        console.log(modelArr[0]);
//        var model = require(CON + modelArr[0]);
//        var controller = lib.querystring.parse(lib.url.parse(path).query).c;
////        model = require('./lib/' + model[0]);
//        console.log(" controller:"  +controller);
//
    }
    switch (pathName) {
        case "/" :
            lib.router.gotoIndex(res, req);
            break;
        case "/favicon.ico":
            return;
        case "login":
            lib.router.gotoLive(res, req);
            break;
        default :
            lib.router.gotoIndex(res);
            break;
    }
}).listen(3000);
console.log("Sever is running on localhost:3000");

