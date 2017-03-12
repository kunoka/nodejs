/**
 * Created by gao on 2017/3/12.
 */
global.PATH = __dirname;
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
    var pathname = __dirname;
    var urlPath = lib.url.parse(req.url).pathname;
    console.log("urlPath： " + urlPath);
    var index = req.url.lastIndexOf('\/');
//    console.log("index: " + index);
    var target = req.url.substring(index+1);
//    console.log(target);
    var model = urlPath;
    switch (urlPath) {
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

