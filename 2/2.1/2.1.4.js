/**
 * Created by harry on 10/9/16.
 */
/*

1. 入口模块
2. router模块
3. dns解析模块
4. 首页展示模块

*/

var http = require('http'),
    url = require('url');
var router = require('./2.1.4_router.js');

http.createServer(function(req,res){
    /*写http head 返回html，因此content-Type为html*/
    var pathname = url.parse(req.url).pathname;
    req.setEncoding('utf8');
    res.writeHead(200,{'Content-Type':'text/html'});
    router.router(res, req, pathname); //调用router方法来处理url路由
}).listen(3001,"127.0.0.1");
console.log("Server running at http://127.0.0.1:3001/");